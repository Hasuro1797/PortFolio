import React from 'react';
import { FormattedMessage } from 'react-intl';

const ContactItem = ({ icon, image, idTitle ,title }) => {
    return (
        <div className="ContactItem">
            <div className="contact">
                <div className="icon-contact">
                    {icon}
                </div>
                <div className="info-contact">
                    <h4>
                        <FormattedMessage
                            id={idTitle}
                            defaultMessage={title}
                        />
                    </h4>
                    <div className="image-contact">
                        <img src={image} alt={title} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactItem
