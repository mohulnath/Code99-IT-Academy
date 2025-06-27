//import image
import shape1 from '../../../assets/about/Ellipse 6.png';
import shape2 from '../../../assets/about/Rectangle 27.png';
import shape3 from '../../../assets/about/Star 1.png';
import shape4 from '../../../assets/about/Subtract1.png';
import shape5 from '../../../assets/about/Subtract2.png';
import shape6 from '../../../assets/about/Subtract3.png';

//import css
import './about_home.css';



function About() {
  return (
    <>
      <section className='About_home'>
        <div className='home_content'>
          <h1 className='heading1'>Shaping the<br /> <span className='span-bold' style={{color:"#90d916"}}>Future</span></h1>
          <p className='heading2'>
            At Code99, we bridge creativity with technology, guiding aspiring
            minds to unlock their true potential in the digital world
          </p>
        </div>
        <div className='home_img'>
          <img src={shape1} alt="" />
          <img src={shape2} alt="" />
          <img src={shape3} alt="" />
          <img src={shape4} alt="" />
          <img src={shape5} alt="" />
           <img src={shape3} alt="" />
           <img src={shape1} alt="" />
           <img src={shape1} alt="" />
          <img src={shape6} alt="" />
        </div>
      </section>
    </>
  );
}

export default About;
