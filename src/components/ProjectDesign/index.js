import { ProjectDesignSection, ImgDiv, ContentDiv, Desc, LLDiv, Lang, Links } from './ProjectDesign.styles';
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectDesign = ({project}) => {
    return (  
        <ProjectDesignSection>
            <ImgDiv imgStart={project.imgStart}>
                <img src={project.img} alt='project'/>
            </ImgDiv>
            <ContentDiv imgStart={project.imgStart}>
                <div>
                    <h1>Featured Project</h1>
                    <h2>{project.projectName}</h2>
                </div>
                <Desc>{project.description}</Desc>
                <LLDiv>
                    <Lang imgStart={project.imgStart}>{project.langs.map((lang, index) => {
                        return (
                            <p key={index}>{lang}</p>
                        )})}</Lang>
                    <Links imgStart={project.imgStart}>
                        <a href={project.githubLink} target='_blank' rel="noreferrer">
                            <FiGithub />
                        </a>
                        <a href={project.externalLink} target='_blank' rel="noreferrer">
                            <FiExternalLink />
                        </a>
                    </Links>
                </LLDiv>
            </ContentDiv>
        </ProjectDesignSection>
    );
}
 
export default ProjectDesign;