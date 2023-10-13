import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../UI/Button/Button";
import classes from "./HomeAbout.module.css";
const HomeAbout = () => {
  return (
    <>
      <section className={classes.about}>
        <div className={classes.about_content}>
          <h4>OUR STORY</h4>
          <div className={classes.hLine}></div>
          <h1 className={classes.h1}>Navigating Our Journey</h1>
          <p>
            Founded in Mauritius in 2016, Grand Marine Life (GML) Seafood aims
            to revolutionize the seafood industry. We pride ourselves on
            offering a wide range of products, with a strong emphasis on
            building global customer trust and transparency. Discover our best
            sellers below.
          </p>
        <NavLink to="/about">
          <Button>About Us</Button>
        </NavLink>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
