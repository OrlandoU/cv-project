import React from "react";

class SubSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            subSection: this.props.subSection,
            sectionTemplate: this.props.sectionTemplate
        }
    }

    render(){
        console.log(this.state.sectionTemplate)
        return (
            <div className="subsection-container">
                {this.state.sectionTemplate.template.map(template=>{
                    return (
                        <div className="input-container">
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SubSection