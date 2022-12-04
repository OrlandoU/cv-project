import React from "react";
import SubSection from "./SubSection";

class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subSectionId: 0,
            section: this.props.section,
        }
    }


    updateId() {
        this.setState({ subSectionId: this.state.subSectionId + 1 })
    }

    render() {
        return (
            <div className={this.state.section.section + " section-container"}>
                <header>{this.state.section.section}</header>
                <div className="info-container">{this.state.section.info}</div>
                <ul className="subSection-container">
                    {this.props.savedInfo.map(section => {
                        if (section.sectionName === this.state.section.section) {
                            //Render Subsection for each element in DB data of crr section
                            return section.data.map((savedData, index) => {
                                return <SubSection key={index} updateSection={this.props.updateSection} subSectionId={savedData.id} sectionTemplate={this.state.section} />
                            })
                        }
                    })}
                </ul>

                {(this.state.section.section === 'Personal Info') || (this.state.section.section === 'Professional Summary') ? <div></div> : <div className="addInput" onClick={() => {
                    this.props.addSection(this.state.section.section, this.state.subSectionId)
                    this.updateId()
                }}>Add {this.state.section.add} +</div>}
            </div>
        )
    }
}

export default Section