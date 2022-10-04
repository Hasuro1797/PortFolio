import React from "react";
import ImageSection from "../components/ImageSection";
import ServiceSection from "../components/ServiceSection";
import SkillSection from "../components/SkillSection";
import Title from "../components/Title";
import { MdDesktopMac, MdCode } from "react-icons/md";
import { ImDatabase } from "react-icons/im";

const AboutPage = () => {
	return (
		<div className="AboutPage">
			<Title id={"title.about"} text={"About Me"} />
			<ImageSection />
			<Title id={"title.skills"} text={"Skills"} />
			<div className="skillContainer">
				<SkillSection skill={"JavaScript"} progress={"100%"} />
				<SkillSection skill={"Python"} progress={"50%"} />
				<SkillSection skill={"React JS"} progress={"100%"} />
				<SkillSection skill={"Redux"} progress={"90%"} />
				<SkillSection skill={"HTML"} progress={"100%"} />
				<SkillSection skill={"CSS3"} progress={"100%"} />
				<SkillSection skill={"Git"} progress={"90%"} />
				<SkillSection skill={"Node JS"} progress={"90%"} />
				<SkillSection skill={"Express"} progress={"90%"} />
				<SkillSection skill={"PostGreSQL"} progress={"90%"} />
				<SkillSection skill={"Sequelize"} progress={"90%"} />
				<SkillSection skill={"Next Js"} progress={"90%"} />
				<SkillSection skill={"React Native"} progress={"70%"} />
			</div>
			<Title id={"title.services"} text={"Services"} />
			<div className="services-container">
				<ServiceSection
					Icon={<MdDesktopMac />}
					idTitle="services.web.design.title"
					textTitle="Web Design"
					idDescription="services.web.design.description"
					textDescription="Ui / ux design for the website with a unique look."
				/>
				<ServiceSection
					Icon={<MdCode />}
					idTitle="services.web.developer.title"
					textTitle="Web development"
					idDescription="services.web.developer.description"
					textDescription="Full Stack development with good performance and functionality."
				/>
				<ServiceSection
					Icon={<ImDatabase />}
					idTitle="services.database.title"
					textTitle="Data Base"
					idDescription="services.database.description"
					textDescription="Development with the back-end part and the database efficiently."
				/>
			</div>
		</div>
	);
};

export default AboutPage;
