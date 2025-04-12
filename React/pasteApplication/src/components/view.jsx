import React from 'react'
import Create from './create'
import { useParams } from 'react-router-dom'

function view() {

    const {id} = useParams()
  return (
    <>
    {
        id ? <Create id={id} isview={true} /> : <h2>Not Found</h2>
    }
        {/*  */}
    </>
  )
}

export default view
