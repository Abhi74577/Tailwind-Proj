import React from 'react'
import { useParams } from 'react-router-dom'

function Hero() {
    const {id} = useParams()
  return (
    <div>Hero - {id}</div>
  )
}

export default Hero