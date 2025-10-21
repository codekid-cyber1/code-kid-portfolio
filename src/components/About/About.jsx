import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_img.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <div className="img-container"> 
                    <img src={profile_img} alt="" />
                </div>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I’m Code-Kid — a passionate Frontend Developer from Kwara State, Nigeria. I specialize in building sleek, responsive, and user-friendly web interfaces that blend creativity with functionality.</p>
                    <p>Over the past six years, I’ve worked on a variety of projects, collaborating with talented teams and contributing to global brands such as Microsoft, and Google. My experience has helped me master technologies like React, JavaScript, TypeScript, HTML, and CSS while staying adaptable to modern tools and frameworks.</p>
                    <p>Beyond coding, I’m driven by curiosity and continuous learning. I enjoy transforming ideas into interactive digital experiences that make a real impact. My goal is to keep growing, sharing knowledge, and building products that inspire users around the world.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>TypeScript</p><hr style={{width:'50%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>6+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About