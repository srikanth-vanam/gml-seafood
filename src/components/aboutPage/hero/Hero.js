import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Hero.module.css";
import Button from "../../UI/Button/Button";
const Hero = () => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.img}>
          <div className={classes.overlay}></div>
          <div className={classes.hero_text}>
            <h1>Beyond the Catch</h1>
            <p>
              Our vision transcends beyond just delivering premium seafood.
              We're here to shift perspectives. Our rigorous selection process
              ensures that each of our harvesters holds the values of
              sustainable and responsible fishing.
            </p>
            <div className={classes.buttons}>
              <NavLink to="/products">
                <Button className={classes.view_btn}>View Selection</Button>
              </NavLink>
              <NavLink to="/contact">
                <Button className={classes.about_btn}>Contact Us</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
