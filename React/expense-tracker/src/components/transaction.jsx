import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import TransctionList from './transctionList';
function transaction() {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul id="list" class="list">
                {
                    transactions.map(element => (
                       <TransctionList key={element.id} transaction={element} />
                    ))
                }

            </ul>
        </>
    )
}

export default transaction
