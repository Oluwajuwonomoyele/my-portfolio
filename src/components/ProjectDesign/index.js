import { ProjectDesignSection, ImgDiv, ContentDiv, Desc, Lang, Links } from './Design.styles';
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import todo from '../../assets/Todo app.png'

const ProjectDesign = () => {
    return (  
        <ProjectDesignSection>
            <ImgDiv>
                <img src={todo} />
            </ImgDiv>
            <ContentDiv>
                <div>
                    <h1>Featured Project</h1>
                    <h2>Crazy Project</h2>
                </div>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum impedit omnis nemo laborum minima repellat adipisci illo quos dolorem pariatur. Rerum possimus sapiente odio, voluptatem repellat repellendus dolorem harum quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, natus.</Desc>
                <Lang>ReactJS CSS Firebase</Lang>
                <Links>
                    <a href="#">
                        <FiGithub />
                    </a>
                    <a href="#">
                        <FiExternalLink />
                    </a>
                </Links>
            </ContentDiv>
        </ProjectDesignSection>
    );
}
 
export default ProjectDesign;