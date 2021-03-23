//import PropTypes
import PropTypes from 'prop-types'

//import Task component
import Task from './Task'


function Tasks({tasks, onDelete}) {
    
    return (
        <>
          {tasks.map((task) => (
              <Task key={task.id} task={task} onDelete={onDelete}/>
          ))}  
        </>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array
}

export default Tasks
