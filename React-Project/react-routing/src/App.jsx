import './App.css'

import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Invalid from './component/Invalid';
import Navbar from './component/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Home />
      <Navbar />
    </div>
  },
  {
    path: "/about",
    element:
      <div>
        <About />
        <Navbar />
      </div>

  },
  {
    path: "/contact",
    element:


      <div>
        <Contact />
        <Navbar />
      </div>
  },
  {
    path: "*",
    element:

      <div>
        <Invalid />
        <Navbar />
      </div>
  }
]
)

// function invalidCase(){
//   return <h1>Invalid URL - 404</h1>
// }

// function Home(){
//   return <h1>Home Page</h1>
// }
// function About(){
//   return <h1>About Page</h1>
// }
// function Contact(){
//   return <h1>Contact Page</h1>
// }


function App() {


  return (
    <>
      <div>
        <RouterProvider router={router} />


      </div>
    </>
  )
}

export default App
