import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

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
                    <h2>Hi There, I'm</h2>
                    <h1>Manuel Benjamin Villarroel Bedregal</h1>
                    <h3 className="hero-skills">
                        Developer <span ref={textRef}></span>
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
