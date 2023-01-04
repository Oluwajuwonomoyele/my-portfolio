import { ProjectsSection, ProjectsContainer, ProjectsHeader, ProjectDesigns} from './Projects.styles';
import ProjectDesign from '../ProjectDesign';

const Projects = () => {
    return (  
        <ProjectsSection>
            <ProjectsContainer>
                <ProjectsHeader>
                    <div>
                        <h1>Some Designs I've Implemented</h1>
                        <h2>Selected</h2>
                    </div>
                    <div></div>
                </ProjectsHeader>

                <ProjectDesigns>
                    <ProjectDesign />
                </ProjectDesigns>

            </ProjectsContainer>
        </ProjectsSection>
    );
}
 
export default Projects;