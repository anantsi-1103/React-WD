import { useState } from 'react'
import Card from './Card';
import './App.css'

function App() {
 // create/manage/change
 const[name, setName] = useState('')

  return (
    <>
     {/* <Card title='card1' name = {name} setName = {setName}/>
    <p>I am inside the Parent Component and Card Value is {name}</p> */}
    <Card title='card1' name = {name} setName = {setName}/>
    <Card title='card2' name = {name} setName = {setName}/>
    <p>I am inside the Parent Component and Card Value is {name}</p>
    </>
  )
}

export default App
