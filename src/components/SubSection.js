import expand from '../objects/expand.png'
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

    saveNewInfo(event) {
        let input = event.target
        let header = input.id.split('-')[1]
        let value = input.value

        this.setState((prevState) => {
            return {
                subSectionInfo: { ...prevState.subSectionInfo, [header]: value }
            }
        }, () => {
            this.props.updateSection(this.state.subSectionInfo, this.state.subSectionId, this.state.sectionTemplate.section)
        })
    }

    render() {
        return (
            //Rendering whole template for current section
            <label htmlFor={this.state.sectionTemplate.section+this.state.subSectionId} className="section">
                {(this.state.sectionTemplate.section === 'Personal Details') || (this.state.sectionTemplate.section === 'Professional Summary') ? null : <header className='subsection-info'>{(this.state.subSectionInfo['Job title']||this.state.subSectionInfo['School']||this.state.subSectionInfo['Skill']||this.state.subSectionInfo['Course']||this.state.subSectionInfo['Language'])||'Empty'}<img src={expand} alt="Expand button" /></header>}
                {(this.state.sectionTemplate.section === 'Personal Details') || (this.state.sectionTemplate.section === 'Professional Summary') ? null : <input style={{display: 'none'}} className='isSelected' type="radio" defaultChecked name='selection' id={this.state.sectionTemplate.section+this.state.subSectionId}/>}

                <form className={"subsection-container"}>
                    {this.state.sectionTemplate.template.map((template, index) => {
                        if (template.type === 'Date') {
                            return (
                                <div key={index} className="date-main-container">
                                    <label>{template.header}</label>
                                    <div className="date-container">
                                        <div className="start-date">
                                            <input autoComplete='off' onChange={this.saveNewInfo} name='startDate' id={this.state.subSectionId + '-startDate'} type={template.type} />
                                            <span></span>
                                        </div>
                                        <div className="end-date">
                                            <input autoComplete='off' onChange={this.saveNewInfo} name='endDate' id={this.state.subSectionId + '-endDate'} type={template.type} />
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else if (template.type === 'Select') {
                            return (
                                <div key={index} className="select-main-container">
                                    <label>{template.header}</label>
                                    <div className="select-container">
                                        <select onChange={this.saveNewInfo} name='select' id={this.state.subSectionId + '-selectLevel'} type={template.type}>
                                            <option selected disabled value="Select Level">Select Level</option>
                                            <option value="Native speaker">Native Speaker</option>
                                            <option value="Highly proficient">Highly proficient</option>
                                            <option value="Very Good Command">Very Good Command</option>
                                        </select>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div key={index + '-' + template.header} className="input-container">
                                <label>{template.header}</label>
                                {template.type === 'TextArea' ? <textarea id={this.state.subSectionId + '-' + template.header} rows='8' onChange={this.saveNewInfo} className="textarea-input" /> : <input autoComplete='off' onChange={this.saveNewInfo} name={template.header} id={this.state.subSectionId + '-' + template.header} type={template.type} />}
                                <span></span>
                            </div>
                        )
                    })}
                </form>
            </label>
        )
    }
}

export default SubSection