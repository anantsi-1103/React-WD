import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'


function login() {
  return <h2>Login page</h2>
}

function dashboard() {
  return <h2>Dashboard page</h2>
}

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
  const [count, setCount] = useState(0)
  const hasNotification = false
  // 1.
  // if(isLoggedIn){
  //   return(
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )

  // }

  // 2. Ternary - condition ? true_part : false_part

  // return(
  //   <div>
  //     {isLoggedIn? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  // 3. Logical Operator
  // base case
  // if (!isLoggedIn) {
  //   return (
  //     <LoginBtn />
  //   )
  // }

  // kaam
  // return (
  //   <div>Logical Condition


  //     <div>
  //       {isLoggedIn && <LogoutBtn />}
  //     </div>

  //   </div>

  // )

  // return (
  // <div>
  {/* <h1>Home</h1>


      {hasNotification && <p>You have an new Notification</p>} */}

  {/* {isLoggedIn? (
        <h1>Welcome User</h1>
      ):
      (
        <h1>Please Login</h1>
      )}

      <button onClick={()=> setLoggedIn(!isLoggedIn)}>Login/Logout</button>
    </div> */}
  {/* ) */ }

  return (
    <div>
      {
        isLoggedIn ? <dashboard /> : <login />
      }
    </div>
  );





}

export default App
