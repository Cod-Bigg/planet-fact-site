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
    innerButton = (evt) => {
        this.setState({
            content: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
            source: "https://i.ibb.co/3YMqyMn/planet-mercury-internal-1.png"
        })
    }
    overviewButton = (evt) => {
        this.setState({
            content: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            source: "https://i.ibb.co/WgBTH70/planet-mercury-1.png"
        })
    }
    geologyButton = (evt) => {
        this.setState({
            content: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
            source: "https://i.ibb.co/GQF1f2J/geology-mercury.png"
        })
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
               <button onClick={this.overviewButton}>01 Overview</button>
               <button onClick={this.innerButton}>02 Internal Structure</button>
               <button onClick={this.geologyButton}>03 Surface Geologist</button>
             </div>
            </div>
        </div>
    </div>
        )
    }
}
export default Planets;