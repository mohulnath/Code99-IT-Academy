import React from 'react';
import './CustomLoader.css'; // Import the CSS file
import TrueFocus from './TrueFocus';

const CustomLoader = () => {
    
  return (
   <div className="mainn">

<TrueFocus 
sentence="Code99 IT Academy"
manualMode={false}
blurAmount={5}
borderColor="green"
animationDuration={0.7}
pauseBetweenAnimations={0.7}
/>
     <div className="loader">
      <div className="loader__circle"></div>
      <div className="loader__circle"></div>
      <div className="loader__circle"></div>
      <div className="loader__circle"></div>
      <div className="loader__circle"></div>
    </div>

   </div>
  );
};

export default CustomLoader;