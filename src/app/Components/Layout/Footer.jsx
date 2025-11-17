'use client';
import Link from 'next/link';

const Footer = () => {


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
              <h2>About Us</h2>
              <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>Sam Technical Service Contracting Est an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts.</p>
              <div className='qrCodeLink'>
              <img src="/assets/img/qrcode.png" alt="qrcode" />
              </div>
            


            </div>
            <div className='col-lg-4 mobspaceMb_24'>
              <h2>Quick Links</h2>
        

              <ul className='quicklinks'>
                <li>
                  <Link href={"/"} prefetch>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/about-us"} prefetch>
                      About Us
                    </Link>



                

                </li>

                <li>
                  <Link href={"/appreciations"} prefetch>
                    Appreciations
                  </Link>
                </li>
                <li>
                  <Link href={"/brochures"} prefetch>
                    Brochures
                  </Link>
                </li>
                <li>
                  <Link href={'/photo-gallery'} prefetch>
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href={'/our-branches'} prefetch>
                    Our Branches
                  </Link>
                </li>
                <li>
                  <Link href={'/trainings'} prefetch>
                    Trainings
                  </Link>
                </li>
                <li>
                  <Link href={'/careers'} prefetch>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href={"/contact-us"} prefetch>
                    Contact Us
                  </Link>
                </li>



              </ul>
            </div>
            <div className='col-lg-4 mobspaceMb_24'>
              <h2>Quick Contact</h2>
              <Link target='_blank' className='blackText_Clr textDecoration_none  fontWeight400 fontSize16' href="https://maps.app.goo.gl/ECLS7hB7t8YHagqh8">
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
              </Link>

              <div className='displayInlineFlex gap16 mb_24'>
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
              </div>

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
            <p className='tranquilPondText_Clr  fontWeight400 fontSize14 textalign_center'>Copyright ©  <Link href={"/"} prefetch>Sam Technical Service Contracting Est</Link> 2025. All rights reserved.</p>
            </div>
        </div>
      </footer>




    </>
  );
}

export default Footer;
