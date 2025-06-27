import React from 'react';
import './WhyChooseUs.css'; // Import the CSS file
import Images from '../../assets/images'; // Adjust the path as per your project structure

const WhyChooseUs = () => {
  return (
    <div className="sufil-box">
      <h1 className="title" id="WhyUs">Why Choose Us</h1>

      <div className="six-box">

        <div className="content-one">
          <div className="box-1">
            <div>
              <h2>Free Breakfast</h2>
              <p>Early Morning Session <br /> (4:30 - 6:30 AM)</p>
            </div>
            <img className="break" src={Images.Breakfast} alt="Free Breakfast" />
          </div>
          <div className="box-1">
            <div>
              <h2>Build Portfolio</h2>
              <p>to Showcase Your Skills</p>
            </div>
            <img src={Images.Portfolio} alt="Free Breakfast" />
          </div>
        </div>

        <div className="content-two">
          <div className="box-1">
            <div>
              <h2>Daily Biometric</h2>
              <p>Attendance for Discipline</p>
            </div>
            <img src={Images.IDCard} alt="Daily Biometric" />
          </div>
          <div className="box-1">
            <div>
              <h2>Mock Interview</h2>
              <p>To boost confidence</p>
            </div>
            <img className="mork" src={Images.Mork} alt="Mock Interview" />
          </div>
        </div>

        <div className="content-three">
          <div className="box-1">
            <div>
              <h2>ID Cards</h2>
              <p>for Professional Touch</p>
            </div>
            <img className="mork" src={Images.IDprof} alt="ID Cards" />
          </div>
          <div className="box-1">
            <div>
              <h2>Placement Support</h2>
              <p>To boost confidence</p>
            </div>
            <img className="mork" src={Images.Place} alt="Placement Support" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
