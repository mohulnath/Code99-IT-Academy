// React & Hooks
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'

// CSS
import './Home.css';

// Bootstrap Carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

// Assets (Images & Icons)
import Images from '../../assets/images';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

// Components
import Reviews from '../../components/Reviews/Reviews';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import MainFooter from '../../components/Footer/MainFooter';

// Data
import students from '../../Datas/student';
import Course from '../../Datas/course';

// Font Awesome Icons
import {
    FaArrowRight,
} from 'react-icons/fa';

// whatsapp/////////

import { BsWhatsapp } from 'react-icons/bs'

// form////////////

import Formbox from '../../components/form/form'

// Courses ////////

import Coures from '../courses/coures'

import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import WhatsAppButton from '../../components/FixedWhatsapp/whatsapp';


/////////////

import StudentStories from '../../components/StudentStories/StudentStories'

export default function Home({ onSelectCourse, navBoolean, setNavBool }) {
    const [isAnimated, setIsAnimated] = useState(false);
    const [height, setHeight] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimated(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const onScroll = () => setHeight(window.scrollY);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const text = document.querySelector(".text");
        if (height > 7000) {
            text?.classList.add("animate");
        }
    }, [height]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };


    return (
        <>

            {/* -------------------- Home Section -------------------- */}
            <a href="#MainTop"></a>
            <div className="home">
                <h1>India's 1st Institute to Provide <br /> Free IT Training</h1>

                <Carousel>
                    {[
                        { title: "Placed Students", image: Images.Placedstudent },
                        { title: "Batch I", image: Images.Batch1 },
                        { title: "Batch II", image: Images.Batch2 },
                        { title: "Batch III", image: Images.Batch3 },
                        { title: "Batch IV", image: Images.Batch4 },
                    ].map(({ title, image }, index) => (
                        <Carousel.Item key={index}>
                            <div>
                                <h3 className="headding">{title}</h3>
                                <img src={image} alt={title} />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>


            {/* -------------------- Page Two: Placement -------------------- */}
            <div className="PageTwo" id="placement">
                <h1 className="title">Student Placement</h1>
                <div className="boxs">
                    <div className="track">
                        {[...students, ...students].map((student, index) => (
                            <div className="b1" key={index}>
                                <div className="top">
                                    <img className="im1" src={student.company} alt="" />
                                </div>
                                <div className="imag">
                                    <img className="im2" src={student.image} alt={student.name} />
                                </div>
                                <div className="bottom">
                                    <h2>{student.name}</h2>
                                    <p>Role: {student.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* -------------------- Section Three: Success Stories -------------------- */}

            <StudentStories />


            {/* -------------------- Company Slider -------------------- */}
            <div className="successCaro d-flex justify-content-center align-items-center gap-5 mt-5">
                {[...Array(3)].map((_, idx) => (
                    <div className="placedComp caroAutoplay d-flex justify-content-center align-items-center gap-5" key={idx}>
                        {[...Array(20)].map((__, i) => (
                            <img key={i} src={Images[`company${(i % 17) + 1}`]} alt="" />
                        ))}
                    </div>
                ))}
            </div>

            <div className="successCaro d-flex justify-content-center align-items-center gap-5 mt-5 mb-5">
                {[...Array(3)].map((_, idx) => (
                    <div className="placedComp caroAutoplay2 d-flex justify-content-center align-items-center gap-5" key={idx}>
                        {[...Array(20)].map((__, i) => (
                            <img key={i} src={Images[`company${(i % 17) + 1}`]} alt="" />
                        ))}
                    </div>
                ))}
            </div>

            {/* -------------------- Reviews and Why Choose Us -------------------- */}
            
            <Reviews />
            <WhyChooseUs />

            {/* -------------------- Video Page -------------------- */}
            <div className="video-page">

                <h1 className='title'>Videos</h1>

                <div className="fourbox-wrapper">
                    <div className="fourbox">
                        <div><a href="#"><img src={Images.Imgone} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgtwo} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgthree} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgfour} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgfive} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgsix} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgseven} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgeight} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgnine} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgten} alt="" /></a></div>

                        {/* <!-- Optional: Repeat images to loop smoothly --> */}
                        <div><a href="#"><img src={Images.Imgone} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgtwo} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgthree} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgfour} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgfive} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgsix} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgseven} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgeight} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgnine} alt="" /></a></div>
                        <div><a href="#"><img src={Images.Imgten} alt="" /></a></div>
                    </div>
                </div>
            </div>
            {/* <!---------------- COURSES SECTION: Display All Course Cards ---------------> */}
            <div className="courses-box">
                {/* Section Title */}
                <h1 className='title' id="course"> Our Courses </h1>

                {/* Courses Grid */}
                <div className='four-box'>
                    {Course.map((Courses, index) => (
                        <div className="type-box" key={Courses.id}>
                            <img
                                src={Courses.picture}
                                alt={Courses.name}
                                className={(index === 2 || index === 4) ? 'third-image' : ''}
                            />
                            <h2>{Courses.name}</h2>
                            <p>{Courses.about}</p>
                            <button className="button">
                                Join Now
                                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 
            9.75s4.365 9.75 9.75 9.75 9.75-4.365 
            9.75-9.75S17.385 2.25 12 2.25zm4.28 
            10.28a.75.75 0 000-1.06l-3-3a.75.75 
            0 10-1.06 1.06l1.72 1.72H8.25a.75.75 
            0 000 1.5h5.69l-1.72 1.72a.75.75 
            0 101.06 1.06l3-3z"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}

                </div>

            </div>

            {/* <!---------------- FRAME IMAGE SECTION: Decorative Banner ---------------> */}
            <div className="frame-div">
                <img src={Images.Frame} alt="decorative frame" />
            </div>

            {/* <!---------------- CONTACT FORM SECTION: User Input to Join ---------------> */}
            <Formbox />

            {/* <!---------------- FOOTER COMPONENT: Site Bottom Area ---------------> */}
            <MainFooter onSelectCourse={onSelectCourse} navBoolean={navBoolean} setNavBool={setNavBool} />

            {/* /////////////////// Fixed Whatsapp /////////////////// */}

                    <WhatsAppButton/>
                    <ScrollToTopButton/>

            <Coures />

        </>
    )
}