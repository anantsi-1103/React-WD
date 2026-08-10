import React from 'react'

const Button = (props) => {
  return (
    <div className="button-container">
        {props.children}
        <button className="custom-button" onClick={props.hc}>
         {props.text}
        </button>
    </div>
  )
}

export default Button