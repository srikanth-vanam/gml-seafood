import { NavLink } from "react-router-dom/cjs/react-router-dom";
import classes from "./Header.module.css";
import Button from "../UI/Button/Button";
// import mySvg from <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
const Header = () => {
  return (
    <>
      <header className={classes.outer}>
        <navbar className={classes.inner}>
          <div className={classes.logo}>
            <NavLink to="/">
            <img src={require("./gmlseafood-logo.png")} alt="sea-food logo" />
            </NavLink>
          </div>
          <div className={classes.nav_items}>
            <ul className={classes.ul}>
              <li>
                <NavLink to="/about" className={classes.navlink}>
                  AboutUs
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className={classes.navlink}>
                  Our Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={classes.navlink}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <div className={classes.icon}>
            <button onClick={() => console.log("clicked")}>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div> */}
        </navbar>
      </header>
    </>
  );
};

export default Header;
