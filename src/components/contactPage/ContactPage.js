import ContactFooter from "./footer/ContactFooter";
import MoblileFooter from "../mobilefooter/MobileFooter";
import Contact from "./contact/Contact";
import ContactHero from "./home/ContactHero";

const ContactPage = () => {
    return (  
    <>
    <ContactHero />
    <Contact />
    <ContactFooter />
    <MoblileFooter />
    </>);
}
 
export default ContactPage;