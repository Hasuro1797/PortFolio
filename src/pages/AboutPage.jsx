import React from 'react'
import ImageSection from '../components/ImageSection'
import ServiceSection from '../components/ServiceSection'
import SkillSection from '../components/SkillSection'
import Title from '../components/Title';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import { ImDatabase } from 'react-icons/im';

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={"About Me"} span={"About Me"}/>
            <ImageSection/>
            <Title title={"Skills"} span={"Skills"}/>
            <div className="skillContainer">
                <SkillSection skill={"JavaScript"} progress={"90%"}/>
                <SkillSection skill={"Python"} progress={"50%"}/>
                <SkillSection skill={"React JS"} progress={"90%"}/>
                <SkillSection skill={"Redux"} progress={"90%"}/>
                <SkillSection skill={"HTML"} progress={"90%"}/>
                <SkillSection skill={"CSS3"} progress={"90%"}/>
                <SkillSection skill={"Git"} progress={"90%"}/>
                <SkillSection skill={"Node JS"} progress={"80%"}/>
                <SkillSection skill={"Express"} progress={"80%"}/>
                <SkillSection skill={"PostGreSQL"} progress={"90%"}/>
                <SkillSection skill={"Sequelize"} progress={"90%"}/>
            </div>
            <Title title={"Services"} span={"Services"}/>
            <div className="services-container">
                <ServiceSection 
                    Icon={<MdDesktopMac/>}
                    title="Web Design"
                    text="I do ui/ux design for the website with a unique aspect."
                    />
                <ServiceSection 
                    Icon={<MdCode/>}
                    title="Web Developer"
                    text="I also develop the websites. I create a high performance website."
                    />
                <ServiceSection 
                    Icon={<ImDatabase/>}
                    title="Data Base"
                    text="I work with the back-end and database part efficiently."
                    />
            </div>
        </div>
    )
}

export default AboutPage
