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
  // State for Music Player
  const [isPlaying, setisPlaying] = useState(false)
  const [time, setTime] = useState(0)

  // ==========================================================
  // useRef Concept 1: Storing a Mutable Reference Across Renders
  // ==========================================================
  // We use `timerRef` to store the interval ID.
  // Why useRef?
  // 1. A normal variable (let timerId) resets on every re-render.
  // 2. useState causes an extra re-render whenever the timer ID changes.
  // 3. useRef preserves timerRef.current across re-renders WITHOUT triggering re-renders!
  const timerRef = useRef(null);

  // ==========================================================
  // useRef Concept 2: Accessing DOM Elements
  // ==========================================================
  // We can attach `playerRef` to a JSX element via `ref={playerRef}`
  // to directly access or manipulate the DOM node.
  const playerRef = useRef(null);

  const duration = 230 // 3min 50 sec

  useEffect(() => {
    if (isPlaying) {
      // Store interval ID in timerRef.current
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
      // Clear interval using timerRef.current
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

    return `${minutes}:${remainingSec < 10 ? '0' : ''}${remainingSec}`
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
      <div className={`player ${isPlaying ? 'playing' : ''}`} ref={playerRef}>
        <div className="music-icon">🎧</div>

        <h1>Music Vibes</h1>
        <p>low beats</p>

        <div className="progress-container">
          <div
            className='progress'
            style={{
              width: `${progress}%`
            }}
          ></div>
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

        {/* Live useRef Explanation Badge */}
        <div className="useref-info">
          💡 <strong>useRef Concept:</strong><br />
          <code>timerRef.current</code> holds Interval ID (<code>{timerRef.current !== null ? timerRef.current : 'null'}</code>) across re-renders without causing extra re-renders.
        </div>
      </div>
    </div>
  )
}

export default App
