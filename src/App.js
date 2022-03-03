import React, {Component} from "react";
import './index.css';
import Navigation from "./Navigation";
import {Route, Routes} from "react-router-dom"
import Planets from './Planets';
import Earth from './Earth';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Planets planetName="Mercury" rotation="58.6 Days" revolution="87.97 Days" radius="2,439.7 KM" temperature="430°c"  />} />
                    <Route exact path="/earth" element={<Earth />} />
                </Routes>
            </div>
        )
    }
}
export default App;