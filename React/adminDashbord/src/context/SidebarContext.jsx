import React, { createContext, useReducer } from "react";
import SidebarReducer from "../reducer/sidebarReducer.js"

const initialState = {
    isSidebarOpen: false
}

export const SidebarContext = createContext(initialState)

export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SidebarReducer, initialState);

    const toggleSidebar = () => {
        dispatch({
            type: 'TOGGLE_SIDEBAR',
            payload: ''
        })
    }

    return (
        <SidebarContext.Provider value={{
            ...state,
            toggleSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    );
}

// SidebarProvider.prototype = {
//     children : PropTypes.node
// }
