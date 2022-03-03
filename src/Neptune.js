import React, {Component} from "react";
import './index.css';
class Neptune  extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
            source:"https://i.ibb.co/41rw7h1/planet-neptune.png"
        }
    }
    innerButton = (evt) => {
        this.setState({
            content: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
            source:"https://i.ibb.co/0Gvjsyt/planet-neptune-internal.png"
        })
    }
    overviewButton = (evt) => {
        this.setState({
            content: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
            source:"https://i.ibb.co/41rw7h1/planet-neptune.png"
        })
    }
    geologyButton = (evt) => {
        this.setState({
            content: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
            source:"https://i.ibb.co/TR0C5gz/geology-neptune.png"
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
                <div className="planet-heading-info">
               <h1>{this.props.planetName}</h1>
               <p>{this.state.content}</p>
               </div>
                <div className="planet-button">
               <button className="full-text" onClick={this.overviewButton}>01 Overview</button>
               <button className="short-text" onClick={this.overviewButton}>Overview</button>
               <button className="full-text" onClick={this.innerButton}>02 Internal Structure</button>
               <button  className="short-text"onClick={this.innerButton}>structure</button>
               <button className="full-text" onClick={this.geologyButton}>03 Surface Geologist</button>
               <button className="short-text" onClick={this.geologyButton}>Surface</button>
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
export default Neptune;