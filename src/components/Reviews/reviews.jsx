// src/components/Reviews/Reviews.jsx
import React from 'react';
import './Reviews.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { IoStarSharp } from 'react-icons/io5';
import vector6 from '../../assets/vector6.png'; 
import vector7 from '../../assets/vector7.png'; 
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { MdArrowLeft, MdArrowRight } from 'react-icons/md';


const Reviews = () => {
  return (
    
    <div className="reviews" id='reviews'>
    <h1 className="text-center title">
        What Our Students <span className='span-bold'>Says</span>
    </h1>
    <div>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            // pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper_container"
        >
            <SwiperSlide>
                <div className='star'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti dolor est, libero exercitationem sit harum enim! Dolores, dolorem accusantium.</p>
                <h2>Sri Ram</h2>
            </SwiperSlide>
            <SwiperSlide>
                <div className='star'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti dolor est, libero exercitationem sit harum enim! Dolores, dolorem accusantium.</p>
                <h2>Akash</h2>
            </SwiperSlide>
            <SwiperSlide>
                <div className='star'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti dolor est, libero exercitationem sit harum enim! Dolores, dolorem accusantium.</p>
                <h2>Priya</h2>
            </SwiperSlide>
            <SwiperSlide>
                <div className='star'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti dolor est, libero exercitationem sit harum enim! Dolores, dolorem accusantium.</p>
                <h2>Ramya</h2>
            </SwiperSlide>
            <SwiperSlide>
                <div className='star'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti dolor est, libero exercitationem sit harum enim! Dolores, dolorem accusantium.</p>
                <h2>Rakesh</h2>
            </SwiperSlide>
            <SwiperSlide>
                <div className='star'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti dolor est, libero exercitationem sit harum enim! Dolores, dolorem accusantium.</p>
                <h2>Ravi</h2>
            </SwiperSlide>
            <SwiperSlide>
                <div className='star'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti dolor est, libero exercitationem sit harum enim! Dolores, dolorem accusantium.</p>
                <h2>Suresh</h2>
            </SwiperSlide>

            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <MdArrowLeft className='left' />
                    <p><img src={vector6} alt="" />PREV</p>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <p>NEXT<img src={vector7} alt="" /></p>
                    <MdArrowRight className='right' />
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    </div>
</div>
  )
};

export default Reviews;
