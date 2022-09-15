import React from 'react'
import "./rightLayout.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
export default function RightLayout(props) {
  return (
    <div className="right">
      <div className="layout center">
        <div className="social-media">
          <Link to="https://www.google.com" target="_blank"><GitHubIcon sx={{ fontSize: 'xx-large' }} /></Link>
          <div onClick={() =>(
            document.getElementsByClassName("popup")[0].style.display = "block"
          )}><MailIcon sx={{ fontSize: 'xx-large' }} /></div>
          <Link to=""><LinkedIn sx={{ fontSize: 'xx-large' }} /></Link>
        </div>
        <div className="main-content center">
          <h1 className='right-heading'>{props.heading}</h1>
          <div className="layout-container">
            <div className='right-content'>
            {props.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
