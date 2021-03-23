//import Button
import Button from './Button'

//Header Component
const Header = () => {
  //onClick Function
  const onClick = (e) => {
    console.log('click')
  }

  return (
    <header className='header'>
      <h1>Task Manager</h1>
      <Button text='Add' color='green' onClick={onClick}/>
    </header>
  )
}

//export Header
export default Header
