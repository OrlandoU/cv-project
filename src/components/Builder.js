import React from "react";
import Section from "./Section";
import sectionTemplates from "../objects/sectionTemplates";
import '../styles/Builder.css'

class Builder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    

    render(){
        return(
            <div className="builder-container" style={{maxWidth: window.innerWidth / 2}}>
                <div className="builder-header">Resume Builder</div>
                {sectionTemplates.map(section=>{
                    return <Section key={section.section} updateSection={this.props.updateSection} addSection={this.props.addSection} removeSection={this.props.removeSection} section={section} savedInfo={this.props.savedInfo}/>
                })}
            </div>
        )
    }
}

export default Builder