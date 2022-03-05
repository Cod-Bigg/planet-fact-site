import React, {Component} from "react";

import './index.css';

class Earth extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            source:"https://i.ibb.co/dMrXCB7/planet-earth-1.png"
            
        }
    }
    innerButton = (evt) => {
        this.setState({
            content: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
            source: "https://i.ibb.co/tZhXTsz/planet-earth-internal.png"
        })
    }
    overviewButton = (evt) => {
        this.setState({
            content: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            source: "https://i.ibb.co/dMrXCB7/planet-earth-1.png"
        })
    }
    geologyButton = (evt) => {
        this.setState({
            content: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
            source: "https://i.ibb.co/2djSSd1/geology-earth.png"
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
export default Earth;