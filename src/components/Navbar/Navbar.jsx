import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  const items = ["Home","Skills","Projects"]
  return (
    <div className='Navbar'>
    {items.map((item,index) =>(
      <Link to="/" key={index} className={item}>{item}</Link>
    ))}
    </div>
  )
}
