import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addTodo, getTodos } from '../features/todoSlice'

function CreateTodo() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const dispatch = useDispatch()
      const todos = useSelector((state) => state.todo.todos);

    function handelSubmit(e) {
        e.preventDefault()
        const data = {
            name,
            email, city
        }
        console.log("function call : ", data)
        dispatch(addTodo(data))
        setName('');
        setEmail('')
        setCity('')
        console.log(todos)
       
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '15px', padding: '15px 10px', margin: '10px' }}>
            <input style={{
                padding: '10px 15px', border: '1px solid black', borderRadius: '5px', fontSize: '15px'
            }} type="text" id='name' name='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input style={{
                padding: '10px 15px', border: '1px solid black', borderRadius: '5px', fontSize: '15px'
            }} type="email" id='email' name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input style={{
                padding: '10px 15px', border: '1px solid black', borderRadius: '5px', fontSize: '15px'
            }} type="text" id='city' name='city' placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)} />
            
            <button style={{
                padding: '10px 15px', border: '1px solid black',
                borderRadius: '5px', fontSize: '15px',
                backgroundColor: 'red', color: 'white', fontWeight: 'bold', cursor: 'pointer'
            }} type='submit' onClick={handelSubmit}> Submit </button>
        </div>
    )
}

export default CreateTodo