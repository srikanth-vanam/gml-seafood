import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../UI/Button/Button";
import classes from "./ProductsAbout.module.css";
const ProductsAbout = () => {
  return (
    <>
      <section className={classes.about}>
        <div className={classes.about_content}>
          <h4>OUR PRODUCTS</h4>
          <div className={classes.hLine}></div>
          <h1 className={classes.h1}>The Pinnacle of Seafood Quality</h1>
          <p>
            Ethically sourced from the world's finest oceans, GML Seafood is
            setting a new benchmark in excellence through unwavering commitment
            to quality, trust, and global sustainability.
          </p>
          <br />
          <p>
            We boast a diverse product catalogue; showcased below are our best
            sellers For a broader selection, please contact us to request more
            products.
          </p>
          <NavLink to="/about">
            <Button>About Us</Button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default ProductsAbout;
