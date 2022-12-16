import React from "react";
import Segment from './Segment'
import '../styles/TemplateContainer.css'

function TemplateContainer(props) {
    
    return (
        <div id='toBeResized' className="cv-template">
            <header>{(props.cvInfo[0].data[0]['First Name'] ? props.cvInfo[0].data[0]['First Name'] : ' ') + " " + (props.cvInfo[0].data[0]['Last Name'] ? props.cvInfo[0].data[0]['Last Name'] : ' ')}</header>
            <div className="main-segment-containers">
                <div className="left-segment-container">
                    {props.cvInfo.map((section, index) =>
                        <Segment key={index} sectionInfo={section} left={true} />
                    )}
                </div>
                <div className="right-segment-container">
                    {props.cvInfo.map((section, index) =>
                        <Segment key={index} sectionInfo={section} left={false} />
                    )}
                </div>
            </div>

        </div>
    )

}

export default TemplateContainer