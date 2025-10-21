import React from 'react'
import './Hero.css'
import profile_img from '../../assets/home_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="img-container">
        <img src={profile_img} alt="" />
      </div>
      
      <h1><span>I'M ABDULMUJEEB AWODI,</span> Frontend developer based in Nigeria</h1>
      <p>I’m a Frontend Developer from Kwara State, Nigeria, with 6+ years of experience creating modern, responsive, and user-friendly web experiences.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero