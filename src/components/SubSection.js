import expand from '../objects/expand.png'
import { useState } from "react";

function SubSection(props) {
    const [sectionTemplate] = useState(props.sectionTemplate)

    const saveNewInfo = (event) => {
        let input = event.target
        let header = input.id.split('-')[1]
        let value = input.value
        let newObj = props.savedData
        newObj[header] = value
        props.updateSection(newObj, props.subSectionId, sectionTemplate.section)
    }

    return (
        //Rendering whole template for current section
        <label htmlFor={sectionTemplate.section + props.subSectionId} className="section">
            {(sectionTemplate.section === 'Personal Details') || (sectionTemplate.section === 'Professional Summary')
                ? null
                : <input
                    style={{ display: 'none' }}
                    className='isSelected'
                    type="radio"
                    defaultChecked
                    name='selection'
                    id={sectionTemplate.section + props.subSectionId}
                />}

            {(sectionTemplate.section === 'Personal Details') || (sectionTemplate.section === 'Professional Summary')
                ? null
                : <header className='subsection-info'>
                    {(props.savedData['Job title'] || props.savedData['School'] || props.savedData['Skill'] || props.savedData['Course'] || props.savedData['Language']) || 'Empty'}
                    <img src={expand} alt="Expand button" />
                </header>}


            <form className={"subsection-container"}>
                {sectionTemplate.template.map((template, index) => {
                    if (template.type === 'Date') {
                        return (
                            <div key={index} className="date-main-container" >
                                <label>{template.header}</label>
                                <div className="date-container">
                                    <div className="start-date">
                                        <input
                                            autoComplete='off'
                                            value={props.savedData[template.header]}
                                            onChange={saveNewInfo}
                                            name='startDate'
                                            id={props.subSectionId + '-startDate'}
                                            type={template.type}
                                        />
                                        <span></span>
                                    </div>
                                    <div className="end-date">
                                        <input
                                            autoComplete='off'
                                            value={props.savedData[template.header]}
                                            onChange={saveNewInfo}
                                            name='endDate'
                                            id={props.subSectionId + '-endDate'}
                                            type={template.type}
                                        />
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
                                    <select onChange={saveNewInfo} name='select' id={props.subSectionId + '-selectLevel'} type={template.type}>
                                        <option defaultChecked >Select Level</option>
                                        <option checked={() => props.savedData[template.header] === 'Native speaker'} value="Native speaker">Native Speaker</option>
                                        <option checked={() => props.savedData[template.header] === 'Highly proficient'} value="Highly proficient">Highly proficient</option>
                                        <option checked={() => props.savedData[template.header] === 'Very Good Command'} value="Very Good Command">Very Good Command</option>
                                    </select>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div key={index + '-' + template.header} className="input-container">
                            <label>{template.header}</label>
                            {template.type === 'TextArea'
                                ? <textarea
                                    value={props.savedData[template.header]}
                                    id={props.subSectionId + '-' + template.header}
                                    rows='8'
                                    onChange={saveNewInfo}
                                    className="textarea-input"
                                />
                                : <input
                                    autoComplete='off'
                                    value={props.savedData[template.header]}
                                    onChange={saveNewInfo}
                                    name={template.header}
                                    id={props.subSectionId + '-' + template.header}
                                    type={template.type}
                                />}
                            <span></span>
                        </div>
                    )
                })}
            </form>
            {(sectionTemplate.section === 'Personal Details') || (sectionTemplate.section === 'Professional Summary')
                ? null
                : <button
                    className='delete-button'
                    type='button'
                    onClick={() => {
                        props.removeSection(sectionTemplate.section, props.subSectionId)
                    }}
                >X</button>}

        </label>
    )

}

export default SubSection