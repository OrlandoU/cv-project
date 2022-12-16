import Section from "./Section";
import sectionTemplates from "../objects/sectionTemplates";
import '../styles/Builder.css'

function Builder(props) {
    return (
        <div className="builder-container">
            <div className="builder-header">OnePageCV</div>
            {sectionTemplates.map(section => {
                return (
                    <Section key={section.section} section={section} {...props} />
                )
            })}
        </div>
    )
}

export default Builder