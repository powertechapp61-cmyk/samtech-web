"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  // The company name is the page's <h1> only on the home page; inner pages have their own <h1>.
  const BrandTag = pathname === "/" ? "h1" : "div";
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = (event) => {
    setIsActive((current) => !current);
  };

  const [searchText, setSearchText] = useState("");

  const parentClasses = `
  search-popup 
  ${isOpen ? "opened" : ""} 
  ${searchText.length > 0 ? "showDropdown" : ""}
`.trim();
  const handleSearchClick = (e) => {
    setIsOpen((current) => !current);
  }
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("search-popup-active");
    } else {
      body.classList.remove("search-popup-active");
    }

    // Cleanup if component unmounts
    return () => body.classList.remove("search-popup-active");
  }, [isOpen]);
  const dropdownRef = useRef();


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);   // scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // const handleMenuClose = () => {
  //   dropdownRef.current?.click();
  //   handleToggleClick();
  //   setIsActive(false);
  // };

  return (

   <>
      <div className="topHeader">
        <div className="container">
          <div>
            <div className="displayFlex alignItem_center gap30">
              <div>
                <select
                  aria-label={t("header.langLabel")}
                  className="langSelect"
                  value={language}
                  onChange={(e) => {
                    localStorage.setItem('currLan',e.target.value)
                    setLanguage(e.target.value)
                  }}
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                  {/* <option value="hi">Hindi</option> */}
                </select>
              </div>
              <div>
                <Dropdown className="phnoSelect">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">

                    <div className="displayInlineFlex alignItem_center gap12">
                      <div>
                        <img src="/assets/img/phonetop_icon.svg" alt="" aria-hidden="true" />
                      </div>
                      <div>
                        {t("header.phone.saudi")} :&nbsp;
                        <Link href="tel:+966507745097">+966507745097</Link>
                      </div>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* Plain tel: links (previously these were links nested inside links to service pages) */}
                    <Dropdown.Item href="tel:+97366622536">{t("header.phone.bahrain")} :&nbsp;+97366622536</Dropdown.Item>
                    <Dropdown.Item href="tel:+971504712069">{t("header.phone.uae")} :&nbsp;+971504712069</Dropdown.Item>
                    <Dropdown.Item href="tel:+919498660803">{t("header.phone.india")} :&nbsp;+919498660803</Dropdown.Item>


                  </Dropdown.Menu>
                </Dropdown>
              </div>


            </div>
            {/* <div className="displayFlex alignItem_center gap30"> */}

            <div>
              <ul className="socialMediaLink">
                {/* <li>
                  <button className="circleIconbtn" onClick={handleSearchClick}>
                    <img className="whiteFilter" src="/assets/img/tabler_search.svg" alt="search" />
                  </button>
               </li> */}
                {/* <li>
                  <Link href="https://wa.me/966507745097" target="_blank">
                    <img style={{width:'24px'}} src="/assets/img/ic_baseline-whatsapp.svg" alt="whatsapp" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/people/Power-Tech-Group-Companies/61558411207892/" target="_blank">
                    <img src="/assets/img/icons_facebook.svg" alt="fb" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/cpdti.chennai/" target="_blank">
                    <img src="/assets/img/icons_instagram.svg" alt="insta" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/powertechdevelopment/" target="_blank">
                    <img src="/assets/img/icons_linkedin.svg" alt="linkedin" />
                  </Link>
                </li>

                <li>
                  <Link href="https://x.com/powertechgroup" target="_blank">
                    <img src="/assets/img/x-twitter.svg" alt="twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@chennaipowerdesalinationtr3180" target="_blank">
                    <img src="/assets/img/youtube_icon.svg" alt="youtube" />
                  </Link>
                </li> */}


              </ul>
            </div>
          </div>
          {
            isOpen && (
              <div className={parentClasses}>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <input type="search" name="search-field" placeholder={t("header.searchPlaceholder")} value={searchText}
                      onChange={(e) => setSearchText(e.target.value)} onFocus={() => setIsOpen(true)} required="" />
                    <button type="submit" onClick={() => setIsOpen(false)}>
                      <img src="/assets/img/ic_round-close.svg" alt="close" />
                    </button>
                  </div>
                </form>

                {/* Dropdown: only show when user types */}
                {searchText.length > 0 && (
                  <div className="searchDropdown">
                    <ul>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                      <li>Commodi ducimus doloremque perferendis aut amet hic, modi pariatur! Animi, officiis natus, neque repellat laboriosam repellendus perferendis cupiditate cumque, reiciendis eum ad.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                  </div>
                )}
              </div>
            )
          }
        </div>

      </div>
      <header className={isSticky ? "stickytop" : ""}>
        <div className="container">
          {!isSticky && (
          <div className="deskFlexMobileBlock alignItem_center justifyContent_spacebetween deskHeader">
          <div className="brandlogo">
            <Link href={"/"} prefetch aria-label="SAM Technical Service Contracting Est – Home">
              <img
                  src="/assets/img/sam_logo.png"
                alt="SAM Technical Service Contracting Est logo"
              />
            </Link>
          </div>
            <div className="logo_text">
              <BrandTag className="logo_title"><span>S</span>am <span>T</span>echnical <span>S</span>ervice <span>C</span>ontracting Est</BrandTag>
            <p>{t("header.logoTagline")}</p>
          </div>
          <div className="qatarDivision">

            <div>
                <div>
                    <h3>OUR QATAR DIVISION</h3>
                  <img width="150"
                    src="/assets/img/q-power-logo.png"
                    alt="Q power Logo"
                  />
                </div>
            <div>
            <h5>Q-POWER TECH</h5>
            <p>Mechanical Contracting, Qatar</p>
            </div>
            </div>

          </div>
          </div>
          )}
            <nav>
            <div className="mobileHeader">
              <div className="stickylogo">
                <Link href={"/"} prefetch aria-label="SAM Technical Service Contracting Est – Home">
                  <img
                      src="/assets/img/sam_logo.png"
                    alt="SAM Technical Service Contracting Est logo"
                  />
                </Link>
              </div>

              <div className="mobileToggle">
                <button className="emptyBtn" onClick={handleToggleClick} aria-label="Toggle menu" aria-expanded={isActive}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <div
              className={isActive ? " navbarCollapse show" : "navbarCollapse"}
            >
              <div>
                <ul>
                  <li>
                    <Link href={"/"} prefetch>
                      {t("header.nav.home")}
                    </Link>
                  </li>
                  <li>
                    {/* <Link href={"/about-us"} prefetch>
                      About Us
                    </Link> */}



                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        {t("header.nav.company")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href={'/company'}>{t("header.nav.aboutUs")} </Dropdown.Item>
                        <Dropdown.Item href={'/leadership-team'}>Leadership team</Dropdown.Item>
                        <Dropdown.Item href={'/group-companies'}>{t("header.nav.groupCompanies")}</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </li>
                  <li >
                    {/* <Link href="#" prefetch>
                      Services
                    </Link> */}
                    <Dropdown className="serviceDropdown">
                      <Dropdown.Toggle id="dropdown-basic">
                        {t("header.nav.services")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/services/online-safety-valve-testing">{t("header.nav.onlineSafetyValveTesting")}</Dropdown.Item>
                        <Dropdown.Item href="/services/offline-valve-testing">{t("header.nav.offlineValveTesting")}</Dropdown.Item>
                        <Dropdown.Item href="/services/industrial-valve-servicing">{t("header.nav.allTypesValveServicing")}</Dropdown.Item>
                        <Dropdown.Item href="/services/technical-manpower-supply">{t("header.nav.technicalManpowerSupply")}</Dropdown.Item>
                        <Dropdown.Item href="/services/online-leak-sealing">{t("header.nav.onlineLeakSealing")}</Dropdown.Item>
                        {/* <Dropdown.Item href="/services/hot-tapping">{t("header.nav.hotTapping")}</Dropdown.Item> */}
                        <Dropdown.Item href="/services/heat-exchanger-maintenance">{t("header.nav.heatExchanger")}</Dropdown.Item>
                        <Dropdown.Item href="/services/ro-plant-epc-contracts">{t("header.nav.roPlantEpc")}</Dropdown.Item>
                        <Dropdown.Item href="/services/solar-plant-epc">{t("header.nav.solarPlantEpc")}</Dropdown.Item>
                        <Dropdown.Item href="/services/ro-plant-retrofitting">{t("header.nav.roPlantsRetroFitting")}</Dropdown.Item>
                        <Dropdown.Item href="/services/upvc-aluminium-doors-windows">{t("header.nav.upvcDoorsWindows")}</Dropdown.Item>

                      </Dropdown.Menu>
                    </Dropdown>

                  </li>


                  <li>
                    <Link href={"/service-page/hot_tapping"} prefetch>
                      {t("header.nav.hotTapping")}
                    </Link>
                  </li>

                  <li>
                    <Link href={"/appreciations"} prefetch>
                      {t("header.nav.appreciations")}
                    </Link>
                  </li>
                  <li>
                    <Link href={"/brochures"} prefetch>
                      {t("header.nav.brochures")}
                    </Link>
                  </li>
                  <li>

                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        {t("header.nav.gallery")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href={'/photo-gallery'}>{t("header.nav.photoGallery")}</Dropdown.Item>
                        <Dropdown.Item href={'/video-gallery'}>{t("header.nav.videoGallery")}</Dropdown.Item>
                        <Dropdown.Item href={'/our-branches'}>{t("header.nav.ourBranches")}</Dropdown.Item>
                        <Dropdown.Item href={'/trainings'}>{t("header.nav.trainings")}</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  {/* <li>
                    <Link href="#" prefetch>
                      Credentials’
                    </Link>
                  </li> */}


                  <li>
                    <Link href={'/careers'} prefetch>
                      {t("header.nav.careers")}
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"} prefetch>
                      {t("header.nav.contactUs")}
                    </Link>
                  </li>
                  {!isSticky && (
                  <li>
                    <button className="circleIconbtn" onClick={handleSearchClick} aria-label="Search">
                        <img className="whiteFilter" src="/assets/img/tabler_search.svg" alt="" />
                    </button>
                  </li>
                  )}


                </ul>
              </div>
              {/* <div>


              <div className="certifiedLogo">
                  <img src="/assets/img/logo2.jpg" alt="logo" />
                </div> 

              </div> */}

            </div>
          </nav>


        </div>
      </header>
    </>

  );
};

export default Header;
