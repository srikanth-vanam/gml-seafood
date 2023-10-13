import classes from "./ContactFooter.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
const ContactFooter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.outer}>
        <div className={classes.logo}>
          <img src={require("./gmlseafood-logo copy.png")} alt="logo" />
        </div>
        <div className={classes.nav_items}>
          <ul className={classes.ul}>
            <li>
              <NavLink to="/" className={classes.navlink}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={classes.navlink}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={classes.navlink}>
                PRODUCTS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.icon_div}>
          <span className={classes.icon}>
            <i class="fa-brands fa-facebook"></i>
          </span>
          <span className={classes.icon}>
            <i class="fa-brands fa-instagram"></i>
          </span>
          <span className={classes.icon}>
            <i class="fa-brands fa-linkedin"></i>
          </span>
        </div>
      </div>
      <div className={classes.hLine}></div>
      <div className={classes.last}>
        <p>© GML Seafood 2023</p>
        <p>Built With Passion by The Meraki Studio</p>
      </div>
    </div>
  );
};

export default ContactFooter;
