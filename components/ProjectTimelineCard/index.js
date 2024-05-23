import {Chrono} from 'react-chrono'
import React from 'react'
import './index.css'
import { AiFillCalendar } from 'react-icons/ai'
const ProjectTimelineCard = props => {
  const {timelineItemsList} = props
  const {
    categoryId,
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = timelineItemsList

  return (
    <div>
      <img src={imageUrl} className="imgstyle" alt="project" />
      <h1>{projectTitle}</h1>
      <div className="iconstyle">
      <AiFillCalendar />
      <p>{duration}</p>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
