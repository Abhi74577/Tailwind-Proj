
import './App.css'
import Header from './components/header'
import Balance from './components/balance'
import IncomeExpenses from './components/incomeExpenses'
import Transaction from './components/transaction'
import AddTransaction from './components/addTransaction'
import { GlobalProvider } from './Context/GlobalState'

function App() {

  return (
    <>
      <GlobalProvider>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <Transaction />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
