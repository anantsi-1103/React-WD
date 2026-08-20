import { useState } from 'react'

import './App.css'
import { store } from './redux/store.js'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counterSlice.jsx'

function App() {

  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement(){
    dispatch(increment)
  }
  
  function handleDecrement(){
    dispatch(decrement)
  }
  function handleReset(){
    dispatch(reset)
  }
  

  return (
    <div className='container'>
        <button onClick={handleIncrement}>+</button>
        <p>Count : {count}</p>
        <button onClick={handleDecrement}>-</button>
        <br />
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
