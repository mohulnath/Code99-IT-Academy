import React, { useEffect, useRef, useState } from 'react';
import './MainFooter.css';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitterSquare, FaPhone, FaRegCopyright } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const MainFooter = ({ onSelectCourse, setNavBool }) => {
  const handleCourseClick = (id) => {
    setNavBool(false);
    onSelectCourse(id);
  };

  // Animation setup
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <>
      <footer>
        <div className="d-flex justify-content-evenly align-items-top gap-3 flex-wrap position-relative foot">
          <div>
            <h4>Our Courses</h4>
            <div className="d-flex flex-column gap-3">
              <h6><Link to='/courses' onClick={() => handleCourseClick('UI/UX')}>UI/UX Design</Link></h6>
              <h6><Link to='/courses' onClick={() => handleCourseClick('java')}>Full Stack Java</Link></h6>
              <h6><Link to='/courses' onClick={() => handleCourseClick('python')}>Full Stack Python</Link></h6>
              <h6><Link to='/courses' onClick={() => handleCourseClick('web')}>Full Stack Web Development</Link></h6>
              <h6><Link to='/courses' onClick={() => handleCourseClick('marketing')}>Digital Marketing</Link></h6>
            </div>
          </div>

          <div>
            <h4>Navigation</h4>
            <div className="d-flex flex-column gap-3">
              <Link to='/' onClick={() => setNavBool(true)}>Home</Link>
              <Link to='/about' onClick={() => setNavBool(false)}>About</Link>
              <a href="#course">Course</a>
              <a href="#">Blog</a>
              <Link to='/contact_us' onClick={() => setNavBool(false)}>Contact</Link>
            </div>
          </div>

          <div>
            <h4>Social</h4>
            <div className="d-flex flex-column gap-3 footer-social">
              <a href="#" className="d-flex align-items-center gap-3"> <FaFacebook /> <span>Facebook</span> </a>
              <a href="#" className="d-flex align-items-center gap-3"> <FaInstagram /> <span>Instagram</span> </a>
              <a href="#" className="d-flex align-items-center gap-3"> <FaYoutube /> <span>Youtube</span> </a>
              <a href="#" className="d-flex align-items-center gap-3"> <FaLinkedin /> <span>LinkedIn</span> </a>
              <a href="#" className="d-flex align-items-center gap-3"> <FaTwitterSquare /> <span>Twitter</span> </a>
            </div>
          </div>

          <div className="getCol">
            <h4>Get In Touch</h4>
            <table>
              <tbody>
                <tr>
                  <td> <FaLocationDot className='minus-value'/> </td>
                  <td>No 16, 1st floor, Sarathy Nagar, Opp To Vijaya Nagar, Velachery, Chennai - 600 042.</td>
                </tr>
                <tr>
                  <td><IoMdMail /></td>
                  <td>code99itacademy@gmail.com</td>
                </tr>
                <tr>
                  <td><FaPhone /></td>
                  <td>63 74 51 07 54</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h4>Reach Us</h4>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?..."
                style={{ border: 0, width: '100%', maxWidth: '400px', height: '250px', borderRadius: '10px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Code99 Map"
              />
            </div>
          </div>
        </div>
      </footer>

      <div className='footer_main2'>
        <div className='footer_main2_div'>
          <div className="code">
            <b
              ref={textRef}
              className={`text ${isVisible ? 'animate' : ''}`}
            >
              CODE99 IT ACADEMY
            </b>
          </div>
          <div className='line'></div>
          <p className='sma' style={{ color: "white" }}>
            Copyright <FaRegCopyright /> 2025 Code99itAcademy | All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
