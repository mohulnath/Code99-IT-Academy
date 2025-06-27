import "./next.css"
import { MdArrowOutward } from "react-icons/md";
export default function Next() {
  return (
    <>
      <div className="coures-duration">
        <div className="coures-duration-box">
          <div className="coures-duration-inbox">
            <div className='inbox-contend'><h4> 100% Placement Support</h4></div>
            <div className='inbox-contend'><p> Join the No 1 Software Training Institute in Chennai today!
              Elevate your career with expert trainers and hands-on projects. </p></div>
            <div className='inbox-contend'><h4 className="btns">
              <button>Contact Us</button>
              <span className='span'><MdArrowOutward /></span>
            </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}