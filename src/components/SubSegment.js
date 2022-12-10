import React from "react";

class SubSegment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="subSegment-container">
                {Object.keys(this.props.subSegmentInfo).map((key, index) => {
                    if (key === 'id' || !this.props.subSegmentInfo[key]) return null
                    return (
                        <div key={index} className={key+" subSegment-element"}>
                            <header className="subSegment-header">{key}</header>
                            <div className={this.props.subSegmentInfo[key] + " element-value"}>{this.props.subSegmentInfo[key]}</div>
                        </div>)

                })}
            </div>
        )
    }
}

export default SubSegment