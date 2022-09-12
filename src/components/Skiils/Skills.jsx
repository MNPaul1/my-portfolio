import React from 'react'
import LeftLayout from '../LeftLayout'
import RightLayout from '../rightLayout'
import './Skills.css'
import { LinearProgress, CircularProgress } from '@mui/material'
import { useState } from 'react'

export default function Skills() {
    const Skills = [{ "name": "Python", "value": 90, buffer: 5 },
    { "name": "C++", "value": 78, buffer: 2 },
    { "name": "JavaScript", "value": 84, buffer: 7 },
    { "name": "NodeJS", "value": 75, buffer: 5 },
    { "name": "ReactJS", "value": 78, buffer: 8 },
    { "name": "ExpressJS", "value": 76, buffer: 5 },
    { "name": "EJS", "value": 80, buffer: 3 },
    { "name": "HTML", "value": 95, buffer: 2 },
    { "name": "CSS", "value": 90, buffer: 5 }]
    // console.log(Skills["Python"])
    const [{ name, value, buffer }, setSkill] = useState(Skills[0])
    function handleClick(e) {
        setSkill(Skills[e.target.id])
        // console.log(Number(value))
    }
    return (
        <div className='skills'>
            <LeftLayout content={
                <div className='skills-left center'>
                    <h1 className='skills-heading'>-{name}</h1>
                    <div className="circular-bar">
                        <CircularProgress size={200} className='circularpro' color='secondary' thickness={1} variant='determinate' value={value} />
                        <h2 className='caption center'>{value}%</h2>
                    </div>
                    <div className="line-bar">
                        <LinearProgress className='linearpro' color='secondary' variant="buffer" value={value} valueBuffer={value + buffer} />
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
