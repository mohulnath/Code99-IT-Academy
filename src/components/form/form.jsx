// components/FormBox.jsx

import React, { useState } from 'react';
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";
import Images from '../../assets/images';

import './form.css'

export default function FormBox() {
    const [bool, setBool] = useState(false);
    let cancelTime;
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setBool(true);
        e.target.reset();
        cancelTime = setTimeout(() => {
            setBool(false);
        }, 3000);
    };

    const handleOutsideClick = () => {
        setBool(false);
        clearTimeout(cancelTime);
    };

    return (
        <>
            <div className="formBox">
                <div className="row gx-0">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={Images.Message} alt="" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                        <h1 className='mb-4'>Ready To Launch Your Tech Career</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 position-relative">
                                <input id="name" type="text" placeholder='' required />
                                <label htmlFor="name">Your Full Name *</label>
                            </div>
                            <div className="mb-4 position-relative">
                                <input id="num" type="tel" placeholder='' required />
                                <label htmlFor="num">Your Mobile Number *</label>
                            </div>
                            
                            <div className='mb-4 position-relative'>
                                <select id="course" className="form-select" required>
                                    <option></option>
                                    <option>Full Stack Java</option>
                                    <option>Full Stack Python</option>
                                    <option>Web Development</option>
                                    <option>Digital Marketing</option>
                                    <option>UI/UX Design</option>
                                </select>
                                <label htmlFor="course">Select Your Course *</label>
                            </div>
                            <div className="mb-4 position-relative">
                                <textarea id="message" required></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <div>
                                <button className='buttonss'>Submit Now</button>
                                <FaArrowRight />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div onClick={handleOutsideClick} className={`${bool ? "confirmBox" : "d-none"} d-flex justify-content-center align-items-center vh-100 w-100`}>
                <div className='d-flex justify-content-center align-items-center flex-column text-center'>
                    <h1>Thank you! Your application was submitted successfully.</h1>
                    <h2 className='tickBox' onClick={() => setBool(false)}> <FaCircleCheck /> </h2>
                </div>
            </div>
        </>
    );
}
