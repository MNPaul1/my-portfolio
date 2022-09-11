import React, { useState } from 'react'
import "./projects.css"
import RightLayout from '../rightLayout'
import LeftLayout from '../LeftLayout';
export default function Projects() {

  const projects = [
    { "name": "Hostal Management System", "imgLink": "", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci doloremque impedit dicta harum laborum eveniet animi aut quas rem!" },
    { "name": "One Click Share", "imgLink": "", "description": "" },
    { "name": "Password Manager", "imgLink": "", "description": "" },
    { "name": "Currency Rate Converter", "imgLink": "", "description": "" }
  ]

  const [currentProject, setProject] = useState(projects[0]);
  function handleClick(e) {
    const curProject = e.target.id
    setProject(projects[curProject])
    // const {name, imgLink, description} = projects[currentProject]
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
    <div className="projects">
      <LeftLayout content={<div className="project-display center">
        <h2 className='project-title'>{currentProject.name.toUpperCase()}</h2>
        <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src="https://images.unsplash.com/photo-1662673482614-93ea73a61ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="description-container">
          <p className='project-description center'>{currentProject.description}</p>
        </div>
      </div>} />
      <RightLayout heading={"Projects"} content={
        <ul>
          {projects.map((project, index) => (
            <li onClick={handleClick} key={index} id={index} className={project.name}>{project.name}</li>
          ))}
        </ul>
      } />
    </div>
  )
}
