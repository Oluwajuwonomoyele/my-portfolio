import { ProjectsSection, ProjectsContainer, ProjectsHeader, ProjectDesigns} from './Projects.styles';
import ProjectDesign from '../ProjectDesign';
import ProjectData from '../../ProjectsData';

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
                    {ProjectData.map(project => {
                        return (
                        <ProjectDesign project={project} key={project.id}/>
                    )})}
                </ProjectDesigns>

            </ProjectsContainer>
        </ProjectsSection>
    );
}
 
export default Projects;