import React, { useState, useRef, useEffect } from 'react';

import logo from '../../assets/logo/logo.png';

import './Navbar.css';

import { TiWorld } from "react-icons/ti";
import { FaBookBookmark, FaMedal } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar({ show, setshow, onSelectCourse,selectedCourse, navBoolean, setNavBool }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCourseClick = (id) => {
    setShowDropdown(false);
    setNavBool(false);
    onSelectCourse(id); // trigger parent to show selected course
  };

  return (
    <div className="navba">
      <div className='logo' id='MainTop'>
        <img src={logo} alt="logo" />
        <div>
          <b> Code99 </b>
          <p className='text-center'> IT ACADEMY </p>
        </div>
      </div>

    
     <div className='items' ref={dropdownRef}>
        <div onClick={() => { setShowDropdown(false); onSelectCourse(null); }}>
          <span className='oico'><TiWorld /></span>
          {navBoolean? <a><Link to='/about' onClick={()=> setNavBool(false)}>Why Us</Link></a>:<a><Link to='/' onClick={()=> setNavBool(true)}>Home</Link></a>}
        </div>

        <div className="dropdown-container">
          <div className="course-link" onClick={() => setShowDropdown(!showDropdown)}>
            <span className="oicco"><FaBookBookmark /></span>
            <a>Courses <FaCaretDown className='down' /> </a>
          </div>
          {showDropdown && (
            <div className="dropdown">
              <Link to='/courses' onClick={() =>  handleCourseClick('web')}>Web Development</Link>
              <Link to='/courses' onClick={() =>  handleCourseClick('java')}>Full Stack Java</Link>
              <Link to='/courses' onClick={() =>  handleCourseClick('python')}>Full Stack Python</Link>
              <Link to='/courses' onClick={() =>  handleCourseClick('marketing')}>Digital Marketing</Link>
              <Link to='/courses' onClick={() =>  handleCourseClick('UI/UX')}>UI/UX Designer</Link>
            </div>
          )}
        </div>

        <div onClick={() => { setShowDropdown(false); onSelectCourse(null); }}>
          <span><MdReviews /> </span> {navBoolean?<a><a href="#reviews">Reviews</a></a>:<a><Link to='/about'>About</Link></a>}
        </div>

        <div onClick={() => { setShowDropdown(false); onSelectCourse(null); }}>
          <span><RiContactsBook2Fill /></span><a><Link to='/contact_us' onClick={()=> setNavBool(false)}>Contact Us</Link></a>
        </div>

        <div onClick={() => { setShowDropdown(false); onSelectCourse(null); }}>
          <button className='buttonss'>Contact Us</button>
          <span className='spanss'><MdArrowOutward /></span>
        </div>
      </div>
    

      <div className='side-menu' onClick={() => setshow(true)}>
        <span><BiMenuAltRight /></span>
      </div>
    </div>
  );
}
