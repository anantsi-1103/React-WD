import React, { useState } from 'react'
import './Counter.css';


const Counter = () => {
    // useState 
    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount((pc) => pc + 1)
    }
    const handleDecrement = ()=>{
        setCount((pc) => pc - 1)
    }

    const handleReset = ()=>{
        setCount(0)
    }
    return (
    <div className='counter-wrapper'>
        <div className='counter-card'>
            <h2 className='counter-title'>React Counter</h2>
                <p className='counter-subtitle'>State Management using useState Hook</p>

                     <div className="counter-display-container">
          <div className="counter-display">{count}</div>
        </div>

        <div className='counter-controls'>
            <button className='counter-btn btn-decrement' onClick={handleDecrement} >
                - Decrement
            </button>
            <button className='counter-btn btn-reset' onClick={handleReset} >
                Reset
            </button>
            <button className='counter-btn btn-increment' onClick={handleIncrement}>
                Increment
            </button>
        </div>

        </div>
    </div>
    )
}

export default Counter