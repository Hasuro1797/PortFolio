import React, { useCallback, useState } from 'react';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import Title from '../components/Title';
import { projects } from '../helpers/projects';

const allCategories = ['All',...new Set(projects.map(project => project.category))]
const ProjectPage = () => {
    const [menu, setMenu] = useState(projects);

    const filterProjects = useCallback(
        (category) => {
            if(category === "All"){
                setMenu(projects)
                return;
            }
            const data = projects.filter(project => project.category === category);
            setMenu(data);   
        },[])
    
    return (
        <div className="ProjectPage">
            <div className="project-title">
                <Title id="navigator.projects" text="Projects"/>
            </div>
            <div className="projects-data">
                <Categories filterProjects={filterProjects} categories={allCategories}/>
                <MenuItems menu={menu}/>
            </div>
        </div>
    )
}

export default ProjectPage
