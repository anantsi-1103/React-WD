import { useState } from 'react'
import Card from './component/Card';
import Button from './component/Button';
import './App.css'

function App() {

  const [count, setCount] = useState(0)


  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <Button text="click me" hc={handleClick}>
          <h2>THIS IS A BUTTON COUNT</h2>
          <h1>{count}</h1>
        </Button>
      </div>

      <Card name="Aman">
        <h1>This is a Card</h1>
        <p>We are the Childrens of the Card Parent</p>
        <p>This is a Prop Children Method</p>
      </Card>

      <Card children='m attribute hu'>
        <h1>M Bhi Children hu</h1>
      </Card>

    </>
  )
}

export default App
