import { SkillsContainer, SkillsSection, SkillsHeader, SkillsContent, Skill } from "./Skills.styles";
import { FaHtml5 } from 'react-icons/fa'
import { ImCss3 } from 'react-icons/im'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss, SiJavascript, SiReact, SiTypescript, SiFirebase, SiJquery } from 'react-icons/si'

const Skills = () => {
    return (  
        <SkillsSection>
            <SkillsContainer>
                <SkillsHeader>
                    <div>
                        <h1>Languages/Technologies</h1>
                        <h2>Technologies</h2>
                    </div>
                    <div></div>
                </SkillsHeader>
                <SkillsContent>
                    <Skill>
                        <FaHtml5 />
                        <p>HTML</p>
                    </Skill>
                    <Skill>
                        <ImCss3 />
                        <p>CSS</p>
                    </Skill>
                    <Skill>
                        <SiJavascript />
                        <p>Javascript</p>
                    </Skill>
                    <Skill>
                        <SiJquery />
                        <p>Jquery</p>
                    </Skill>
                    <Skill>
                        <SiReact />
                        <p>React</p>
                    </Skill>
                    <Skill>
                        <TbBrandNextjs />
                        <p>NextJS</p>
                    </Skill>
                    <Skill>
                        <SiTypescript />
                        <p>Typescript</p>
                    </Skill>
                    <Skill>
                        <SiTailwindcss />
                        <p>TailwindCSS</p>
                    </Skill>
                    <Skill>
                        <SiFirebase />
                        <p>Firebase</p>
                    </Skill>
                </SkillsContent>
            </SkillsContainer>
        </SkillsSection>
    );
}
 
export default Skills;