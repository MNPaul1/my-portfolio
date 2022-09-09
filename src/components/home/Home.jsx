import React from 'react'
import "./Home.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="left">
        <div className="logo"></div>
        <div className="intro">
          <h1 className='welcome-heading'>Welcome.</h1>
          <div className='line'></div>
          <p>My name is Mahanandan, I'm a front-end and Python developer based in Vancouver, British Columbia, Canada. I have a developed different types of web applications and python software from well known snake game to my own application One Click Share. <br/><br/>I'm passionate about designing fascinating web application and developing high level python applications.</p>
        </div>
      </div>
      <div className="right">
        <div className="media">
        <Link to="https://www.google.com" target="_blank"><GitHubIcon /></Link>
        <Link to=""><MailIcon /></Link>
        
        </div>
        <div className="education center">
          <h1>Education</h1>
          <div className="corner"></div>
          <div className="education-container">
            <p>
              - Associate Degree of Science in Computer Science.
              <br/>3.23/4.3 GPA<br/><br/>
              - High School Diploma major in Math and Science.
              <br/>82.6%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
