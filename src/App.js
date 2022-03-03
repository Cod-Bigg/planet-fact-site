import React, {Component} from "react";
import './index.css';
import Navigation from "./Navigation";
import {Route, Routes} from "react-router-dom"
import Planets from './Planets';
import Earth from './Earth';
import Jupiter from './Jupiter';
import Venus from './Venus';
import Mars from './Mars';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Planets planetName="Mercury" rotation="58.6 Days" revolution="87.97 Days" radius="2,439.7 KM" temperature="430°c"  />} />
                    <Route exact path="/earth" element={<Earth planetName="Earth" rotation="0.99 Days" revolution="365.26 Days" radius="6,371.7 KM" temperature="16°c" />} />
                    <Route exact path="/jupiter" element={<Jupiter planetName="Jupiter" rotation="9.93 Hours" revolution="11.86 Years" radius="69,911 KM" temperature="-108°c" />} />
                    <Route exact path="/venus" element={<Venus planetName="Venus" rotation="243 Days" revolution="224.7 Days" radius="6,501.8 KM" temperature="471°c" />} />
                    <Route exact path="/mars" element={<Mars planetName="Mars" rotation="1.03 Days" revolution="1.88 Years" radius="3,389.5 KM" temperature="-28°c" />} />
                    <Route exact path="/saturn" element={<Saturn planetName="Saturn" rotation="10.8 Hours" revolution="29.46 Years" radius="58,232 KM" temperature="-138°c" />} />
                    <Route exact path="/uranus" element={<Uranus planetName="Uranus" rotation="17.2 Hours" revolution="84 Years" radius="25,362 KM" temperature="-195°c" />} />
                    <Route exact path="/neptune" element={<Neptune planetName="Neptune" rotation="16.08 Hours" revolution="164.79 Years" radius="24,622 KM" temperature="-201°c" />} />
                </Routes>
            </div>
        )
    }
}
export default App;