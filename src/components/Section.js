import { useEffect, useState } from "react";
import SubSection from "./SubSection";

function Section(props) {
    const [section] = useState(props.section)
    const [subSectionId, setSubSectionId] = useState()

    const updateId = () => {
        setSubSectionId(prevState => prevState + 1)
    }

    useEffect(() => {
        let id = 0;
        props.savedInfo.forEach(el => {
            if (el.sectionName === props.section.section && el.data.length) {
                id = el.data[el.data.length - 1].id
            }
        })
        setSubSectionId(id)
        console.log(id)
    }, [])

    console.log(props.savedInfo)
    return (
        <div className={section.section + " section-container"}>
            <header>{section.section}</header>
            <div className="info-container">{section.info}</div>
            <ul className="subSection-container">
                {props.savedInfo.map(element => {
                    if (element.sectionName === section.section) {
                        //Render Subsection for each element in DB data of crr section
                        return element.data.map((savedData, index) => {
                            return (
                                <SubSection
                                    key={index}
                                    removeSection={props.removeSection}
                                    updateSection={props.updateSection}
                                    savedData={savedData}
                                    subSectionId={savedData.id}
                                    sectionTemplate={section}
                                />
                            )
                        })
                    }
                    return null
                })}
            </ul>

            {(section.section === 'Personal Details') || (section.section === 'Professional Summary')
                ? <div></div>
                : <div
                    className="addInput"
                    onClick={() => {
                        props.addSection(section, subSectionId)
                        updateId()
                    }}
                  >Add {section.add} +</div>}
        </div>
    )
}

export default Section