import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
const navigate= useNavigate()
 const  handleClick = (e) =>{
    navigate('/about')

  }

  return (
    <div>
      <h2 className='text-4xl font-extrabold'>Home</h2> 
      <button onClick={handleClick}>Go to about Page</button>
      </div>
  )
}

export default Home