import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Flower', amount: 400 },
        { id: 3, text: 'Flower', amount: -30 },
    ]
}

export const GlobalContext = createContext(initialState);

//Provider Add

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function createTransaction(newtransaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: newtransaction
        });
    }

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        createTransaction,
        deleteTransaction
    }}>
        {children}</GlobalContext.Provider>);
}