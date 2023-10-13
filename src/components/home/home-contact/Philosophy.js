import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../UI/Button/Button";
import classes from "./Philosophy.module.css";
const Philosophy = () => {
  return (
    <>
      <section className={classes.contact}>
        <div className={classes.overlay_img}>
          <div className={classes.overlay}></div>
          <div className={classes.overlay_text}>
            <h4>OUR PHILOSOPHY</h4>
            <div className={classes.hLine}></div>
            <h1 className={classes.h1}>The Taste of Time</h1>
            <p>
              For GML Seafood, the journey of each fish is of paramount
              importance. Our stringent quality measures revolve around two core
              elements - TIME & TEMPERATURE. We firmly believe that seafood,
              fresh from the source and spending the least time out of water,
              retains its authentic flavor and quality.
            </p>
            <NavLink to="/contact">
              <Button className={classes.button}>Our Journey</Button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Philosophy;
