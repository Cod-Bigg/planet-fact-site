import React, {Component} from "react";
import './index.css';

class Planets extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            source: "https://i.ibb.co/WgBTH70/planet-mercury-1.png"
        }
    }
    render(){
        return(
    <div>
        <div className="img-text-container">
            <div>
                <img src={this.state.source} className="planetImg"/>
            </div>
            <div className="planetInfo">
               <h1>{this.props.planetName}</h1>
               <p>{this.state.content}</p>
                <div className="planet-button">
               <button>01 Overview</button>
               <button>02 Internal Structure</button>
               <button>03 Surface Geologist</button>
             </div>
            </div>
        </div>
    </div>
        )
    }
}
export default Planets;