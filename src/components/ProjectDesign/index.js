import { ProjectDesignSection, ImgDiv, ContentDiv, Desc, LLDiv, Lang, Links } from './Design.styles';
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import todo from '../../assets/Todo app.png'

const ProjectDesign = () => {
    return (  
        <ProjectDesignSection>
            <ImgDiv imgStart={false}>
                <img src={todo} />
            </ImgDiv>
            <ContentDiv imgStart={false}>
                <div>
                    <h1>Featured Project</h1>
                    <h2>Crazy Project</h2>
                </div>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum impedit omnis nemo laborum minima repellat adipisci illo quos dolorem pariatur. Rerum possimus sapiente odio, voluptatem repellat repellendus dolorem harum quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, natus.</Desc>
                <LLDiv>
                    <Lang imgStart={false}><p>ReactJS</p> <p>CSS</p> <p>Firebase</p></Lang>
                    <Links imgStart={false}>
                        <a href="#">
                            <FiGithub />
                        </a>
                        <a href="#">
                            <FiExternalLink />
                        </a>
                    </Links>
                </LLDiv>
            </ContentDiv>
        </ProjectDesignSection>
    );
}
 
export default ProjectDesign;