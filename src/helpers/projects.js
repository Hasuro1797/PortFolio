import { FaGithub, FaYoutube } from "react-icons/fa";
import project1 from "../assets/images/landing-images.JPG";
import project2 from "../assets/images/landing-consultace.png";
import construcion from "../assets/images/construcion.jpg";
import project3 from "../assets/images/CRUDHome.JPG";
import project4 from "../assets/images/CapturaActor.JPG";

export const projects = [
	{
		id: 1,
		category: "Full Stack",
		linkG: "https://github.com/Hasuro1797/AppVideogames",
		linkY: "https://youtu.be/smDUpSEryyY",
		iconG: <FaGithub />,
		iconY: <FaYoutube />,
		image: project1,
		title: "WoW Videogames",
	},
	{
		id: 2,
		category: "Full Stack",
		linkG: "https://github.com/RodrigoToledo5/ConsultanceSpace",
		linkY:
			"https://www.youtube.com/watch?v=lk7HXFEFXrc&ab_channel=RodrigoToledo",
		iconG: <FaGithub />,
		iconY: <FaYoutube />,
		image: project2,
		title: "Consultance Space",
	},
	{
		id: 3,
		category: "Full Stack",
		linkG: "https://github.com/Hasuro1797/TestEvo",
		linkY: "https://youtu.be/eCy1Ep3ZEjA",
		iconG: <FaGithub />,
		iconY: <FaYoutube />,
		image: project3,
		title: "CRUD Feeds",
	},
	{
		id: 4,
		category: "Front End",
		linkG: "https://github.com",
		linkY: "https://youtu.be/QNsEWnLUlgw",
		iconG: <FaGithub />,
		iconY: <FaYoutube />,
		image: project4,
		title: "coming soon",
	},
	{
		id: 5,
		category: "Front End",
		linkG: "https://github.com",
		linkY: "https://youtube.com",
		iconG: <FaGithub />,
		iconY: <FaYoutube />,
		image: construcion,
		title: "coming soon",
	},
	{
		id: 6,
		category: "Back End",
		linkG: "https://github.com",
		linkY: "https://youtube.com",
		iconG: <FaGithub />,
		iconY: <FaYoutube />,
		image: construcion,
		title: "coming soon",
	},
];
