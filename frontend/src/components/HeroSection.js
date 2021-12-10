import React from 'react';
import '../index.css';
import { Button } from 'react-bootstrap';
import './HeroSection.css';

// /videos/video-3.mp4
// autoPlay loop muted
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1>THE NEW LADY AWAITS</h1>
      <h2>SUMMER COLLECTION</h2>
      <h3>ONLY FOR YOU</h3>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SHOP NOW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH NEW SEASON <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;