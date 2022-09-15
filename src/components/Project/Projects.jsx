import React, { useState } from 'react'
import "./projects.css"
import RightLayout from '../rightLayout'
import LeftLayout from '../LeftLayout';
import "../components.css"
import data from "../data.json"

export default function Projects() {
  const {projects} = data


  const [currentProject, setProject] = useState(projects[0]);
  function handleClick(e) {
    const curProject = e.target.id
    setProject(projects[curProject])
  }
  function handleMouseEnter() {
    const desContainer = document.getElementsByClassName("description-container")[0]
    desContainer.style.display = "block"
  }
  function handleMouseLeave() {
    const desContainer = document.getElementsByClassName("description-container")[0]
    desContainer.style.display = "none"
  }
  return (
    <div className="projects component">
      <LeftLayout content={
        <div className="project-display center">

          <img onMouseEnter={handleMouseEnter} className="component" onMouseLeave={handleMouseLeave} src={currentProject.imgLink} alt="" />
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="description-container">
              <p className='project-description center'>{currentProject.description}</p>
            </div>
          <h2 className='project-title'>{currentProject.name.toUpperCase()}</h2>

        </div>

      } />
      <RightLayout heading={"Projects"} content={
        <ul>
          {projects.map((project, index) => (
            <li onClick={handleClick} key={index} id={index} className={`underline`}>{project.name}</li>
          ))}
        </ul>
      } />
    </div>
  )
}
