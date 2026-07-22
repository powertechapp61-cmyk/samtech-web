'use client';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();


  // const items = [
  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01652965804.jpg",
  //     thumb: "/assets/img/gallery_img/01652965804.jpg",
  //     // caption: "Sample Photo 1",
  //   },

  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01652965823.jpg",
  //     thumb: "/assets/img/gallery_img/01652965823.jpg",
  //     // caption: "Sample Photo 1",
  //   },

  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01652965841.jpg",
  //     thumb: "/assets/img/gallery_img/01652965841.jpg",
  //     // caption: "Sample Photo 1",
  //   },

  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01653046118.png",
  //     thumb: "/assets/img/gallery_img/01653046118.png",
  //     // caption: "Sample Photo 1",
  //   },


  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01653208757.jpeg",
  //     thumb: "/assets/img/gallery_img/01653208757.jpeg",
  //     // caption: "Sample Photo 1",
  //   },

  //   {
  //     type: "image",
  //     src: "/assets/img/gallery_img/01653488601.jpeg",
  //     thumb: "/assets/img/gallery_img/01653488601.jpeg",
  //     // caption: "Sample Photo 1",
  //   },
  // ];
  return (
    <>

      {/* <div className="topFooter">
        <div className="container"> 
        <ul>
            <li>
             <span>Brochure</span>
              </li>
            <li>
           <img src="/assets/img/pdf-download.svg" alt="pdf download" />
              <span>Mechanical Maintenance</span>
              </li>
            <li>
             <img src="/assets/img/pdf-download.svg" alt="pdf download" />
             <span>Electrical Maintenance</span>
              </li>
            <li>
             <img src="/assets/img/pdf-download.svg" alt="pdf download" />
              <span>Fabrication</span>
              </li>
            <li>
             <img src="/assets/img/pdf-download.svg" alt="pdf download" />
              <span>Valve Testing</span>
              </li>
            <li>
              <img src="/assets/img/pdf-download.svg" alt="pdf download" />
              <span>Manpower</span>
            </li>
            <li>
              <img src="/assets/img/pdf-download.svg" alt="pdf download" />
              <span>Powerplant O & M</span>
            </li>
        </ul>
        </div>
    </div> */}
      <footer>
        <div className="container">
          <div className='row mb_40'>
            <div className='col-lg-4 mobspaceMb_24'>
              <h2>{t("footer.aboutTitle")}</h2>
              <p className='fontSize16 fontWeight400 whiteText_Clr mb_24'>{t("footer.aboutText")}</p>
              <div className="certifiedLogo">
                <img src="/assets/img/logo2.jpg" alt="logo" />
              </div>

            </div>
            <div className='col-lg-2 mobspaceMb_24'>
              <h2>{t("footer.quickLinks")}</h2>


              <ul className='quicklinks'>
                <li>
                  <Link href={"/"} prefetch>
                    <img src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>{t("footer.home")}</span>

                  </Link>
                </li>
                <li>
                  <Link href={"/company"} prefetch>
                    <img src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>{t("footer.aboutUs")}</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/group-companies"} prefetch>
                    <img src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>{t("footer.groupCompanies")}</span>

                  </Link>
                </li>
                <li>
                  <Link href={"/appreciations"} prefetch>
                    <img src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>{t("footer.appreciations")}</span>

                  </Link>
                </li>

                <li>
                  <Link href={'/photo-gallery'} prefetch>
                    <img src="/assets/img/stepPoint.svg" alt='step point' />
                    <span> {t("footer.photoGallery")}</span>

                  </Link>
                </li>
                <li>
                  <Link href={'/our-branches'} prefetch>
                    <img src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>{t("footer.ourBranches")}</span>

                  </Link>
                </li>
                <li>
                  <Link href={'/trainings'} prefetch>
                    <img src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>{t("footer.trainings")}</span>

                  </Link>
                </li>
                <li>
                  <Link href={'/careers'} prefetch>
                    <img src="/assets/img/stepPoint.svg" alt='step point' />
                    <span>{t("footer.careers")}</span>

                  </Link>
                </li>
                <li>
                  <Link href={"/contact-us"} prefetch>
                    <img src="/assets/img/stepPoint.svg" alt='step point' />
                    <span> {t("footer.contactUs")}</span>

                  </Link>
                </li>



              </ul>
            </div>

            <div className='col-lg-2 mobspaceMb_24'>
              <h2>{t("footer.quickCode")}</h2>

              <div className='qrCodeLink'>
                <img src="/assets/img/qrcode.jpeg" alt="qrcode" />
              </div>

            </div>
            <div className='col-lg-4'>
              <h2>{t("footer.location")}</h2>

              <iframe height="300" src="https://www.google.com/maps/place/22%C2%B046'27.7%22N+39%C2%B005'01.9%22E/@22.7743551,39.0812815,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.7743551!4d39.0838564?hl=en&entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D" style={{
                border: 0, width: "100%"
              }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              {/* <Link target='_blank' className='blackText_Clr textDecoration_none  fontWeight400 fontSize16' href="https://maps.app.goo.gl/ECLS7hB7t8YHagqh8">
                <div className='displayInlineFlex gap16 mb_24'>
                <div>
                    <img className='width20px' src="/assets/img/gis_location-poi.svg" alt="location" />
                </div>

                <div>
                
                  <p className='blackText_Clr fontWeight400 fontSize16 mb_8'>Building No#9324, Street Mughttal</p>
                  <p className='blackText_Clr fontWeight400 fontSize16 mb_8'>Ibn Slnan Street, AL Naseem Dist,</p>
                  <p className='blackText_Clr fontWeight400 fontSize16'>Rabigh - Saudi Arabia</p>
                </div>
              </div>
              </Link> */}

              {/* <div className='displayInlineFlex gap16 mb_24'>
                <div>
                  <img className='blackFilter width18px' src="/assets/img/phonetop_icon.svg" alt="phone" />
                </div>

                <div>
                  <ul className='emptyList'>
                    <li className='mb_8 blackText_Clr fontWeight400 fontSize16'>India :&nbsp;
                      <Link className='blackText_Clr textDecoration_none  fontWeight400 fontSize16' href="tel:+919498660803">+919498660803</Link></li>
                    <li className='mb_8 blackText_Clr fontWeight400 fontSize16'>Bahrain :&nbsp;
                      <Link className='blackText_Clr textDecoration_none fontWeight400 fontSize16' href="tel:+97366622536">+97366622536</Link></li>
                    <li className='mb_8 blackText_Clr fontWeight400 fontSize16'>UAE :&nbsp;
                      <Link className='blackText_Clr textDecoration_none fontWeight400 fontSize16' href="tel:+971504712069">+971504712069</Link></li>
                    <li className='mb_8 blackText_Clr fontWeight400 fontSize16'>Saudi :&nbsp;
                      <Link className='blackText_Clr textDecoration_none fontWeight400 fontSize16' href="tel:+966507745097">+966507745097</Link></li>
                  </ul>

                </div>
              </div> */}

            </div>
            {/* <div className='col-lg-3'>
              <h2>Gallery</h2>
              <div className='lightGalleryFooter mb_24'>
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgZoom, lgThumbnail]}
              >
                {items.map((item, i) => (

                  <a key={i}
                    href={item.src}
                    data-sub-html={`<h4>${item.caption}</h4>`}
                    data-poster={item.type === "video" ? item.thumb : undefined}
                  >
                    <img
                      src={item.thumb}
                      alt={item.caption}
                    />
                  </a>
                ))}
              </LightGallery>

             
            </div>
              <Link className='fontSize16 fontWeight400 bainganiText_Clr' href="/gallery">View More</Link>
            </div> */}

          </div>

          <div className='copyRightsec'>
            <p className='whiteText_Clr  fontWeight400 fontSize14 textalign_center'>{t("footer.copyrightText")}  <Link href={"/"} prefetch>{t("footer.companyName")}</Link> {new Date().getFullYear()}. {t("footer.allRightsReserved")}</p>
          </div>
        </div>
      </footer>


      <div className='socialMedia-icon'>
        <ul>

         

         
          <li>
            <Link href="https://wa.me/966507745097" target="_blank">
              <img src="/assets/img/whatsappIcon.svg" alt="whatsapp" />
              <span>{t("footer.whatsapp")}</span>
            </Link>
          </li>
          {/* <li>
            <Link href="https://www.facebook.com/people/Power-Tech-Group-Companies/61558411207892/" target="_blank">
              <img src="/assets/img/logos_facebook.svg" alt="fb" />
              <span>Facebook</span>
            </Link>
          </li> */}
          {/* <li>
            <Link href="https://www.instagram.com/cpdti.chennai/" target="_blank">
              <img src="/assets/img/skill-icons_instagram.svg" alt="insta" />
              <span>Instagram</span>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/powertechdevelopment/" target="_blank">
              <img src="/assets/img/logos_linkedin-icon.svg" alt="linkedin" />
              <span>LinkedIn</span>
            </Link>
          </li> */}

          {/* <li>
            <Link href="https://x.com/powertechgroup" target="_blank">
              <img src="/assets/img/ri_twitter-x-line.svg" alt="twitter" />
              <span>Twitter</span>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@chennaipowerdesalinationtr3180" target="_blank">
              <img src="/assets/img/logos_youtube-icon.svg" alt="youtube" />
              <span>YouTube</span>
            </Link>
          </li> */}
          <li>

            <Link href="tel:+966507745097">
              <img className='whiteFilter' src="/assets/img/phone_icon.svg" alt="phone" />
              <span>{t("footer.saudiPhoneLabel")} :&nbsp; +966507745097</span>
              </Link>
          </li>

        </ul>
      </div>

    </>
  );
}

export default Footer;
