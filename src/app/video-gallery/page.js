'use client';
import { useState } from 'react'
import Link from 'next/link'
// import LightGallery from 'lightgallery/react';
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


const GalleryPage = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const getYoutubeEmbedUrl = (url) => {
        const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    };
    // const onInit = () => {
    //     console.log("✅ LightGallery initialized successfully!");
    // };


    // const [open, setOpen] = useState(false);


    const items = [
        {
            type: "image",
            src: "/assets/img/maxresdefault.jpg",
            link :"https://youtu.be/qQ68wjMlgD8?si=T0CAKoO0CVNsYF4-",
            caption: "ACCUTEST",
        },
        {
            type: "image",
            src: "/assets/img/maxresdefault_2.jpg",
            link :"https://youtu.be/WZ79VwwtoGs?si=6xeVeHabCqORHa9K",
            caption: "ACCUTEST",
        },
        {
            type: "image",
            src: "/assets/img/maxresdefault_3.jpg",
            link :"https://youtu.be/-5mMvSf8LjM?si=bMVX6lRPsywk8hgA",
            caption: "ACCUTEST",
        },
        {
            type: "image",
            src: "/assets/img/maxresdefault_3.jpg",
            link : "https://youtu.be/5CVWtvrCsG4?si=cxMQ0r9QEpSzvStE",
            caption: "ACCUTEST",
        },
        {
            type: "image",
            src: "/assets/img/maxresdefault_4.jpg",
            link : "https://youtu.be/oxllYLlCP8Q?si=69Vz41j_VBcbv1HX",
            caption: "LEGA-TEST",
        },
        {
            type: "image",
            src: "/assets/img/maxresdefault_5.jpg",
            link : "https://youtu.be/H0ayq66gMZU?si=gjoymDU8Q6AKEhSY",
            caption: "LEGA-TEST",
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
                                    <li><Link href={"/"}> Home</Link></li>
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                    <li>Gallery</li>
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                    <li><Link href={'/video-gallery'}>Video Gallery</Link></li>
                                </ul>
                                <h1>Video Gallery</h1>
                                <p>A visual record of our work across Saudi Arabia and the GCC. From valve servicing and hot tapping to major plant overhauls and manpower deployments, our gallery reflects the breadth of our technical capability and the quality of our execution on every project we undertake.</p>
                                <Link href="/contact-us" className='mainbtn'>Contact Us</Link>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className='hero-banner_img'>
                                <img className="img-1" src="/assets/img/gallery_img/01696864443.jpeg" alt="gallery" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='gallerySec'>
                <div className='container'>

                    {/* <LightGallery
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
                                <img src={item.thumb} alt={item.caption} />
                                <div className='galleryhover'><h5>{item.caption}</h5></div>
                            </a>
                        ))}
                    </LightGallery> */}

            <div className='row'>
            {items.map((item, i) => (
                <div className='col-lg-4 mb_24' key={i}>
                <div className="video-item">
                        <img className='video-img' src={item.src} alt={item.src} />
                        <div className="video-overlay">
                        <button
                        type="button"
                        className="play-btn"
                        onClick={() => setSelectedVideo(item.link)}
                    >
                        <img
                            src="/assets/img/play-icon.svg"
                            alt="play"
                        />
                    </button>
                            <div className="video-caption">{item.caption}</div>
                        </div>
                    </div>
                </div>
                  ))}
                
            </div>



            {selectedVideo && (
    <div
        className="video-modal"
        onClick={() => setSelectedVideo(null)}
    >
        <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
        >

            <button
                type="button"
                className="video-close"
                onClick={() => setSelectedVideo(null)}
            >
                ×
            </button>

            <iframe
                src={getYoutubeEmbedUrl(selectedVideo)}
                title="YouTube video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
            />
        </div>
    </div>
)}

                </div>
            </section >
        </>
    )
}

export default GalleryPage;