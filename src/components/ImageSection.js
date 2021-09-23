import React, { useEffect, useRef } from 'react';
import about from '../assets/images/imgProfile.JPG';
import { init } from 'ityped';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../helpers/Provider';
import { useContext } from 'react';

const ImageSection = () => {
    const textRef = useRef();
    const { locale } = useContext(langContext);
    console.log(locale);
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Manuel Villarroel','responsable', 'persevering','creative','collaborative' ] })
    }, [])
    return (
        <div className="ImageSection">
            <div className="image">
                <img src={about} alt="about-profile"/>
            </div>
            <div className="about-info">
                <h4>
                    <FormattedMessage
                        id="About.start"
                        defaultMessage="I'm "
                    /> 
                    <span ref={textRef}></span>
                </h4>
                <p>
                    <FormattedMessage
                        id="About.introduction"
                        defaultMessage="I love video games and technology. I am currently focused on full stack web development. I am studying Computer Engineering and I would love to learn new technologies to exploit them. This year I got a Full Stack Developer Certification. I would love to share my skills with you and I hope you enjoy this visit to my profile. Welcome !!!"
                    />
                </p>
                <div className="button-container">
                    {
                        locale === 'es-MX' ? 
                        <a href="https://drive.google.com/uc?export=download&id=1MCRtQEEZCuhaezj8ixbScS8bDViV4VWN" download="CV-profesional">
                            <button className="btn">Descargar CV</button>
                        </a>
                        :
                        <a href="https://drive.google.com/uc?export=download&id=1YUN-gkadQ5p3UVdrz-3Pdfisosvge-KA" download="CV-profesional">
                            <button className="btn">DownLoad CV</button>
                        </a>
                    }
                    
                    
                </div>
            </div>
        </div>
    )
}

export default ImageSection
