import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
    pastes: localStorage.getItem('pastes')
        ? JSON.parse(localStorage.getItem('pastes'))
        : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        createPastes: (state, action) => {
            const data = action.payload;
            state.pastes.push(data);
            localStorage.setItem("pastes",
                JSON.stringify(state.pastes)
            )
        },
        updatePaste: (state, action) => {
            const data = action.payload;
            const index = state.pastes.findIndex(x => x.id == data.id)
            if (index != -1) {
                state.pastes[index] = data
            }
            // state.pastes.push(state.pastes);
            localStorage.setItem("pastes",
                JSON.stringify(state.pastes)
            )
        },
        deletePaste: (state, action) => {
            const index = state.pastes.findIndex(x=>x.id == action.payload)
            if(index != -1){
                state.pastes.splice(index, 1)
            }
            localStorage.setItem("pastes",
                JSON.stringify(state.pastes)
            )

        },
        resetPaste: (state) => {
            state.pastes = [];
            localStorage.removeItem("pastes")
        },
    }
})

export const { createPastes, updatePaste, deletePaste, resetPaste } = pasteSlice.actions

export default pasteSlice.reducer