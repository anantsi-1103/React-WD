import UserContext from "../App";
import React, { useContext } from 'react'

const Child3 = () => {
    const user = useContext(UserContext);
  return (
    <div>
      {user.name}
    </div>
  )
}

export default Child3
