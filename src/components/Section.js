import React from "react";
import SubSection from "./SubSection";

class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            section: this.props.section,
            removeSection: this.props.removeSection,
            addSection: this.props.addSection
        }
    }


    updateId() {
        this.setState({ id: this.state.id + 1 })
    }

    render() {
        return (
            <form action="" className={this.state.section.section + " section-container"}>
                <header>{this.state.section.section}</header>
                <div className="info-container">{this.state.section.info}</div>
                <ul className="subSection-container">
                    {this.props.savedInfo.map(section=>{
                        if(section.sectionName === this.state.section.section){
                            return section.data.map((subSection)=>{
                                console.log(this.state.section)
                                return <SubSection subSection={subSection} sectionTemplate={this.state.section}/>
                            })
                        }
                    })}
                </ul>

                <div className="addInput" onClick={() => {
                    this.state.addSection(this.state.section.section, this.state.id)
                    this.updateId()
                }}>Add new input +</div>
            </form>
        )
    }
}

export default Section