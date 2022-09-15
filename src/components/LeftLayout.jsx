import React from 'react'
import "./LeftLayout.css"

export default function LeftLayout(props) {
  return (

    <div className="left">

      {props.content}
    </div>
  )
}
