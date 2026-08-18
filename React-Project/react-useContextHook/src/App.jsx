import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Child1 from './components/Child1'


// step 1 -> create a context
const UserContext = createContext()



function App() {
  const [user, setUser] = useState({name:"Aman"})

  return (
    <>
      {/* Step 2 -> make provider for the context */}
      <UserContext.Provider value={user}>
        <Child1 />
      </UserContext.Provider>

    </>
  )
}

export default App
export {UserContext}
