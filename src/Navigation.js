import React, {Component} from "react";
import './index.css';
import {NavLink} from "react-router-dom"

class Navigation extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
   <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink className="navbar-brand" to="/">Planets</NavLink>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Mercury</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/earth">Earth</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/jupiter">Jupiter</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/venus">Venus</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/mars">Mars</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/saturn">Saturn</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/uranus">Uranus</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/neptune">Neptune</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
        )
    }
}

export default Navigation;