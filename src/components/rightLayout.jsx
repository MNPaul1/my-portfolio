import React from 'react'
import "./rightLayout.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
export default function RightLayout(props) {
  return (
    <div className="right">

      <div className="layout center">
        <div className="media">
          <Link to="https://www.google.com" target="_blank"><GitHubIcon sx={{ fontSize: 'xx-large' }} /></Link>
          <Link to=""><MailIcon sx={{ fontSize: 'xx-large' }} /></Link>

        </div>
        <div className="main-content center">

          <h1>{props.heading}</h1>
          <div className="corner"></div>
          <div className="layout-container">
            {props.content}
          </div>
        </div>
      </div>
    </div>
  )
}
