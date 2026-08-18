import React from 'react'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        // <div>
        //     <ul>
        //         <li>
        //             <Link to="/"> Home </Link>
        //         </li>
        //         <li>
        //             <Link to="/about"> About </Link>
        //         </li>
        //         <li>
        //             <Link to="/contact"> Contact </Link>
        //         </li>
        //     </ul>
        // </div>

        <div>
            <ul>
                <li>

                    <NavLink to="/" className={(isActive) => isActive ? "active-link" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={(isActive) => isActive ? "active-link" : ""}> About </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={(isActive) => isActive ? "active-link" : ""}> Contact </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar