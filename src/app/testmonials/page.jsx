"use client";
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
const Page = () => {


    const onInit = () => {
        console.log("✅ LightGallery initialized successfully!");
    };


    const testimonialSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        lazyLoad: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                    centerMode: false,
                },
            },
        ],
    };



    const appLetterItems = [
        {
            type: "image",
            src: "/assets/img/testmonials/c1.jpg",
            thumb: "/assets/img/testmonials/c1.jpg",
            caption: "Company Registration Certificate – Power Tech Development",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c2.jpg",
            thumb: "/assets/img/testmonials/c2.jpg",
            caption: "Company Registration Certificate – Valve Tech Testing",
        },
    ]


    const isoItems = [
        {
            type: "image",
            src: "/assets/img/testmonials/c3.jpg",
            thumb: "/assets/img/testmonials/c3.jpg",
            caption: "ISO 9001:2015",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c4.jpg",
            thumb: "/assets/img/testmonials/c4.jpg",
            caption: "ISO 45001:2018",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c5.jpg",
            thumb: "/assets/img/testmonials/c5.jpg",
            caption: "ISO 14001: 2015",
        },
    ]



    const crCopiesItems = [
        {
            type: "image",
            src: "/assets/img/testmonials/c6.jpg",
            thumb: "/assets/img/testmonials/c6.jpg",
            caption: "Customer Appreciation Letter- Mitsubishi , Japan",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c7.jpg",
            thumb: "/assets/img/testmonials/c7.jpg",
            caption: "Customer Appreciation Letter- Electricity Water Authority",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c8.jpg",
            thumb: "/assets/img/testmonials/c8.jpg",
            caption: "Customer Appreciation Letter- NOMAC",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/vat4.jpg",
            thumb: "/assets/img/testmonials/vat4.jpg",
            caption: "VAT Certificate",
        },

        {
            type: "image",
            src: "/assets/img/testmonials/c55.jpg",
            thumb: "/assets/img/testmonials/c55.jpg",
            caption: "GE – Fieldcore – Complyworks Contractor Verification Card with Score of 100",
        },

        {
            type: "image",
            src: "/assets/img/testmonials/5.jpg",
            thumb: "/assets/img/testmonials/5.jpg",
            caption: "Customer Appreciation Letters",
        },
        {
            type: "image",
            src: "/assets/img/testmonials/7.jpg",
            thumb: "/assets/img/testmonials/7.jpg",
            caption: "Customer Ratings",
        },

        {
            type: "image",
            src: "/assets/img/testmonials/eco.jpeg",
            thumb: "/assets/img/testmonials/eco.jpeg",
            caption: "ECOVADIS SUSTAINABILITY RATING - SILVER MEDA FOR POWER TECH GROUP - TOP 25% of the companies assessed by Ecovadis",
        },






    ]
    return (
        <>
            <section className='aboutbnr'>
                <div className='container'>
                    <div className='row alignItem_center' >
                        <div className='col-lg-6'>
                            <div>
                                <h1>Credentials</h1>
                                <p>We are grateful to our clients for giving us the opportunity to work for them; it is a tremendous source of encouragement for our team when our work is recognized. Numerous business leaders from Saudi Arabia and overseas have expressed appreciation for our team thus far.</p>
                                <button className='mainbtn'>Contact Us</button>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className='aboutbnr_img'>
                                <img className="img-1" src="/assets/img/industry_illu.jpg" alt="about us img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='ourInfrastructure_sec'>
                <div className='container textalign_center'>
                    <Tabs
                        defaultActiveKey="appreciationLetterTab"
                        id="uncontrolled-tab-example"
                        className="infrastructureTab"
                    >
                        <Tab eventKey=" crCopiesTab" title="CR Copies data">
                            <div className="crCopiesTab">
                                <LightGallery
                                    onInit={onInit}
                                    speed={500}
                                    plugins={[lgZoom, lgThumbnail]}
                                >
                                    {appLetterItems.map((appLtrItem, i) => (

                                        <a key={i}
                                            href={appLtrItem.src}
                                            data-sub-html={`<h4>${appLtrItem.caption}</h4>`}
                                            data-poster={appLtrItem.type === "video" ? appLtrItem.thumb : undefined}
                                        >
                                            <img
                                                src={appLtrItem.thumb}
                                                alt={appLtrItem.caption}
                                            />

                                            <h5>{appLtrItem.caption}</h5>
                                        </a>
                                    ))}
                                </LightGallery>
                            </div>

                        </Tab>
                        <Tab eventKey="isoCertificateTab" title="ISO Certificate">

                            <div className="isoTab">
                                <LightGallery
                                    onInit={onInit}
                                    speed={500}
                                    plugins={[lgZoom, lgThumbnail]}
                                >
                                    {isoItems.map((isoItem, i) => (

                                        <a key={i}
                                            href={isoItem.src}
                                            data-sub-html={`<h4>${isoItem.caption}</h4>`}
                                            data-poster={isoItem.type === "video" ? isoItem.thumb : undefined}
                                        >
                                            <img
                                                src={isoItem.thumb}
                                                alt={isoItem.caption}
                                            />
                                            <h5>{isoItem.caption}</h5>
                                        </a>
                                    ))}
                                </LightGallery>
                            </div>
                        </Tab>
                        <Tab eventKey="appreciationLetterTab" title="Appreciation letter data">


                            <div className=" appLetterTab">
                                <LightGallery
                                    onInit={onInit}
                                    speed={500}
                                    plugins={[lgZoom, lgThumbnail]}
                                >
                                    {crCopiesItems.map((crCopiesItem, i) => (

                                        <a key={i}
                                            href={crCopiesItem.src}
                                            data-sub-html={`<h4>${crCopiesItem.caption}</h4>`}
                                            data-poster={crCopiesItem.type === "video" ? crCopiesItem.thumb : undefined}
                                        >
                                            <img
                                                src={crCopiesItem.thumb}
                                                alt={crCopiesItem.caption}
                                            />
                                            <h5>{crCopiesItem.caption}</h5>
                                        </a>
                                    ))}
                                </LightGallery>
                            </div>
                        </Tab>

                        <Tab eventKey="referenceTab" title="Reference"
                        ></Tab>

                    </Tabs>
                </div>
            </section>
            <section className='testmonials_sec'>
                <div className='container'>

                    <div className="site-heading">
                        <span className="site-title-tagline textalign_center">--- Testmonials ---</span>
                        <h2 className="site-title textalign_center"> What Our <span>Client Say{`'`}s</span></h2>
                    </div>

                    <Slider {...testimonialSlider}>
                        <div className="testimonialItem">

                            <div className='quoteRightImg'>
                                <img src="/assets/img/quote.svg" alt='quote' />
                            </div>
                            <h3>Transformative Experience</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`'`}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                            <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                <div className='displayFlex alignItem_center gap12 dpProfile'>
                                    <div className=''>
                                        <img src="/assets/img/dp.jpg" alt='sdd' />
                                    </div>
                                    <div>
                                        <h5>Raj kumar</h5>
                                        <span>UI / UX</span>
                                    </div>
                                </div>
                                <div>
                                    <ul className='displayFlex alignItem_center gap12 emptyList'>
                                        <li>
                                            <img src="/assets/img/star_fill.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_fill.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_empty.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_empty.svg" alt='star' />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="testimonialItem">

                            <div className='quoteRightImg'>
                                <img src="/assets/img/quote.svg" alt='quote' />
                            </div>
                            <h3>Transformative Experience</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`'`}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                            <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                <div className='displayFlex alignItem_center gap12 dpProfile'>
                                    <div className=''>
                                        <img src="/assets/img/dp.jpg" alt='sdd' />
                                    </div>
                                    <div>
                                        <h5>Raj kumar</h5>
                                        <span>UI / UX</span>
                                    </div>
                                </div>
                                <div>
                                    <ul className='displayFlex alignItem_center gap12 emptyList'>
                                        <li>
                                            <img src="/assets/img/star_fill.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_fill.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_empty.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_empty.svg" alt='star' />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="testimonialItem">

                            <div className='quoteRightImg'>
                                <img src="/assets/img/quote.svg" alt='quote' />
                            </div>
                            <h3>Transformative Experience</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`'`}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                            <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                <div className='displayFlex alignItem_center gap12 dpProfile'>
                                    <div className=''>
                                        <img src="/assets/img/dp.jpg" alt='sdd' />
                                    </div>
                                    <div>
                                        <h5>Raj kumar</h5>
                                        <span>UI / UX</span>
                                    </div>
                                </div>
                                <div>
                                    <ul className='displayFlex alignItem_center gap12 emptyList'>
                                        <li>
                                            <img src="/assets/img/star_fill.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_fill.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_empty.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_empty.svg" alt='star' />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="testimonialItem">

                            <div className='quoteRightImg'>
                                <img src="/assets/img/quote.svg" alt='quote' />
                            </div>
                            <h3>Transformative Experience</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`'`}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                            <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                <div className='displayFlex alignItem_center gap12 dpProfile'>
                                    <div className=''>
                                        <img src="/assets/img/dp.jpg" alt='sdd' />
                                    </div>
                                    <div>
                                        <h5>Raj kumar</h5>
                                        <span>UI / UX</span>
                                    </div>
                                </div>
                                <div>
                                    <ul className='displayFlex alignItem_center gap12 emptyList'>
                                        <li>
                                            <img src="/assets/img/star_fill.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_fill.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_empty.svg" alt='star' />
                                        </li>
                                        <li>
                                            <img src="/assets/img/star_empty.svg" alt='star' />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Slider>

                </div>
            </section>
        </>
    )
}

export default Page
