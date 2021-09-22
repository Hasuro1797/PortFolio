import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

const HomePage = () => {

    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Front End','Back End', 'Full Stack','Designer' ] })
        return () => {
        }
    }, [])
    return (
        <div className="homePage">
            <div className="home-info">
                <header className="hero">
                    <h2>
                        <FormattedMessage
                            id="Home.greeting"
                            defaultMessage="Hi There, I'm"
                        />
                    </h2>
                    <div className="hero-name">
                        <h2 className="name">Manuel Benjamin</h2>
                        <h2 className="name"> Villarroel Bedregal</h2>
                    </div>
                    <h3 className="hero-skills">
                        <FormattedMessage
                                id="Home.profession"
                                defaultMessage="Developer "
                            /> 
                        <span ref={textRef}></span>
                    </h3>
                    <div className="icons">
                        <div className="icon">
                            <a href="https://github.com/Hasuro1797" target="_blank" rel="noreferrer">
                                <FaGithub className="github"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/manuel-villarroel/" target="_blank" rel="noreferrer">
                                <FaLinkedin className="ln"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://twitter.com/mvillarroel1797" target="_blank" rel="noreferrer">
                                <FaTwitter className="tw"/>
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default HomePage
