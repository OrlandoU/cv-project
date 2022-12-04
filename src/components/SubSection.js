import React from "react";

class SubSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subSectionInfo: {},
            subSectionId: this.props.subSectionId,
            sectionTemplate: this.props.sectionTemplate
        }
        this.saveNewInfo = this.saveNewInfo.bind(this)
    }

    saveNewInfo(event){
        let input = event.target
        let header = input.id.split('-')[1]
        let value = input.value

        this.setState((prevState)=>{
            return {
                subSectionInfo : {...prevState.subSectionInfo, [header] : value}
            }
        }, () => {
            this.props.updateSection(this.state.subSectionInfo, this.state.subSectionId, this.state.sectionTemplate.section)
        })    
    }

    render() {
        return (
            //Rendering whole template for current section
            <form className="subsection-container" >
                {this.state.sectionTemplate.template.map((template, index) => {
                    return (
                        <div key={index + '-' + template.header} className="input-container">
                            <label htmlFor={this.state.subSectionId + '-' + template.header}>{template.header}</label>
                            {template.type === 'TextArea'? <textarea onChange={this.saveNewInfo} className="textarea-input" /> : <input onChange={this.saveNewInfo} name={template.header} id={this.state.subSectionId + '-' + template.header} type={template.type} />}
                        </div>
                    )
                })}
            </form>
        )
    }
}

export default SubSection