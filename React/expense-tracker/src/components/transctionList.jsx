import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

function transctionList({ transaction }) {
  const {deleteTransaction} = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
      <li className={sign == '-' ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={() => {deleteTransaction(transaction.id)}}>x</button>
      </li>
     
 
  )
}

export default transctionList
