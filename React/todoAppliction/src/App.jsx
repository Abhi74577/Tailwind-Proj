import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/createTodo'
import Todos from './components/todos'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    Todo Application
    <CreateTodo />
    <Todos/>
   </div>
  )
}

export default App
