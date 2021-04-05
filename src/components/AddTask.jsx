function AddTask() {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <label>Day and Time</label>
        <input type='text' placeholder='Add Day and Time' />
      </div>
      <div className='importance-checks'>
        <p>Task Importance</p>
        <div className='form-control form-control-check'>
          <label>Low</label>
          <input type='checkbox' />
        </div>
        <div className='form-control form-control-check'>
          <label>Medium</label>
          <input type='checkbox' />
        </div>
        <div className='form-control form-control-check'>
          <label>High</label>
          <input type='checkbox' />
        </div>
      </div>

      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  )
}

export default AddTask
