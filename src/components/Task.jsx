import { FaTimes } from 'react-icons/fa'

//import PropTypes
import PropTypes from 'prop-types'

function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.importance}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

Task.propTypes = {}

export default Task
