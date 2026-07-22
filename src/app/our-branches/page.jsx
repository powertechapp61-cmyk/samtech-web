"use client";
import React from 'react'
import Link from "next/link";
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
import { useLanguage } from '../context/LanguageContext';
const page = () => {
    const { t } = useLanguage();
    const tabData = [
        {
            key: "bahrainTab",
            title: t("ourBranches.tabs.bahrain"),
            items: [
                {
                    src: "/assets/img/bahrain/powertech_bahrain_two.jpeg",
                    thumb: "/assets/img/bahrain/powertech_bahrain_two.jpeg",
                    caption: t("ourBranches.captions.bahrainBuildingTwo"),
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/powertech_bahrain_one.jpeg",
                    thumb: "/assets/img/bahrain/powertech_bahrain_one.jpeg",
                    caption: t("ourBranches.captions.bahrainBuildingOne"),
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/powertech_bahrain_three.jpg",
                    thumb: "/assets/img/bahrain/powertech_bahrain_three.jpg",
                    caption: t("ourBranches.captions.bahrainBuildingOne"),
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/ptd_conference_room.jpg",
                    thumb: "/assets/img/bahrain/ptd_conference_room.jpg",
                    caption: t("ourBranches.captions.bahrainConferenceRoom"),
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/ptd_employees_accomodation.jpeg",
                    thumb: "/assets/img/bahrain/ptd_employees_accomodation.jpeg",
                    caption: t("ourBranches.captions.bahrainEmployeesAccommodation"),
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/ptd_nomac_hse_audit.jpeg",
                    thumb: "/assets/img/bahrain/ptd_nomac_hse_audit.jpeg",
                    caption: t("ourBranches.captions.bahrainHseAudit"),
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/ptd_upvc_factory_inside.jpeg",
                    thumb: "/assets/img/bahrain/ptd_upvc_factory_inside.jpeg",
                    caption: t("ourBranches.captions.bahrainUpvcFactoryInside"),
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/ptd_upvc_factory.jpeg",
                    thumb: "/assets/img/bahrain/ptd_upvc_factory.jpeg",
                    caption: t("ourBranches.captions.bahrainUpvcFactory"),
                    type: "image"
                },
                {
                    src: "/assets/img/bahrain/valve-tech-workshop-in-bahrain.jpeg",
                    thumb: "/assets/img/bahrain/valve-tech-workshop-in-bahrain.jpeg",
                    caption: t("ourBranches.captions.bahrainValveWorkshop"),
                    type: "image"
                }
            ],
        },
        {
            key: "saudiTab",
            title: t("ourBranches.tabs.saudi"),
            items: [
                { src: "/assets/img/bahrain/saudi1.jpg", thumb: "/assets/img/bahrain/saudi1_thumb.jpg", caption: t("ourBranches.captions.saudiOffice"), type: "image" },
            ],
        },
        {
            key: "indiaTab",
            title: t("ourBranches.tabs.india"),
            items: [
                { src: "/assets/img/india_branch/cpdti_Institute_chennai_india.jpg", thumb: "/assets/img/india_branch/cpdti_Institute_chennai_india.jpg", caption: t("ourBranches.captions.cpdtiInstitute"), type: "image" },
                { src: "/assets/img/india_branch/dindigul-office.jpg", thumb: "/assets/img/india_branch/dindigul-office.jpg", caption: t("ourBranches.captions.dindigulOffice"), type: "image" },
                { src: "/assets/img/india_branch/dindigul-training-center.png", thumb: "/assets/img/india_branch/dindigul-training-center.png", caption: t("ourBranches.captions.dindigulTrainingCenter"), type: "image" },
            ],
        },
        {
            key: "uaeTab",
            title: t("ourBranches.tabs.uae"),
            items: [
                { src: "/assets/img/bahrain/uae1.jpg", thumb: "/assets/img/bahrain/uae1_thumb.jpg", caption: t("ourBranches.captions.ajmanWorkshop"), type: "image" },
            ],
        },
    ];


    return (
        <>
            <section className='hero-banner'>
                <div className='container'>
                    <div className='row alignItem_center' >
                        <div className='col-lg-6'>
                            <div className='innerpage_bnrContent'>
                                <ul className='page_breadcrumb'>
                                    <li><Link href={"/"}> {t("common.home")}</Link></li>
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                    <li>{t("header.nav.gallery")}</li>
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                    <li><Link href={'/our-branches'}>{t("header.nav.ourBranches")}</Link></li>
                                </ul>
                                <h1>{t("ourBranches.pageTitle")}</h1>
                                <p>{t("ourBranches.intro")}</p>
                                <Link href="/contact-us" className='mainbtn'>{t("common.contactUsBtn")}</Link>
                            </div>
                        </div>
                        {/* <div className='col-lg-5 offset-lg-1'>
                            <div className='hero-banner_img'>
                                <img className="img-1" src="/assets/img/all_logo.jfif" alt="gallery" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>


            <section className='ourBranches_sec'>
                <div className='container'>
                    <Tabs defaultActiveKey="bahrainTab" id="uncontrolled-tab-example" className="stscTab">
                        {tabData.map((tab) => (
                            <Tab key={tab.key} eventKey={tab.key} title={tab.title}>
                                <LightGallery speed={500} plugins={[lgZoom, lgThumbnail]}>
                                    {tab.items.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.src}
                                            data-sub-html={`<h4>${item.caption}</h4>`}
                                            data-poster={item.type === "video" ? item.thumb : undefined}
                                        >
                                            <img src={item.thumb} alt={item.caption} />
                                            <div className='galleryhover'><h5>{item.caption}</h5></div>
                                        </a>
                                    ))}
                                </LightGallery>
                            </Tab>
                        ))}
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default page
