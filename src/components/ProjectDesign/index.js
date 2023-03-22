import { ProjectDesignSection, ImgDiv, ContentDiv, Desc, LLDiv, Lang, Links } from './ProjectDesign.styles';
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectDesign = ({project}) => {
    return (  
        <ProjectDesignSection data-aos='fade-up'>
            <ImgDiv imgStart={project.imgStart}>
                <img src={project.img} alt='project' loading='lazy'/>
            </ImgDiv>
            <ContentDiv imgStart={project.imgStart}>
                <div data-aos='fade-up' data-aos-delay='100'>
                    <h1>Featured Project</h1>
                    <h2>{project.projectName}</h2>
                </div>
                <Desc data-aos='fade-up' data-aos-delay='200'>{project.description}</Desc>
                <LLDiv>
                    <Lang imgStart={project.imgStart} data-aos='fade-up' data-aos-delay='300'>{project.langs.map((lang, index) => {
                        return (
                            <p key={index}>{lang}</p>
                        )})}</Lang>
                    <Links imgStart={project.imgStart}>
                        <a href={project.githubLink} target='_blank' rel="noreferrer" aria-label={project.ariaLabelGit} data-aos='fade-up' data-aos-delay='400'>
                            <FiGithub />
                        </a>
                        <a href={project.externalLink} target='_blank' rel="noreferrer" aria-label={project.ariaLabelExt} data-aos='fade-up' data-aos-delay='500'>
                            <FiExternalLink />
                        </a>
                    </Links>
                </LLDiv>
            </ContentDiv>
        </ProjectDesignSection>
    );
}
 
export default ProjectDesign;