import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  Link,
} from "react-router-dom";

export class Navbar extends Component {

  constructor(){
    super();
    this.currentTheme = "light";
  }
handleDarkMode = ()=>{
  console.log('dark mode');
   if (this.currentTheme === 'light') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        this.currentTheme = 'dark';
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        this.currentTheme = 'light';
      }
}

  render() {


    return (
      <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg bg-body-secondary ">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/general"><img src="" alt=""/>NewsTales</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/general">Home</Link>
            </li>

            <li className='nav-item'><Link className="nav-link" to="/business">Business</Link></li>
            <li className='nav-item'><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            {/* <li className='nav-item'><Link className="nav-link" to="/general">General</Link></li> */}
            <li className='nav-item'><Link className="nav-link" to="/health">Health</Link></li>
            <li className='nav-item'><Link className="nav-link" to="/science">Science</Link></li>
            <li className='nav-item'><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className='nav-item'><Link className="nav-link" to="/technology">Technology</Link></li>
            {/* <li><button onClick={}>dark mode</button></li> */}
            </ul>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.handleDarkMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
