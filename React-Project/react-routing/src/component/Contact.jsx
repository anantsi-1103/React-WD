import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/')
  }


  return (
    <div>Contact Page


      <button onClick={handleClick}>
        Back to Home
      </button>


      <Outlet/>



    </div>
  )
}

export default Contact