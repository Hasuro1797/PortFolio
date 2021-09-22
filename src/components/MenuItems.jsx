import React from 'react'
import CardProject from './CardProject'

const MenuItems = ({ menu }) => {
    return (
        <div className="projects">
            {
                menu.map(project => (
                    <CardProject
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        linkG={project.linkG}
                        linkY={project.linkY}
                        iconG={project.iconG}
                        iconY={project.iconY}
                    />
                ))
            }
        </div>
    )
}

export default MenuItems
