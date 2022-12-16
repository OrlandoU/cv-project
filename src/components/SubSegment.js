import React from "react";

function SubSegment(props) {
    return (
        <div className="subSegment-container">
            {Object.keys(props.subSegmentInfo).map((key, index) => {
                if (key === 'id' || !props.subSegmentInfo[key]) return null
                return (
                    <div key={index} className={key + " subSegment-element"}>
                        <header className="subSegment-header">{key}</header>
                        <div className={key + ' ' + props.subSegmentInfo[key] + " element-value"}>{props.subSegmentInfo[key]}</div>
                    </div>)

            })}
        </div>
    )
}

export default SubSegment