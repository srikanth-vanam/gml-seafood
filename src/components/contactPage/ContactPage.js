import ContactFooter from "./footer/ContactFooter";
import MoblileFooter from "../mobilefooter/MobileFooter";
import Contact from "./contact/Contact";
import ContactHero from "./home/ContactHero";
import Header from "../header/Header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <ContactHero />
      <Contact />
      <ContactFooter />
      <MoblileFooter />
    </>
  );
};

export default ContactPage;
