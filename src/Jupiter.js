import React, {Component} from "react";
import './index.css';
class Jupiter extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            source:"https://i.ibb.co/MM51yHn/planet-jupiter-1.png"
            
        }
    }
    innerButton = (evt) => {
        this.setState({
            content: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
            source: "https://i.ibb.co/s1v322n/planet-jupiter-internal-1.png"
        })
    }
    overviewButton = (evt) => {
        this.setState({
            content: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            source: "https://i.ibb.co/MM51yHn/planet-jupiter-1.png"
        })
    }
    geologyButton = (evt) => {
        this.setState({
            content: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
            source: "https://i.ibb.co/yRFLy5y/geology-jupiter.png"
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
export default Jupiter;