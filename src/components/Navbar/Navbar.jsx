import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useLocation } from 'react-router-dom'
import "../components.css"
import { Close,Menu } from '@mui/icons-material'

export default function Navbar() {
  const items = ["Home", "Skills", "Projects"]
  const currentLocation = useLocation().pathname
  const currentPage = currentLocation.split("/")[1]
  const Page = currentPage === "" ? "home" : currentPage

  function Items() {
    return (items.map((item, index) => (
      <Link to={`/${item === "Home" ? "" : item.toLowerCase()}`} onClick={() => (
        document.getElementsByClassName("moblie-nav")[0].style.display = "none"
      )} key={index} className={`underline ${item.toLowerCase() === Page ? 'active' : ""} `}>{item}</Link>
    )))
  }
  return (
    <>
      <div className='Navbar'>
        {
          <Items />
        }
      </div>
      <div className="hamburger" onClick={() => (
            document.getElementsByClassName("mobile-nav")[0].style.display = "block"
          )}>
            <Menu />
        </div>
      <div className="mobile-nav">
        <div className='close-btn' onClick={() => (
          document.getElementsByClassName("mobile-nav")[0].style.display = "none"
        )}><Close /></div>
        <div className="mini-navbar">
          <Items />
        </div>
      </div>
    </>
  )
}
