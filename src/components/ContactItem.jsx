import React from 'react'

const ContactItem = ({ icon, image, text }) => {
    return (
        <div className="ContactItem">
            <div className="contact">
                <div className="icon-contact">
                    {icon}
                </div>
                <div className="info-contact">
                    <h4>
                        {text}
                    </h4>
                    <div className="image-contact">
                        <img src={image} alt={text} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactItem
