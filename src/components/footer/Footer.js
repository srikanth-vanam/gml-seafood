import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../UI/Button/Button";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={classes.outer}>
        <div className={classes.img}>
          <div className={classes.content}>
            <div className={classes.content_top}>
              <div className={classes.left}>
                <h1>Hours of Operation</h1>
                <h4>MON - FRI</h4>
                <p>09:00 AM- 03:00 PM</p>
                <h4>SAT</h4>
                <p>09:00 AM- 03:00 PM</p>
                <h4>SUN</h4>
                <p>We are Closed!</p>
                <a href="https://wa.link/y97ixg" target="_blank">
                  <Button>WhatsApp Us</Button>
                </a>
              </div>
              <div className={classes.right}>
                <div className={classes.top}>
                  <h1>Drop us a line</h1>
                  <p>Don't be shy. Let us know if you have any questions!</p>
                  <NavLink to="/contact">
                    <Button>Enquire Now</Button>
                  </NavLink>
                </div>
                <div className={classes.bottom}>
                  <h1>Our Newsletter</h1>
                  <p>
                    Subscribe to our newsletter and stay up to date with the
                    market trends!
                  </p>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="email" placeholder="Email" />
                  <Button>Submit</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.copyright}>
            GML Seafood 2023 -- Built With Passion by{" "}
            <a href="https://themerakistudio.co" target="_blank" rel="noreferrer">
              <button>The Meraki Studio</button>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
