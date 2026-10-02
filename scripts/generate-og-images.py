"""
Generates the 1200x630 social-share (Open Graph) images in /public/og.
Re-run after changing a service title or photo:  python3 scripts/generate-og-images.py
Needs Pillow and the Inter font (any bold sans-serif .ttf/.otf works – edit FONT_DIR).
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "public", "assets", "img")
OUT = os.path.join(ROOT, "public", "og")
FONT_DIR = "/usr/share/fonts/opentype/inter"
NAVY = (17, 67, 123)
W, H = 1200, 630

def font(weight, size):
    return ImageFont.truetype(os.path.join(FONT_DIR, f"Inter-{weight}.otf"), size)

def cover(im, w, h):
    im = im.convert("RGB")
    r = max(w / im.width, h / im.height)
    im = im.resize((int(im.width * r + 0.5), int(im.height * r + 0.5)), Image.LANCZOS)
    x, y = (im.width - w) // 2, (im.height - h) // 2
    return im.crop((x, y, x + w, y + h))

def flatten(path):
    im = Image.open(path).convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    bg.alpha_composite(im)
    return bg.convert("RGB")

def wrap(draw, text, fnt, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=fnt) <= max_w:
            cur = t
        else:
            lines.append(cur); cur = w
    lines.append(cur)
    return lines

def make(out_name, photo, title, kicker="SERVICES"):
    base = cover(flatten(os.path.join(IMG, photo)), W, H)
    # navy panel on the left fading into the photo on the right
    grad = Image.new("L", (W, 1))
    for x in range(W):
        a = 250 if x < 560 else int(250 - (x - 560) / (W - 560) * 185)
        grad.putpixel((x, 0), a)
    grad = grad.resize((W, H))
    base.paste(Image.new("RGB", (W, H), NAVY), (0, 0), grad)
    d = ImageDraw.Draw(base)

    # logo card
    logo = Image.open(os.path.join(IMG, "sam_logo.png")).convert("RGBA")
    logo.thumbnail((190, 100), Image.LANCZOS)
    card = Image.new("RGBA", (logo.width + 36, logo.height + 24), (255, 255, 255, 255))
    mask = Image.new("L", card.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, card.width - 1, card.height - 1], 14, fill=255)
    card.alpha_composite(logo, (18, 12))
    base.paste(card.convert("RGB"), (64, 56), mask)

    # kicker + title
    d.text((64, 230), kicker, font=font("SemiBold", 22), fill=(170, 200, 235))
    tf = font("Bold", 56)
    lines = wrap(d, title, tf, 640)
    if len(lines) > 3:
        tf = font("Bold", 46); lines = wrap(d, title, tf, 660)
    y = 268
    for ln in lines:
        d.text((64, y), ln, font=tf, fill="white")
        y += int(tf.size * 1.18)
    d.rectangle([64, y + 14, 64 + 90, y + 20], fill=(143, 179, 224))

    # footer line
    d.text((64, 548), "SAM Technical Service Contracting Est  ·  Rabigh, Saudi Arabia", font=font("Medium", 24), fill=(225, 234, 245))
    d.text((64, 584), "ISO 9001 · ISO 45001 · ISO 14001  |  samtechsa.com", font=font("Regular", 20), fill=(170, 200, 235))
    base.save(os.path.join(OUT, out_name), "JPEG", quality=84, optimize=True, progressive=True)
    print("wrote", out_name)

os.makedirs(OUT, exist_ok=True)
make("default.jpg", "operation_and_maintainance_service_provider.jpg",
     "Valve Testing, O&M & Technical Manpower Services in Saudi Arabia", kicker="POWER · OIL & GAS · WATER")
SERVICES = [
    ("online-safety-valve-testing", "treviType.webp", "Online Safety Valve Testing (Trevi Type)"),
    ("offline-valve-testing", "offline_valve_testing_detail.png", "Offline Safety Valve Testing & Calibration"),
    ("industrial-valve-servicing", "allType_valveServicing_detail.png", "Industrial Valve Servicing & Repair"),
    ("technical-manpower-supply", "technical_manpower_provisioning_home.jpg", "Technical Manpower Supply & O&M Staffing"),
    ("online-leak-sealing", "sealLeaking_detail.png", "Online Leak Sealing Services"),
    ("hot-tapping", "hottapping.jpg", "Hot Tapping & Live Gate Valve Insertion"),
    ("heat-exchanger-maintenance", "heatExchanger.png", "Heat Exchanger Maintenance & Supply"),
    ("ro-plant-epc-contracts", "ro_plant_epc_contracts_home.jpg", "RO Desalination Plant EPC Contracts"),
    ("solar-plant-epc", "solar-plant_epc_home.jpeg", "Solar Plant EPC up to 5 MW & Maintenance"),
    ("ro-plant-retrofitting", "ro-plants-retro-fitting_home.jpg", "RO Plant Retrofit & Membrane Replacement"),
    ("upvc-aluminium-doors-windows", "upvc_home.png", "UPVC & Aluminium Doors and Windows"),
]
for slug, photo, title in SERVICES:
    make(f"{slug}.jpg", photo, title)
