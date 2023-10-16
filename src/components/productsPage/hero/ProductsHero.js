import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Button from "../../UI/Button/Button";
import classes from "./ProductsHero.module.css";
const ProductsHero = () => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.img}>
          <div className={classes.overlay}></div>
          <div className={classes.hero_text}>
            <h1>Hauled from Sea's Bounty</h1>
            <p>
              Discover the finest seafood sourced directly from the world's most
              passionate harvesters. GML Seafood bridges the gap between
              harvesters and your plate, ensuring quality over quantity, always.
            </p>
            <div className={classes.buttons}>
              <NavLink to="/contact">
                <Button className={classes.view_btn}>Contact Us</Button>
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

export default ProductsHero;
