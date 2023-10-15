import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../UI/Button/Button";
import classes from "./ContactHero.module.css";
const ContactHero = () => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.img}>
          <div className={classes.overlay}></div>
          <div className={classes.hero_text}>
            <h1>Hail the Helmsmen</h1>
            <p>
              Chart Your Course to Culinary Bliss with GML Seafood — Drop Your
              Anchor Here for a Compassionate and Transparent Dialogue that
              Redefines Customer Interaction
            </p>
            <div className={classes.buttons}>
              <NavLink to="/products">
                <Button className={classes.view_btn}>View Selection</Button>
              </NavLink>
              <NavLink to="/about">
                <Button className={classes.about_btn}>About Us</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
