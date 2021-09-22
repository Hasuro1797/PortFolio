import React from 'react'

const Categories = ({ filterProjects, categories }) => {
    return (
        <div className="buttons">
            {
                categories.map((category, index)=>(
                    <button 
                        className="btn-port"
                        type="button"
                        key={index}
                        onClick={ () => filterProjects(category)}
                        >
                        {category}
                    </button>
                ))
            }
        </div>
    )
}

export default Categories
