import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Button from "../../UI/Button/Button";
import classes from "./ProductPageProducts.module.css";
const ProductPageProducts = () => {
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
          <div className={classes.rowA}>
            <div className={`${classes.logoDiv} ${classes.four}`}></div>
            <div className={`${classes.textDiv}`}>
              <h1>Halibut</h1>
              <div className={classes.hLine}></div>
              <p>
                Known for its mild, sweet flavor and flaky texture, our Halibut
                ensures a gastronomic experience that is both delicate and
                satisfying.
              </p>
            </div>
            <div className={`${classes.logoDiv} ${classes.five}`}></div>
          </div>
          <div className={classes.rowB}>
            <div className={`${classes.textDiv}`}>
              <h1>Red Drum</h1>
              <div className={classes.hLine}></div>
              <p>
                A Southern favorite that boasts a mildly sweet and versatile
                taste. Ideal for grilling, frying, or baking. Red Drums
                complements an array of recipes.
              </p>
            </div>
            <div className={`${classes.logoDiv} ${classes.six}`}></div>
            <div className={`${classes.textDiv}`}>
              <h1>Dorado</h1>
              <div className={classes.hLine}></div>
              <p>
                A tropical delight celebrated for its vibrant colors and rich,
                succulent flavors. Whether grilled or baked, Dorado provides a
                taste journey to exotic culinary landscapes.
              </p>
            </div>
          </div>
        </div>
        <NavLink to="/contact" className={classes.btn_div}>
          <Button>Request a Quote</Button>
        </NavLink>
      </div>
    </>
  );
};

export default ProductPageProducts;
