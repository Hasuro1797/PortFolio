/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const CardProject = ({ image, linkY, linkG, iconY, iconG, title }) => {
    return (
        <div className="CardProject">
            <div className="image-data">
                <img src={image} alt="" />
                <ul className="hover-items">
                    <li>
                        <a href={linkG} target="_blank" rel="noreferrer">
                            {iconG}
                        </a>
                    </li>
                    <li>
                        <a href={linkY} target="_blank" rel="noreferrer">
                            {iconY}
                        </a>
                    </li>
                </ul>
            </div>
            <h5>
                {title}
            </h5>
        </div>
    )
}

export default CardProject
