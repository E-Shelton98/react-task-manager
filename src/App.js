//import React and page components
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

//import useState
import { useState } from 'react'

//App Component
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: 'high',
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: 'low',
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: 'medium',
    },
  ])

  //delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleImportance = (id) => {
    const importanceArray = ['low', 'medium', 'high']
    
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks Scheduled.'}
    </div>
  )
}

//export App
export default App
