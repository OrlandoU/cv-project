import React from "react";
import Segment from './Segment'
import '../styles/TemplateContainer.css'

class TemplateContainer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id='toBeResized' className="cv-template">
                <header>{(this.props.cvInfo[0].data[0]['First Name'] ? this.props.cvInfo[0].data[0]['First Name'] : ' ') + " " + (this.props.cvInfo[0].data[0]['Last Name'] ? this.props.cvInfo[0].data[0]['Last Name'] : ' ')}</header>
                <div className="main-segment-containers">
                    <div className="left-segment-container">
                        {this.props.cvInfo.map((section, index) =>
                            <Segment key={index} sectionInfo={section} left={true} />
                        )}
                    </div>
                    <div className="right-segment-container">
                        {this.props.cvInfo.map((section, index) =>
                            <Segment key={index} sectionInfo={section} left={false} />
                        )}
                    </div>
                </div>

            </div>
        )
    }
    
}

export default TemplateContainer