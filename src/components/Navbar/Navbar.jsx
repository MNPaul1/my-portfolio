import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import "../components.css"

export default function Navbar() {
  const items = ["Home", "Skills", "Projects"]
  const currentLocation = useLocation().pathname
  useEffect(() => {
    const currentPage = currentLocation.split("/")[1]
    const Page = currentPage === "" ? "home" : currentPage
    const item = document.getElementById(Page)
    const allItems = document.getElementsByClassName("items")
    Array.from(allItems).map((navItem) => (
      navItem === item ? navItem.classList.add("active") : navItem.classList.remove("active")
    ))
  }, [currentLocation])


  return (
    <div className='Navbar'>
      {
        items.map((item, index) => (
          <Link to={`/${item === "Home" ? "" : item.toLowerCase()}`} key={index} id={item.toLowerCase()} className={`underline items`}>{item}</Link>
        ))
      }
    </div>
  )
}
