
import './App.css'




function App() {

    function handleClick(){
      alert('button is clicked')
    }

    function handleMouse(){
      alert('i am on P Tag')
    }

    function handleInputChange(e){
      console.log("input value is Changed", e.target.value)
      
    }

    function handleSubmit(e){
        e.preventDefault()
        alert("form submit hogya hai but page change nhi hoga")
    }
  

  return (
    <>


    <form  onSubmit={handleSubmit}>
    <input type="text" onChange={handleInputChange} />
    <button type='submit'>Login</button>
    </form>

    <br />


    {/* <p onMouseOver={handleMouse}>I am a Para</p> */}
    <br />

    <button onClick={() => alert('button is clicked')}
    >Click me</button>
       
    </>
  )
}

export default App
