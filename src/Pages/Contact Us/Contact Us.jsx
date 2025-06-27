import { useState } from 'react';
import './Contact Us.css'
import { MdArrowOutward } from "react-icons/md";
import Footer from '../../components/Footer/MainFooter'

import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import WhatsAppButton from '../../components/FixedWhatsapp/whatsapp';

// image
import Clogo from '../../assets/contact/contact1.png';
import icon1 from '../../assets/contact/c1.png';
import icon2 from '../../assets/contact/c2.png';
import icon3 from '../../assets/contact/c3.png';
import icon4 from '../../assets/contact/c4.png';
// icons
import { CgArrowTopRight } from "react-icons/cg";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
export default function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [choose, setChoose] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [chooseError, setChooseError] = useState("")
    const [messageError, setmessageError] = useState("")
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const handle = (e) => {
        e.preventDefault();

        let valid = true;

        setNameError("")
        setChooseError("")
        setPhoneError("")
        setmessageError("")

        if (!name.trim()) {
            setNameError("name is require...!")
            valid = false
        }

        if (!email.trim()) {
            setEmailError("email is require...!")
            valid = false
        }

        if (!phone.trim()) {
            setPhoneError("phone no is require...!")
            valid = false
        }

        if (!choose.trim()) {
            setChooseError("course is require...!")
            valid = false
        }

        if (!message.trim()) {
            setmessageError("message is require...!")
            valid = false
        }

        // this for the final validation

        if (valid) {
            console.log("userdata :", { name, phone, message, choose, email })
            setSubmitSuccess(true)
            setName("");
            setPhone("");
            setMessage("");
            setChoose("");
        }
    }
    return (
        <>
            <main>
                <section className="contact-page full col-center">
                    {/* this the top */}
                    <div className="contact-top col-center">
                        <div className="contact-txt col-center">
                            <h1>Contact <span className='span-bold'>Us</span></h1>
                            <p>Code99 is ready to provide a right solutions for your needs</p>
                            <b>We'd love to talk to you</b>
                        </div>
                        <div className="contact-pic">
                            <img src={Clogo} alt="contact us" />
                        </div>
                    </div>
                    {/* form */}
                    {submitSuccess ?
                        (<div className="con-success center">
                            <div className="success-cover col-center">
                                <h4 className="text-center">Thankyou your application submitted successfully</h4>
                                <h1>😊</h1>
                            </div>
                        </div>)
                        : (<div className="message center">
                            <div className="m-txt m-data">
                                <div className="t-top">
                                    <h3>Send us a message <IoMdSend className="send" /></h3>
                                    <p>Thank you for your interest in reaching out to us!. To better assist you, please take a moment tp fill out he contact form below. We appreciate your time and look forward to connecting with you.</p>
                                </div>
                                <div className="form-holder">
                                    <form action="" onSubmit={handle}>
                                        <div className="value">
                                            <input type="text"
                                                onChange={(e) => setName(e.target.value)}
                                                onClick={() => setNameError("")}
                                            />
                                            {nameError && <p>{nameError}</p>}
                                            <label htmlFor="name" className={`lab ${name ? "top" : ""}`}>your full name*</label>
                                        </div>
                                        <div className="value">
                                            <input type="email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                onClick={() => setEmailError("")}
                                            />
                                            {emailError && <p>{emailError}</p>}
                                            <label htmlFor="name" className={`lab ${email ? "top" : ""}`}>your email*</label>
                                        </div>
                                        <div className="value">
                                            <input type="number"
                                                onChange={(e) => setPhone(e.target.value)}
                                                onClick={() => setPhoneError("")}
                                            />
                                            {phoneError && <p>{phoneError}</p>}
                                            <label htmlFor="name" className={`lab ${phone ? "top" : ""}`}>your mobile number*</label>
                                        </div>
                                        <div className="value">
                                            <select name="course" id="course"
                                                onChange={(e) => setChoose(e.target.value)}
                                                onClick={() => setChooseError("")}
                                            >
                                                <option value=""></option>
                                                <option value="full stack java">full stack java</option>
                                                <option value="full stack python">full stack python</option>
                                                <option value="full stack web-developer">Full stack Web-developer</option>
                                                <option value="uI/UX designer">uI/UX designer</option>
                                                <option value="digital marketing">digital marketing</option>
                                            </select>
                                            {chooseError && <p>{chooseError}</p>}
                                            <label htmlFor="name" className={`lab ${choose ? "top" : ""}`}>select your course*</label>
                                        </div>
                                        <div className="value">
                                            <textarea name="message" id="msg" rows={4}
                                                onChange={(e) => setMessage(e.target.value)}
                                                onClick={() => setmessageError("")}
                                            ></textarea>
                                            {messageError && <p>{messageError}</p>}
                                            <label htmlFor="name" className={`lab ${message ? "top" : ""}`}>message*</label>
                                        </div>
                                        <div className='sumbitt'>
                                            <button className='buttonss' type="submit">Submit</button>
                                            <span className='spanss'><MdArrowOutward /></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* contact details */}
                            <div className="m-contact m-data col-center">
                                <b className="text-center">Hi! We are always here to help you.</b>
                                <div className="c-way center">
                                    <div className="icon center">
                                        <FiPhone className="w-icon" />
                                    </div>
                                    <div className="w-d">
                                        <b>Give Us a Call</b>
                                        <small>63 74 51 07 54</small>
                                    </div>
                                </div>
                                {/* sec */}
                                <div className="c-way center">
                                    <div className="icon center">
                                        <HiOutlineMail className="w-icon" />
                                    </div>
                                    <div className="w-d">
                                        <b>Write To Us</b>
                                        <small>code99itacademy@gmail.com</small>
                                    </div>
                                </div>
                                {/* 3rd */}
                                <div className="c-way center">
                                    <div className="icon center">
                                        <IoMdTime className="w-icon icon-time" />
                                    </div>
                                    <div className="w-d">
                                        <b>Hours Of Operation</b>
                                        <small>Monday - Saturday: 7:00 AM - 09:00 PM Sunday - Holiday</small>
                                    </div>
                                    {/* 4th */}
                                </div> <div className="c-way center">
                                    <div className="icon center icon-loc">
                                        <IoLocationOutline className="w-icon" />
                                    </div>
                                    <div className="w-d">
                                        <b>Visit Us</b>
                                        <small>No 16, 1st floor, Sarathy Nagar, Opp To Vijaya Nagar, Velachery, Chennai 600 042.</small>
                                    </div>
                                    {/* ------------------------------------------------------------------------ */}
                                    <hr />
                                </div>
                                <div className="social col-center w-100">
                                    <div className="c-line"></div>
                                    <b>connect with us</b>
                                    <div className="s-icons center">
                                        <a href=""><img src={icon4} alt="instagram" /></a>
                                        <a href=""><img src={icon2} alt="facebook" /></a>
                                        <a href=""> <img src={icon1} alt="linkedin" /></a>
                                        <a href=""><img src={icon3} alt="twiter" /></a>
                                        <a href=""><AiOutlineYoutube className="s-icon-show" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </section>
            </main>

            <Footer/>

            <WhatsAppButton />
            <ScrollToTopButton />
        </>
    )
}


  