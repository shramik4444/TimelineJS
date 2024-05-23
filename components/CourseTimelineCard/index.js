import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'
const CourseTimelineCard = props => {
  const {timelineItemsList} = props
  const {categoryId, courseTitle, description, duration, tagsList} =
    timelineItemsList
  console.log(tagsList)

  return (
    <div>
      <h1>{courseTitle}</h1>
      <div>
        <AiFillClockCircle style={{fontSize: '24px', color: 'black'}} />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <div className="namecont">
        {tagsList.map(each => (
          <p className="parastyle">{each.name}</p>
        ))}
    </div>
    </div>
  )
}

export default CourseTimelineCard
