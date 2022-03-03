import React, {Component} from "react";
import './index.css';
class Saturn  extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            source:"https://i.ibb.co/MZwyDMR/planet-saturn.png"
            
        }
    }
    innerButton = (evt) => {
        this.setState({
            content: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
            source:"https://i.ibb.co/41VFsw0/planet-saturn-internal.png"
        })
    }
    overviewButton = (evt) => {
        this.setState({
            content: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            source: "https://i.ibb.co/MZwyDMR/planet-saturn.png"
        })
    }
    geologyButton = (evt) => {
        this.setState({
            content: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
            source:"https://i.ibb.co/82VF61s/geology-saturn.png"
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
export default Saturn;