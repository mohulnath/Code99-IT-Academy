import './course-question.css'
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function CourseQuestion() {

    const questions = [
        "What tools will I learn to use in this UI/UX design course?",
        "Is UI/UX design a good career choice?",
        "What kind of projects will I work on during the course?",
        "Can UI/UX design be applied to industries other than tech?",
        "Will I get career support after completing the course?"
    ];

     const [activeIndex, setActiveIndex] = useState(null); // 🔁 Start with all closed
    
        const toggleQuestion = (index) => {
            setActiveIndex(prev => prev === index ? null : index); // ✅ Toggle open/close
        };


    return (
        <div className="questions">
            <div className="question-left">
                <h1> Frequently Asked <span className='span-bold'> Questions </span></h1>
            </div>
            <div className="question-right">
                <Accordion
                    activeKey={activeIndex !== null ? activeIndex.toString() : null}
                    onSelect={(e) => toggleQuestion(parseInt(e))}
                    className='info-box'
                >
                    {questions.map((question, index) => (
                        <Accordion.Item className='accordions' eventKey={index.toString()} key={index}>
                            <Accordion.Header>{question}</Accordion.Header>
                            <Accordion.Body className='accor-body'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat...
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}