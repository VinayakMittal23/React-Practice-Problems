import React from 'react'
import { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    const handleChange = (e) => {
   
    }
  return (
    <div>
<button onClick={handleIncrement}>+</button>
<div onChange={handleChange}>Counter <span>{count}</span></div>
<button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter  
