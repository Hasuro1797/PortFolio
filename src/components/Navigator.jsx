import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../assets/images/imgProfile.JPG';
import { routes } from '../helpers/routes';

const Navigator = () => {
    return (
        <div className="navigator">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="avatar" />
                </div>  
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to={routes.home} exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={routes.about} exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={routes.projects} exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={routes.contact} exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-bottom">
                    <div className="language">
                        lenguajes
                    </div>
                    <footer className="footer">
                        <p>
                            @2021 Manuel Villarroel Bedregal
                        </p>
                        <p>
                            Todos los derechos reservados
                        </p>
                    </footer>
                </div>
            </nav>
        </div>
    )
}

export default Navigator
