import React, {Component} from "react";
import './index.css';
class Venus extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: "TVenus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            source:"https://i.ibb.co/Xx9m4Wj/planet-venus.png"
            
        }
    }
    innerButton = (evt) => {
        this.setState({
            content: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
            source: "https://i.ibb.co/s1v322n/planet-jupiter-internal-1.png"
        })
    }
    overviewButton = (evt) => {
        this.setState({
            content: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            source: "https://i.ibb.co/Xx9m4Wj/planet-venus.png"
        })
    }
    geologyButton = (evt) => {
        this.setState({
            content: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
            source:"https://i.ibb.co/1zPFKQK/geology-venus.png"
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
export default Venus;