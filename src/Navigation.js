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
   <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink class="navbar-brand" to="/">Planets</NavLink>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/earth">Earth</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/jupiter">Jupiter</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/venus">Venus</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/mars">Mars</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/saturn">Saturn</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/uranus">Uranus</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/neptune">Neptune</NavLink>
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