import React from 'react'
import "./Home.css"

import RightLayout from '../rightLayout';
import LeftLayout from '../LeftLayout';
import "../components.css"

export default function Home() {
  return (
    <div className="home component">
    <LeftLayout content={<div className="intro ">
          <h1 className='welcome-heading'>Welcome.</h1>
          <div className='line'>
          <p className='intro-des'>My name is Mahanandan, I'm a front-end and Python developer based in Vancouver, British Columbia, Canada. I have a developed different types of web applications and python software from well known snake game to my own application One Click Share. <br /><br />I'm passionate about designing fascinating web application and developing high level python applications.</p></div>
          
        </div>} />

        <RightLayout heading={"Education"} content={<p>
          - Associate Degree of Science in Computer Science.
          <br />3.23/4.3 GPA<br /><br />
          - High School Diploma major in Math and Science.
          <br />82.6%
        </p>} />

    </div>
  )
}
