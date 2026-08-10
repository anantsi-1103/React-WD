import React from 'react'

// Prop Destructing
const Card = ({children}) => {
  return (
    <div className="card-container">
        {/* {props.name} */}
        {children}
    </div>
  )
}

export default Card