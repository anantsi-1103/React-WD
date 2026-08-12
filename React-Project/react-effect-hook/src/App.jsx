
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  // first -> side effect function 
  // second -> clean up function , unmount 
  // third -> Collection of dep function 

  // Variation 1 -
  // run on every render

  // useEffect(() => {
  //   alert('i will render at every or each render')
  // })


  // variation 2 -
  // that run or render on only first render

  // useEffect(() => {
  //   alert('render at first time')


  // }, [])


  // variation 3 -
  // [] -> state change hoga tb woh effect ko trigger krega 

  // useEffect(() => {
  //   alert('render at where the count changed')


  // }, [count])



  // variation 4 -
  // [] collection -> state change hoga tb woh effect ko trigger krega 

  // useEffect(() => {
  //   alert('render at where the count changed')


  // }, [count, total])

  // variation 5 -
  // [] collection -> state change hoga tb woh effect ko trigger krega 
  // return -> cleanup , unmount

  useEffect(() => {
    alert('render at where the count changed')

    // old state ko leave kroge or new m jaaoge 
    return () => {
      console.log("Count is Unmounted from the UI")
    }

  }, [count, total])


  function handleClick() {
    setCount(count + 1)
  }
  function handleTotalClick() {
    setTotal(total + 1)
  }


  // Syntax
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])



  return (
    <>
      <div>
        <button
          onClick={handleClick}
        >Click</button>

        <br />

        Count is : {count}
      </div>
      <div>
        <button
          onClick={handleTotalClick}
        >Total Click</button>

        <br />

        Total Count is : {total}
      </div>

      <br />

    </>
  )
}

export default App
