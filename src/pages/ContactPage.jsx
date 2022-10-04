import ContactItem from "../components/ContactItem";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import Title from "../components/Title";
const ContactPage = () => {
	return (
		<>
			<Title id="title.contact" text="Contact Me" />
			<div className="ContactPage">
				<div className="map-sect">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1913.1655744771863!2d-71.55612094163365!3d-16.458761515335574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spe!4v1664837858401!5m2!1sen!2spe"
						width="600"
						height="450"
						style={{ border: 0, borderRadius: "10px" }}
						allowFullScreen=""
						loading="lazy"
						title="location"
					></iframe>
				</div>
				<div className="contact-sect">
					<ContactItem
						icon={<MdLocalPhone />}
						text={"+54 1161491535"}
						idTitle="contact.phone"
						title="Phone"
					/>
					<ContactItem
						icon={<MdEmail />}
						text={"manuel17973433@gmail.com"}
						idTitle="contact.email"
						title="Email"
					/>
					<ContactItem
						icon={<HiLocationMarker />}
						text={
							"Upis Paisajista 0-9, Jacobo Hunter, Arequipa, Arequipa, Perú"
						}
						idTitle="contact.location"
						title="Location"
					/>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
