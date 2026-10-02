import Link from "next/link";
import { SERVICES } from "@/lib/seo";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

// Branded 404 page – keeps visitors (and crawlers) moving to real pages.
export default function NotFound() {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="innerpage_bnrContent">
          <h1>Page not found</h1>
          <p className="mb_24">
            The page you are looking for has moved or no longer exists. Try one of our services below, or{" "}
            <Link href="/contact-us">contact our team</Link>.
          </p>
          <ul className="mb_24">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
          <Link href="/" className="mainbtn">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
