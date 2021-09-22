import React from 'react'

const ServiceSection = ({ Icon, title, text }) => {
    return (
        <div className="ServiceSection">
            <div className="service">
                <div className="service-content">
                    <div className = "icon-service">
                        {Icon}
                    </div>
                    <h5 className="s-title">
                        {title}
                    </h5>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
