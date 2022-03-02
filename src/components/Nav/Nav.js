import { Link } from 'react-router-dom';
import React from 'react'
import './Nav.css';
import logo from '../assets/shared/logo.svg';
//import menu from '../assets/shared/icon-hamburger.svg';



function Nav() {
  
  //const handleClick = () => {
    //const navbar = document.getElementById("navbar")

    //navbar.classList.toggle("open")
  //}

  return (
    <div>
     <header className="header">
       <Link to="/" >
       <img className="logo" src={logo} alt="logo"/>
       </Link>
       
       <nav id="navbar">
         <ul>
           <li >
             <Link to="/" ><span className="num">00</span>Home</Link>
           </li>
           <li>
             <Link to="/destination" ><span className="num">01</span>Destination</Link>
           </li>
           <li>
             <Link to="/crew" ><span className="num">02</span>Crew</Link>
           </li>
           <li>
             <Link to="/technology" ><span className="num">03</span>Technology</Link>
           </li>
         </ul>
       </nav>
       {/*  
       <div className="menu">
          <button id="menu" onClick={handleClick}>
            <img src={menu} alt={menu}  />
          </button>
        </div>
        */}
     </header>
     </div>
  )
}

export default Nav


