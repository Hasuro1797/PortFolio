import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../assets/images/imgProfile.JPG';
import { routes } from '../helpers/routes';
import spain from '../assets/images/spain.png'
import en from '../assets/images/united-kingdom.png';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../helpers/Provider';
const Navigator = ({setShowMenu}) => {
    const { setLanguage } = useContext(langContext)
    return (
        <div className="navigator">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="avatar" />
                </div>  
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink 
                            to={routes.home} exact 
                            activeClassName="active"
                            role="button"
                            onClick={ () => setShowMenu(false) }
                            >
                            <FormattedMessage
                                id={"navigator.home"}
                                defaultMessage="Home"
                            />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to={routes.about} exact 
                            activeClassName="active"
                            role="button"
                            onClick={ () => setShowMenu(false) }
                            >
                            <FormattedMessage
                                id="navigator.about"
                                defaultMessage="About"
                            />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to={routes.projects} exact 
                            activeClassName="active"
                            role="button"
                            onClick={ () => setShowMenu(false) }
                            >
                            <FormattedMessage
                                id="navigator.projects"
                                defaultMessage="Projects"
                            />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to={routes.contact} exact 
                            activeClassName="active"
                            role="button"
                            onClick={ () => setShowMenu(false) }
                            >
                        <FormattedMessage
                                id="navigator.contact"
                                defaultMessage="Contact"
                            />
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-bottom">
                    <div className="language">
                        <div className="flags">
                            <button
                                type="button"
                                onClick= { () => setLanguage('es-MX') }
                            >
                                <img src={spain} alt="es-flag"/>
                            </button>
                            <button
                                type="button"
                                onClick= { () => setLanguage('es-US') }
                            >
                                <img src={en} alt="en-flag"/>
                            </button>
                        </div>
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
