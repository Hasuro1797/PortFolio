import ContactItem from "../components/ContactItem"
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import {HiLocationMarker} from 'react-icons/hi';
import phone from '../assets/images/phone.png';
import email from '../assets/images/email.png';
import location from '../assets/images/location.png';
import Title from '../components/Title';
const ContactPage = () => {
    return (
        <>
            <Title id="title.contact" text="Contact Me"/>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.2181810389798!2d-58.43314694499732!3d-34.57334552043855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb597b0b41d5f%3A0xf57ae07f24099148!2sHuergo%20223%2C%20C1426BQC%20CABA!5e0!3m2!1ses-419!2sar!4v1632258750239!5m2!1ses-419!2sar" width="600" height="450" style={{ border:0,borderRadius:"10px" }}allowFullScreen="" loading="lazy" title="location"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem 
                        icon={<MdLocalPhone/>} 
                        image={phone}
                        idTitle="contact.phone"
                        title="Phone"
                        />
                    <ContactItem 
                        icon={<MdEmail/>}
                        image={email}
                        idTitle="contact.email"
                        title="Email"
                        />
                    <ContactItem 
                        icon={<HiLocationMarker/>}
                        image={location}
                        idTitle
                        title="Location"
                        />
                </div>
            </div>
        </>
        
    )
}

export default ContactPage
