import Button from "../../UI/Button/Button";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.left}>
          <h4>CONTACT US</h4>
          <div className={classes.hLine}></div>
          <h1 className={classes.h1}>Get in Touch</h1>
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Business Name (Optional)"/>
          <input type="email" placeholder="Email Address"/>
          <input type="number" placeholder="Phone Number"/>
          <textarea placeholder="Message (Optional)"  cols="30" rows="10" className={classes.input}></textarea>
          <Button>Submit</Button>
        </div>

        <div className={classes.right}></div>
      </div>
    </>
  );
};

export default Contact;
