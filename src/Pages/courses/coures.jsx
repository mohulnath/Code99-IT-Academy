import { useEffect, useRef } from 'react';

import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import WhatsAppButton from '../../components/FixedWhatsapp/whatsapp';


import './coures.css';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import CountUp from "../courses/Count/countup";

import Whychooseus from '../../components/WhyChooseUs/WhyChooseUs';
import Course from '../../Datas/course';
import Reviews from '../../components/Review/Reviews';
import Footer from '../../components/Footer/MainFooter';
import CourseQuestion from '../../Pages/courses/Question-drobdown/course-question'

import Launch from './launch/launch'

import Image from '../../assets/images';

import { IoIosArrowDown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { color } from 'framer-motion';

export default function Courses({ coursetitle, onSelectCourse, setNavBool }) {

    const [activeModule, setActiveModule] = useState(null);
    const moduleRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (moduleRef.current && !moduleRef.current.contains(event.target)) {
                setActiveModule(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);


    if (!coursetitle) return null;

    const { title, span, image } = coursetitle;

    const content = [
        "Beginners & Students",
        "Aspiring Designers",
        "Marketing & Business Professional",
        "Developers & Tech Enthusiasts"
    ];

    const analyzingData = Array(5).fill("Affordable Pricing");

    const analyzingItemOne = [
        "CODE 99 ",
        ...Array(5).fill("₹12,000 for the entire course"),
    ];

    const analyzingItemTwo = [
        "OTHERS",
        ...Array(5).fill("Often ₹50,000 or more"),
    ];

    const courseModules = [
        { title: "Module : 1", description: "Introduction to UI/UX Design" },
        { title: "Module : 2", description: "Design Thinking & Principles" },
        { title: "Module : 3", description: "Accessibility & Inclusive Design" },
        { title: "Module : 4", description: "UI Design Tools" },
        { title: "Module : 5", description: "Visual Designs & Fundamentals" },
    ];

    const courseModuless = [
        { title: "Module : 6", description: "UX Research & user joureny" },
        { title: "Module : 7", description: "Wireframing & Usability Testing" },
        { title: "Module : 8", description: "Prototyping & interactive Design" },
        { title: "Module : 9", description: "Design Systems & Collaboration" },
        { title: "Module : 10", description: "Final Project & Career in UI/UX" },
    ];


    const toggleModule = (index) => {
        setActiveModule(prev => (prev === index ? null : index));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (moduleRef.current && !moduleRef.current.contains(event.target)) {
                setActiveModule(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filterCourse = Course.filter((course) => course.id !== coursetitle.id);

    const [startCount, setStartCount] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) observer.unobserve(countRef.current);
        };
    }, []);


    return (
        <>
            <div className="coures-home">
                <div className="coures-home-top">
                    <div className="coures-contend">
                        <h1>{title} <span className='span-bold'>{span}</span></h1>
                        <p> Learn to create impactful digital experiences with expert guidance. Master user research. </p>
                    </div>
                    <div className="coures-img">
                        <img src={image} alt="Course Banner" />
                    </div>
                </div>
                <div className="coures-home-bottom" ref={countRef}>
                    <div className="coures-count">
                        <div>
                            {startCount ? <CountUp start={220} end={500} /> : <h1>0+</h1>}
                            <p>Marketing</p>
                        </div>
                        <div>
                            {startCount ? <CountUp start={0} end={280} /> : <h1>0+</h1>}
                            <p>Solution</p>
                        </div>
                        <div>
                            {startCount ? <CountUp start={520} end={800} /> : <h1>0+</h1>}
                            <p>Success</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* =================================================== */}
            {/* <!----------------------secont-pages---------------> */}

            <Whychooseus />

            {/* ======================================================== */}
            {/* <!-----------------------coures-duration-------------------> */}

            <div className="coures-duration">
                <div className="coures-duration-box">
                    <div className="coures-duration-inbox">
                        <div className='inbox-contend'><h4> Next Batch Starts: <br /> 6th May, 2025 </h4></div>
                        <div className='inbox-contend'><h4> Program Duration: <br /> 4 Months </h4></div>
                        <div className='inbox-contend'><h4> Limited <br /> Seats Available </h4></div>
                    </div>
                </div>
            </div>

            {/* =================================================================== */}
            {/* <!--------------------------course-infromation-------------------> */}

            <div className="coures-infromation">
                <div className="coures-information-left">
                    <h1> Who is this <br /> course <span className='span-bold'>for?</span></h1>
                    <p>Perfect for beginners, aspiring designers, and professionals looking to master UI/UX design and create impactful digital experiences.</p>
                </div>
                <div className="coures-information-right">
                    <Accordion defaultActiveKey="null">
                        {content.map((title, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index} className='Item-info-box    '>
                                <Accordion.Header>{title}</Accordion.Header>
                                <Accordion.Body className='accor-body'>
                                    This course is tailored for {title.toLowerCase()}. Gain practical design skills and hands-on experience through real projects.
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>

            {/* ========================================================== */}
            {/* <!---------------------course-analyzing-----------------> */}

            <div className="coures-analyzing">
                <div className="coures-analyzing-top">
                    <div className='analyse-left'><div></div></div>
                    <div className='analyse-right'> <h2><span className='span-bold'>Analysis</span> Between Other Institutes</h2></div>
                </div>
                <div className="coures-analyzing-bottom">
                    <div className="analzing-bottom-left">
                        <div className="emtey"></div>
                        {analyzingData.map((text, index) => (
                            <div className="analyzing-sidebox" key={index}>
                                <h2>{text.split(" ")[0]} <br /> {text.split(" ")[1]}</h2>
                            </div>
                        ))}
                    </div>

                    <div className="analzing-bottom-right">
                        <div className='main-analzing-box'>
                            {analyzingItemOne.map((item, index) => (
                                <div className='analyzing-right-contend' key={index}>
                                    <h2>{item}</h2>
                                </div>
                            ))}
                        </div>

                        <div className='main-analzing-box'>
                            {analyzingItemTwo.map((item, index) => (
                                <div className="analyzing-right-contends" key={index}>
                                    <h2>{item}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='analysis-contact-button'>
                    <button >Contact Us</button>
                    <span className='span-icon'><MdArrowOutward /></span>
                </div>
            </div>

            {/* ======================================================== */}
            {/* <!-----------------------course-overview--------------------> */}

            <div className="coures-overview">
                <div className="coures-overview-left">
                    <h1> Course <span className='span-bold'>Overview</span> </h1>
                    <p>The UI/UX Design course at Code99 offers a hands-on learning experience covering design principles, user research, wireframing, and prototyping using tools like Figma.</p>
                </div>
                <div className="coures-overview-right">
                    <img src={Image.overview} alt="Course Overview" />
                </div>
            </div>

            {/* ======================================================== */}
            {/* <!----------------------course-learn-------------------> */}

            <div className="coures-learn">

                <h1 className='title' > What You Will <span className='span-bold'>Learn</span> </h1>

                <div className="coures-learn-bottom" ref={moduleRef}>
                    <div className='coures-learn-bottom-left'>
                        {courseModules.map((module, index) => (
                            <div onClick={() => toggleModule(index)}
                                className={`coures-learn-contend ${activeModule === index ? 'expanded' : ''}`}
                                key={index}
                            >
                                <div>
                                    <h4>{module.title}</h4>
                                    <p>{module.description}</p>
                                </div>
                                <span>
                                    <IoIosArrowDown />
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className='coures-learn-bottom-right'>
                        {courseModuless.map((module, index) => {
                            const actualIndex = courseModules.length + index;
                            return (
                                <div onClick={() => toggleModule(actualIndex)}
                                    className={`coures-learn-contend ${activeModule === actualIndex ? 'expanded' : ''}`}
                                    key={actualIndex}
                                >
                                    <div>
                                        <h4>{module.title}</h4>
                                        <p>{module.description}</p>
                                    </div>
                                    <span>
                                        <IoIosArrowDown />
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="coures-learn-botton">
                    <button>Download Curriculum</button>
                    <span className='span-icons'><MdArrowOutward /></span>
                </div>
            </div>

            {/* ====================================================== */}
            {/* <!-------------------------course-tools----------------->    */}

            <div className="tools">
                <h1 className='title'><span className='span-bold' style={{ color: 'rgba(144, 217, 22, 1)' }}>Tools</span> Used</h1>
                <div className="tools-bottom">
                    <div>
                        <h1>Front-end</h1>
                        <p><FaHtml5 className='html' /> HTML</p>
                        <p><FaCss3Alt className='css' /> CSS</p>
                        <p><RiJavascriptFill className='js' /> JavaScript</p>
                        <p><FaBootstrap className='bootstrap' /> Bootstrap</p>
                        <p><FaReact className='react' /> React</p>
                    </div>
                    <div>
                        <h1>Back-end</h1>
                        <p><FaNodeJs className='node' /> Node.js</p>
                    </div>
                    <div>
                        <h1>Database</h1>
                        <p><SiMysql className='sql' /> MySQL</p>
                    </div>
                </div>
            </div>

            {/* ============================================================== */}
            {/* <!----------------------------course-card--------------------> */}

            <div className="courses-box">
                <h1 className='title'>Other <span className='span-bold' style={{ color: 'rgba(144, 217, 22, 1)' }}>Courses</span></h1>
                <div className='four-box'>
                    {filterCourse.map((course) => (
                        <div className="type-box" key={course.id}>
                            <img src={course.picture} alt={course.name} />
                            <h2>{course.name}</h2>
                            <p>{course.about}</p>
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

            {/* ===================================================== */}
            {/* <!---------------------------Reviews------------------> */}

            <Reviews />

            {/* ======================================================== */}
            {/* <!-----------------------course-qustions------------------> */}

            <CourseQuestion />

            {/* ========================================================= */}
            {/* <!---------------------------images Launch------------------------> */}

          <Launch/>

            {/* ======================================================= */}
            {/* <!------------------------footer--------------------> */}

            <Footer onSelectCourse={onSelectCourse} setNavBool={setNavBool} />

            <WhatsAppButton />
            <ScrollToTopButton />
        </>
    );
}

