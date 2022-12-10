import React from "react";
import SubSegment from "./SubSegment";

class Segment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left: this.props.left
        }
    }

    render() {

        if (this.props.sectionInfo.data.length) {
            if (this.state.left && (this.props.sectionInfo.sectionName === "Personal Details" || this.props.sectionInfo.sectionName === "Skills" || this.props.sectionInfo.sectionName === "Languages")) {
                return (
                    <div className={this.props.sectionInfo.sectionName + " subsegment-container"}>
                        <header className="segment-header">{this.props.sectionInfo.sectionName}</header>
                        {this.props.sectionInfo.data.map((subSegmentInfo, index) =>
                            <SubSegment key={index} subSegmentInfo={subSegmentInfo} />
                        )}
                    </div>
                )
            }else if(!this.state.left && !(this.props.sectionInfo.sectionName === "Personal Details" || this.props.sectionInfo.sectionName === "Skills" || this.props.sectionInfo.sectionName === "Languages")){
                console.log(this.props.sectionInfo.sectionName)
                return (
                    <div className={this.props.sectionInfo.sectionName + " subsegment-container"}>
                        <header className="segment-header">{this.props.sectionInfo.sectionName}</header>
                        {this.props.sectionInfo.data.map((subSegmentInfo, index )=>
                            <SubSegment key={index} subSegmentInfo={subSegmentInfo} />
                        )}
                    </div>
                )
            }

        }
        return
    }
}

export default Segment