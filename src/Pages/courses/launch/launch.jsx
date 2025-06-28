import Image from '../../../assets/images';
import { MdArrowOutward } from "react-icons/md";
import './launch.css';

export default function Launch(){
  return(
    <>
       {/* <!---------------------------images------------------------> */}

            <div className="imagess">
                <div className="img-box">
                    <img src={Image.img} className="box-img"/>
                    <div className="img-box-top">
                        <div className="moving-java">
                            <img src={Image.cursortow} alt="" />
                            <div>
                                <p> Full Stack Java </p>
                            </div>
                        </div>
                        <div className="moving-python">
                            <img src={Image.cursorone} alt="" />
                            <div>
                                <p> Full Stack Python </p>
                            </div>
                        </div>
                        <div className="moving-digital">
                            <div>
                                <p> Digital Marketing </p>
                            </div>
                            <img src={Image.cursorthree} alt="" />
                        </div>
                        <div className="moving-uiux">
                            <img src={Image.cursorfive} alt="" />
                            <div>
                                <p> UI/UX Designer </p>
                            </div>
                        </div>
                        <div className="moving-web">
                            <img src={Image.cursorfore} alt="" />
                            <div>
                                <p> Full Stack Web Development </p>
                            </div>
                        </div>
                    </div>
                    <div className='img-box-bottom'>
                        <button> Contact Us Now </button>
                        <span className='span-icon'><MdArrowOutward /></span>
                    </div>
                </div>
            </div>

            {/* ======================================================= */}
    </>
  )
}