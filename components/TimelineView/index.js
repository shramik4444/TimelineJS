import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const items = [{title: '2018'}, {title: '2019'}]

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log('#########################')
  console.log(timelineItemsList)

  let projectlist = []
  let courselist = []

  timelineItemsList.map(each => {
    if (each.categoryId === 'PROJECT') {
      projectlist = [...projectlist, each]
    } else {
      courselist = [...courselist, each]
    }
  })
  console.log(projectlist)
  console.log(courselist)

  return (
    <div className="chrono-container">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {projectlist.map(each => (
          <ProjectTimelineCard timelineItemsList={each} />
        ))}
        {courselist.map(each => (
          <CourseTimelineCard timelineItemsList={each} />
        ))}
      </Chrono>
    </div>
  )
}

export default TimelineView
