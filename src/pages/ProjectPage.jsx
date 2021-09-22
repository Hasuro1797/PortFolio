import React, { useState } from 'react';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import Title from '../components/Title';
import { projects } from '../helpers/projects';

const ProjectPage = () => {
    const [categories, setCategories] = useState(null);
    const [menu, setMenu] = useState(projects);
    return (
        <div className="ProjectPage">
            <div className="project-title">
                <Title span="Projects" title="Projects"/>
            </div>
            <div className="projets-data">
                <Categories/>
                <MenuItems menu={menu}/>
            </div>
        </div>
    )
}

export default ProjectPage
