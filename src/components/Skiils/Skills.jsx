import React from 'react'
import LeftLayout from '../LeftLayout'
import RightLayout from '../rightLayout'
import './Skills.css'
import { LinearProgress, CircularProgress } from '@mui/material'
import { useState } from 'react'
import "../components.css"
import data from "../data.json"
export default function Skills() {
    const {Skills} = data
    const [{ name, value, buffer }, setSkill] = useState(Skills[0])

    function handleClick(e) {
        setSkill(Skills[e.target.id])
    }
    return (
        <div className='skills component'>
            <LeftLayout content={
                <div className='skills-left center'>
                    <h1 className='skills-heading'>{name}</h1>
                    <div className="circular-bar">
                        <CircularProgress size={200} className='circular-progress' color='secondary' thickness={1} variant='determinate' value={value} />
                        <h2 className='caption center'>{value}%</h2>
                    </div>
                    <div className="line-bar">
                        <LinearProgress className='linear-progress' color='secondary' variant="buffer" value={value} valueBuffer={value + buffer} />
                        <h3>{value} - {value+buffer}%</h3>
                    </div>
                </div>
            } />
            <RightLayout heading={"Skills"} content={
                <div className='skills-items'>
                    <ul className='skills-ul'>
                        {Skills.map((skill, index) => (
                            <li onClick={handleClick} className='underline' key={index} id={index}>{skill.name}</li>
                        ))}
                    </ul>
                </div>
            } />
        </div>
    )
}
