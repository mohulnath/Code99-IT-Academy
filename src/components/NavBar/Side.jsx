import React from 'react';
import './Navbar.css';

import { IoClose } from "react-icons/io5";
import { TiWorld } from "react-icons/ti";
import { FaBookBookmark } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaMedal } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Side({ show, setshow }) {
    if (!show) return null;

    return (
        <div className='side-bar'>
            <h1 onClick={() => setshow(false)}><IoClose /></h1>
            <div><span><TiWorld /></span><b><Link to='/'>Why Us</Link></b></div>
            <div><span><FaBookBookmark /></span><b><a href="#Courses">Courses</a></b></div>
            <div><span><MdReviews /></span><b><a href="#reviews">Reviews</a></b></div>
            <div><span><RiContactsBook2Fill /></span><b><Link to='/contact_us'>Contact Us</Link></b></div>
            <div><span><FaMedal /></span><b><a href="#placement">Placement</a></b></div>
            <div className='dd'>
                <button>Contact Us</button>
                <span className='span'><MdArrowOutward /></span>
            </div>
        </div>
    );
}
