import { useState, useEffect } from 'react'
import './App.css'
import { useRef } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  // let n = useRef(0)
  // let btnRef = useRef();

  // function handleIncrement() {
  //   n.current = n.current + 1
  //   console.log("Value is :", n.current)
  //   setCount(count + 1)
  // }

  // useEffect(() => {
  //   console.log("hello M render kr rha hu ")

  // })

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "blue"
  // }

  // ------------------
  const [isPlaying, setisPlaying] = useState(false)
  const [time, setTime] = useState(0)

  // store the interval id
  const timerRef = useRef(null);


  const duration = 230 // 3min 50 sec

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime >= duration) {
            setisPlaying(false)
            return duration
          }
          return prevTime + 1
        })
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current)
    };


  }, [isPlaying])

  // play / pause
  function handlePlayPause() {
    setisPlaying((prev) => !prev)
  }

  // reset
  function handleReset(){
    setisPlaying(false);
    setTime(0);
  }

  function formatTime(seconds){
    const minutes = Math.floor(seconds/60)
    const remainingSec = seconds % 60

    return `${minutes}: ${remainingSec.toString()}`
  }

  const progress = (time/duration) * 100

  return (
    // <div >

    //   <button onClick={handleIncrement} ref={btnRef}>
    //     Increment
    //   </button>
    //   <br />
    //   <br />

    //   <div>
    //     Count : {count}
    //   </div>

    //   <br />
    //   <br />

    //   <button onClick={changeColor}>
    //     Change Button
    //   </button>
    // </div>

    <div className="app">
      <div className="player">
        <div className="music-icon">🎧</div>

        <h1>Music Vibes</h1>
        <p>low beats</p>

        <div className="progress-container">
          <div className='progress'>
            style = {{
              width: `${progress}%`
            }}
          </div>
        </div>

        <div className="time">
          <span>
            {formatTime(time)}
          </span>
          <span>
            {formatTime(duration)}
          </span>
        </div>

        <div className="play-button" onClick={handlePlayPause}>
          {isPlaying ? "⏸️" : "▶️"}
        </div>

        <button className="reset-button" onClick={handleReset}>
          ↺ Reset
        </button>
      </div>
    </div>
  )
}

export default App
