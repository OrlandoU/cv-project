import React, { useState } from "react";
import SubSegment from "./SubSegment";

function Segment(props) {
    const [left] = useState(props.left)

    if (props.sectionInfo.data.length) {
        if (left && (props.sectionInfo.sectionName === "Personal Details" || props.sectionInfo.sectionName === "Skills" || props.sectionInfo.sectionName === "Languages")) {
            return (
                <div className={props.sectionInfo.sectionName + " subsegment-container"}>
                    <header className="segment-header">{props.sectionInfo.sectionName}</header>
                    {props.sectionInfo.data.map((subSegmentInfo, index) =>
                        <SubSegment key={index} subSegmentInfo={subSegmentInfo} />
                    )}
                </div>
            )
        } else if (!left && !(props.sectionInfo.sectionName === "Personal Details" || props.sectionInfo.sectionName === "Skills" || props.sectionInfo.sectionName === "Languages")) {
            return (
                <div className={props.sectionInfo.sectionName + " subsegment-container"}>
                    <header className="segment-header">{props.sectionInfo.sectionName}</header>
                    {props.sectionInfo.data.map((subSegmentInfo, index) =>
                        <SubSegment key={index} subSegmentInfo={subSegmentInfo} />
                    )}
                </div>
            )
        }

    }
    return

}

export default Segment