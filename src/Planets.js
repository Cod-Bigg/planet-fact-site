import React, {Component} from "react";
import './index.css';
import Navigation from "./Navigation";
class Planets extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            source: "https://i.ibb.co/WgBTH70/planet-mercury-1.png",
            
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
        <Navigation />
        <div className="img-text-container">
            <div>
                <img src={this.state.source} className="planetImg"/>
            </div>
            
            <div className="planetInfo">
                <div className="planet-heading-info">
               <h1>{this.props.planetName}</h1>
               <p>{this.state.content}</p>
               </div>
                <div className="planet-button">
               <button onClick={this.overviewButton}>01 Overview</button>
               <button onClick={this.innerButton}>02 Internal Structure</button>
               <button onClick={this.geologyButton}>03 Surface Geologist</button>
             </div>
            </div>
        </div>
            <div className ="planet-stats">
                <div className="rotation planet-stats-style"> 
                 <p>Rotation Time:</p><p>{this.props.rotation}</p>
                </div>
                <div className="revolution planet-stats-style">
                 <p>Revolution Time:</p><p>{this.props.revolution}</p>
                </div>
                <div className="radius planet-stats-style">
                 <p>Radius:</p><p>{this.props.radius}</p>
                </div>
                <div className="temp planet-stats-style">
                 <p>Avg Temp:</p><p>{this.props.temperature}</p>
                </div>
            </div>
    </div>
        )
    }
}
export default Planets;