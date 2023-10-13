import { NavLink } from "react-router-dom/cjs/react-router-dom";
import classes from "./HomeProduct.module.css";
import Button from "../../UI/Button/Button";
const HomeProducts = () => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.images}>
          <div className={classes.rowA}>
            <div className={`${classes.logoDiv} ${classes.one}`}></div>
            <div className={`${classes.textDiv}`}>
              <h1>Salmon</h1>
              <div className={classes.hLine}></div>
              <p>
                Known for its rich, buttery flavor and vibrant color, our Salmon
                serves as a luxurious yet wholesome addition to any culinary
                endeavor.
              </p>
            </div>
            <div className={`${classes.logoDiv} ${classes.two}`}></div>
          </div>
          <div className={classes.rowB}>
            <div className={`${classes.textDiv}`}>
              <h1>Snapper</h1>
              <div className={classes.hLine}></div>
              <p>
                Whether you're an avid seafood connoisseur or a casual diner,
                our selection of Snapper species brings you multiple flavors in
                one package.
              </p>
            </div>
            <div className={`${classes.logoDiv} ${classes.three}`}></div>
            <div className={`${classes.textDiv}`}>
              <h1>Yellow Tuna</h1>
              <div className={classes.hLine}></div>
              <p>
                Perfectly tender, impeccably fresh, and rich in flavor, our
                yellow tuna offers a sumptuous taste and a robust texture that's
                perfect for both sushi and cooked dishes.
              </p>
            </div>
          </div>
        </div>
          <NavLink to="/products" className={classes.btn_div}>
            <Button>View Products</Button>
          </NavLink>
      </div>
    </>
  );
};

export default HomeProducts;
