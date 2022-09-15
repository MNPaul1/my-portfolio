import React from 'react'
import "./rightLayout.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { LinkedIn } from '@mui/icons-material';
export default function RightLayout(props) {
  return (
    <div className="right">
      <div className="layout center">
        <div className="social-media">
          <a href="https://github.com/MNPaul1" rel="noreferrer" target="_blank"><GitHubIcon sx={{ fontSize: 'xx-large' }} /></a>
          <div onClick={() =>(
            document.getElementsByClassName("popup")[0].style.display = "block"
          )}><MailIcon sx={{ fontSize: 'xx-large' }} /></div>
          <a href="https://www.linkedin.com/in/mahanandan-paul-77656a204/"  rel="noreferrer" target="_blank"><LinkedIn sx={{ fontSize: 'xx-large' }} /></a>
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
