import React from 'react'
import "./LeftLayout.css"

export default function LeftLayout(props) {
  return (

    <div className="left">
      <div className="logo"><img className='logo-img' src="/logo.png" alt="" /></div>
      {props.content}
    </div>
  )
}
