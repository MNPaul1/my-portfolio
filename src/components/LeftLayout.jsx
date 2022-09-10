import React from 'react'
import "./LeftLayout.css"

export default function LeftLayout(props) {
  return (

      <div className="left">
        <div className="logo"></div>
        {props.content}
      </div>
  )
}
