import React from 'react'
import { FormattedMessage } from 'react-intl'

const ServiceSection = ({ Icon, idTitle, textTitle, idDescription, textDescription}) => {
    return (
        <div className="ServiceSection">
            <div className="service">
                <div className="service-content">
                    <div className = "icon-service">
                        {Icon}
                    </div>
                    <h5 className="s-title">
                        <FormattedMessage
                            id={idTitle}
                            defaultMessage={textTitle}
                        />
                    </h5>
                    <p className="s-text">
                        <FormattedMessage
                            id={idDescription}
                            defaultMessage={textDescription}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
