import classes from "./Hero.module.css";
import Button from "../../UI/Button/Button";

const Hero = () => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.img}>
          <div className={classes.overlay}></div>
          <div className={classes.hero_text}>
            <h1>Fresh from the Ocean's Hook</h1>
            <p>
              Discover the finest seafood sourced directly from the world's most
              passionate harvesters. GML Seafood bridges the gap between
              harvesters and your plate, ensuring quality over quantity, always.
            </p>
            <div className={classes.buttons}>
              <Button className={classes.view_btn}>View Selection</Button>
              <Button className={classes.about_btn}>About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
