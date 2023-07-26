import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../src/images/logo5.png";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light py-2">
  <div className="container w-100">
    <NavLink className="navbar-brand mx-md-auto mx-sm-auto" to="/"><a href="/"><img src={logo} alt="#" width="180" height="70"></img></a></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-lg-5">
          <NavLink  exact className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item me-lg-5 dropdown">
          <a href="/#" exact className="nav-link dropdown-toggle text-muted bg-body border border-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
          <ul className="dropdown-menu">
            <li className="text-center"><NavLink exact className="dropdown-item listItem bg-body border border-white" to="/about/company-profile">Company Profile</NavLink></li>
            <li className="text-center"><NavLink exact className="dropdown-item listItem  bg-body border border-white" to="/about/mission-vision">Our Mission & Vision</NavLink></li>
            <li className="text-center"><NavLink exact className="dropdown-item listItem bg-body border border-white" to="/about/cert">Certificate</NavLink></li>
          </ul>
        </li>
        <li className="nav-item me-lg-5 dropdown">
          <a href="/#" exact className="nav-link dropdown-toggle text-muted bg-body border border-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li className="text-center"><NavLink exact className="dropdown-item listItem bg-body border border-white" to="/products/acsr">ACSR</NavLink></li>
            <li className="text-center"><NavLink exact className="dropdown-item listItem bg-body border border-white" to="/products/aac">AAC</NavLink></li>
            <li className="text-center"><NavLink exact className="dropdown-item listItem bg-body border border-white" to="/products/aaac">AAAC</NavLink></li>
            <li className="text-center"><NavLink exact className="dropdown-item listItem bg-body border border-white" to="/products/aacsr">AACSR</NavLink></li>
            <li className="text-center"><NavLink exact className="dropdown-item listItem bg-body border border-white" to="/products/acar">ACAR</NavLink></li>
          </ul>
        </li>
        <li className="nav-item me-lg-5">
          <NavLink exact className="nav-link" to="/Gallery">Gallery</NavLink>
        </li>
        <li className="nav-item me-lg-5">
          <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
            {/* </div>
        </div>
    </div> */}
        </>
    )
}


export default Navbar;