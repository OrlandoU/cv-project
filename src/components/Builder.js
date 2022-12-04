import React from "react";
import Section from "./Section";
import sectionTemplates from "../objects/sectionTemplates";

class Builder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="builder-container">
                <div className="builder-header">Resume Builder</div>
                {sectionTemplates.map(section=>{
                    return <Section key={section.section} addSection={this.props.addSection} removeSection={this.props.removeSection} section={section} savedInfo={this.props.savedInfo}/>
                })}
            </div>
        )
    }
}

export default Builder