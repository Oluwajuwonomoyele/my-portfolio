import { SkillsContainer, SkillsSection, SkillsHeader, SkillsContent, Skill } from "./Skills.styles";
import { FaHtml5 } from 'react-icons/fa'
import { ImCss3 } from 'react-icons/im'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss, SiJavascript, SiReact, SiTypescript, SiFirebase, SiJquery } from 'react-icons/si'

const Skills = () => {
    return (  
        <SkillsSection>
            <SkillsContainer>
                <SkillsHeader data-aos='fade-right' data-aos-delay='200'>
                    <div>
                        <h1>Languages/Technologies</h1>
                        <h2>Technologies</h2>
                    </div>
                    <div></div>
                </SkillsHeader>
                <SkillsContent>
                    <Skill data-aos='zoom-in'>
                        <FaHtml5 data-aos='flip-right' data-aos-delay='100'/>
                        <p>HTML</p>
                    </Skill>
                    <Skill data-aos='zoom-in' data-aos-delay='100'>
                        <ImCss3 data-aos='flip-right' data-aos-delay='200'/>
                        <p>CSS</p>
                    </Skill>
                    <Skill data-aos='zoom-in' data-aos-delay='200'>
                        <SiJavascript data-aos='flip-right' data-aos-delay='300'/>
                        <p>Javascript</p>
                    </Skill>
                    <Skill data-aos='zoom-in' data-aos-delay='300'>
                        <SiJquery data-aos='flip-right' data-aos-delay='400'/>
                        <p>Jquery</p>
                    </Skill>
                    <Skill data-aos='zoom-in' data-aos-delay='400'>
                        <SiReact data-aos='flip-right' data-aos-delay='500'/>
                        <p>React</p>
                    </Skill>
                    <Skill data-aos='zoom-in' data-aos-delay='500'>
                        <TbBrandNextjs data-aos='flip-right' data-aos-delay='600'/>
                        <p>NextJS</p>
                    </Skill>
                    <Skill data-aos='zoom-in' data-aos-delay='600'>
                        <SiTypescript data-aos='flip-right' data-aos-delay='700'/>
                        <p>Typescript</p>
                    </Skill>
                    <Skill data-aos='zoom-in' data-aos-delay='700'>
                        <SiTailwindcss data-aos='flip-right' data-aos-delay='800'/>
                        <p>TailwindCSS</p>
                    </Skill>
                    <Skill data-aos='zoom-in' data-aos-delay='800'>
                        <SiFirebase data-aos='flip-right' data-aos-delay='900'/>
                        <p>Firebase</p>
                    </Skill>
                </SkillsContent>
            </SkillsContainer>
        </SkillsSection>
    );
}
 
export default Skills;