//import React and page components
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

//import useState
import { useState } from 'react'

//App Component
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      importance: 'high',
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      importance: 'low',
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      importance: 'medium',
    },
  ])

  //delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //set importance in severity
  const setImportance = (id) => {
    //set our importance array
    const importanceArray = ['low', 'medium', 'high']
    //get our task based on id
    let task = tasks.filter((task) => task.id === id)
    //get the position of the index for the current task importance.
    let importanceIndex = importanceArray.indexOf(task[0].importance)
    //if importanceIndex is === to 2
    if (importanceIndex === 2) {
      //set importanceIndex back to 0
      importanceIndex = 0
    }
    //iterate importanceIndex
    else {
      importanceIndex += 1
    }

    //update tasks State
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, importance: importanceArray[importanceIndex] }
          : task
      )
    )
  }

  return (
    <div className='container'>
      <Header />
      <AddTask/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={setImportance} />
      ) : (
        'No Tasks Scheduled.'
      )}
    </div>
  )
}

//export App
export default App
