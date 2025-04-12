import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'
function addTransaction() {
    const [text, setText] = useState('')
    const [amount, SetAmount] = useState(0)
    const { createTransaction } = useContext(GlobalContext);

    function handleTransaction(e){
        e.preventDefault()

        const newtransaction = {
            id: Date.now().toString(),
            text,
            amount: Number(amount)
        }

        createTransaction(newtransaction)
        setText('')
        SetAmount(0)
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..."
                        value={text} onChange={(e) => { setText(e.target.value) }} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label>

                    <input type="number" id="amount" placeholder="Enter amount..."
                        value={amount} onChange={(e) => { SetAmount(e.target.value) }} />
                </div>
                <button className="btn" onClick={(e) => handleTransaction(e)}>Add transaction</button>
            </form>
        </>
    )
}

export default addTransaction
