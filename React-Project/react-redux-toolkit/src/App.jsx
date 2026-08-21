import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counterSlice.jsx'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  function handleIncrement() {
    dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
  }

  function handleReset() {
    dispatch(reset())
  }

  function handleIncByAmount() {
    dispatch(incrementByAmount(Number(amount) || 0))
  }

  return (
    <div className='container'>
      <button onClick={handleIncrement}>+</button>
      <p>Count : {count}</p>
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleIncByAmount}>Increment By Amount</button>
    </div>
  )
}

export default App


