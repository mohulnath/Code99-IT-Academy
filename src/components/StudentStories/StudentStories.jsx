import React, { useRef, useEffect, useState } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Images from '../../assets/images';
import students from '../../Datas/student';

import './StudentStories.css'

export default function StudentStories() {
    const scrollRef = useRef(null);
    const studentRefs = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // 🔁 Auto-scroll every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const newIndex = (prevIndex + 1) % students.length;
                scrollToStudent(newIndex);
                return newIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // 🖱️ On thumbnail click -> set current index
    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setTimeout(() => scrollToStudent(index), 0);
    };

    const scrollToStudent = (index) => {
        const container = scrollRef.current;
        const target = studentRefs.current[index];

        if (container && target) {
            container.scrollTo({
                left: target.offsetLeft - (container.offsetLeft - 100),
                behavior: 'smooth',
            });
        }
    };

    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? students.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        scrollToStudent(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % students.length;
        setCurrentIndex(newIndex);
        scrollToStudent(newIndex);
    };

    // ✅ Actual image for three-left
    const currentStudent = students[currentIndex];

    return (
        <div className="three">
            <div className="three-top">
                <h1 className="title">Student Success Stories</h1>
            </div>

            <div className="three-bottom">
                <div className="three-left">
                    <img className='tube' src={Images.Tube} alt="Tube icon" />
                    <div>
                        <img src={currentStudent.image} alt="Selected Student" />
                    </div>
                </div>

                <div className="three-right">
                    <h1>Real Stories, Real Success</h1>
                    <div className="three-right-flex">
                        <button className="btn" onClick={handlePrev}><IoMdArrowDropleft /></button>
                        <div
                            className="txt"
                            ref={scrollRef}
                            style={{
                                overflowX: 'auto',
                                whiteSpace: 'nowrap',
                                scrollBehavior: 'smooth',
                                display: 'flex',
                                maxWidth: '100%',
                                scrollSnapType: 'x mandatory',
                            }}
                        >
                            {students.map((student, index) => {
                                const previewIndex = (index + 1) % students.length;
                                const previewStudent = students[previewIndex];

                                return (
                                    <div
                                        key={previewStudent.id}
                                        ref={el => studentRefs.current[index] = el}
                                        onClick={() => handleImageClick(previewIndex)}
                                        style={{
                                            display: 'inline-block',
                                            margin: '0 10px',
                                            width: '120px',
                                            scrollSnapAlign: 'start',
                                            border: previewIndex === currentIndex ? '2px solid rgb(53, 217, 3)' : 'none'
                                        }}
                                    >
                                        <img
                                            src={previewStudent.image}
                                            alt={previewStudent.name}
                                            style={{
                                                width: '80%',
                                                height: '100px',
                                                objectFit: 'cover',
                                                borderRadius: '8px'
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <button className="btn" onClick={handleNext}><IoMdArrowDropright /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
