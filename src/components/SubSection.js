import expand from '../objects/expand.png'
import React from "react";

class SubSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sectionTemplate: this.props.sectionTemplate
        }
        this.saveNewInfo = this.saveNewInfo.bind(this)
    }

    saveNewInfo(event) {
        let input = event.target
        let header = input.id.split('-')[1]
        let value = input.value
        let newObj = this.props.savedData
        newObj[header] = value
        this.props.updateSection(newObj, this.props.subSectionId, this.state.sectionTemplate.section)
    }
    render() {
        return (
            //Rendering whole template for current section
            <label htmlFor={this.state.sectionTemplate.section + this.props.subSectionId} className="section">
                {(this.state.sectionTemplate.section === 'Personal Details') || (this.state.sectionTemplate.section === 'Professional Summary') ? null : <header className='subsection-info'>{(this.props.savedData['Job title'] || this.props.savedData['School'] || this.props.savedData['Skill'] || this.props.savedData['Course'] || this.props.savedData['Language']) || 'Empty'}<img src={expand} alt="Expand button" /></header>}
                {(this.state.sectionTemplate.section === 'Personal Details') || (this.state.sectionTemplate.section === 'Professional Summary') ? null : <input style={{ display: 'none' }} className='isSelected' type="radio" defaultChecked name='selection' id={this.state.sectionTemplate.section + this.props.subSectionId} />}

                <form className={"subsection-container"}>
                    {this.state.sectionTemplate.template.map((template, index) => {
                        if (template.type === 'Date') {
                            return (
                                <div key={index} className="date-main-container">
                                    <label>{template.header}</label>
                                    <div className="date-container">
                                        <div className="start-date">
                                            <input autoComplete='off' value={this.props.savedData[template.header]} onChange={this.saveNewInfo} name='startDate' id={this.props.subSectionId + '-startDate'} type={template.type} />
                                            <span></span>
                                        </div>
                                        <div className="end-date">
                                            <input autoComplete='off' value={this.props.savedData[template.header]} onChange={this.saveNewInfo} name='endDate' id={this.props.subSectionId + '-endDate'} type={template.type} />
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
                                        <select onChange={this.saveNewInfo} name='select' id={this.props.subSectionId + '-selectLevel'} type={template.type}>
                                            <option defaultChecked >Select Level</option>
                                            <option checked={() => this.props.savedData[template.header] === 'Native speaker'} value="Native speaker">Native Speaker</option>
                                            <option checked={() => this.props.savedData[template.header] === 'Highly proficient'} value="Highly proficient">Highly proficient</option>
                                            <option checked={() => this.props.savedData[template.header] === 'Very Good Command'} value="Very Good Command">Very Good Command</option>
                                        </select>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div key={index + '-' + template.header} className="input-container">
                                <label>{template.header}</label>
                                {template.type === 'TextArea' ? <textarea value={this.props.savedData[template.header]} id={this.props.subSectionId + '-' + template.header} rows='8' onChange={this.saveNewInfo} className="textarea-input" /> : <input autoComplete='off' value={this.props.savedData[template.header]} onChange={this.saveNewInfo} name={template.header} id={this.props.subSectionId + '-' + template.header} type={template.type} />}
                                <span></span>
                            </div>
                        )
                    })}
                </form>
                {(this.state.sectionTemplate.section === 'Personal Details') || (this.state.sectionTemplate.section === 'Professional Summary') ? null : <button type='button' onClick={() => {
                    this.props.removeSection(this.state.sectionTemplate.section, this.props.subSectionId)
                }}>X</button>}

            </label>
        )
    }
}

export default SubSection