import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
                city: action.payload.city
            }

            state.todos.push(todo)
        },

        getTodos: (state) => {
            return state
        }
    }
});

export const { addTodo, getTodos } = todoSlice.actions

export default todoSlice.reducer