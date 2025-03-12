import React from 'react'
import { useSelector } from 'react-redux'

function todos() {
    const todos = useSelector((state) => state.todo.todos);


    if (todos.length == 0) {
        return (

            <div> No Data Found !! </div>
        )
    }

    return (
        <>
            <h2>Todos</h2>
            <div>


                {todos?.map((element) => (

                    <li key={element.id} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '25px',
                        backgroundColor: 'gray',
                        padding: '1px 25px',
                        color: 'black',
                        fontWeight: 'bold',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <p>{element.name} </p>
                        <p>{element.email} </p>
                        <p>{element.city}</p>
                    </li>


                ))
                }
            </div></>



    )

}

export default todos