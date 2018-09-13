import React from 'react';

const MainBanner = (props) => {
  return (
    <div className="main-banner-grid">
      <h1 className="main-header">Feel alive without the worry</h1>
      <p className="main-tagline">
        MortalNote helps you capture and prioritize the memories that make life
        worth living, so that you don't have to. Live well. 
      </p>
      <button className="free-signup-button">SIGN UP FOR FREE</button>
      <img className="main-image" src="https://s3.us-east-2.amazonaws.com/mortalnote-images/homepage-hero-desktop.png"></img>
    </div>
  );
};

export default MainBanner;