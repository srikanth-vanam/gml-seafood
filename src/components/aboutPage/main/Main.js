import classes from "./Main.module.css";
const Main = () => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.content}>
          <div className={classes.top}>
            <h4>OUR STORY</h4>
            <div className={classes.hLine}></div>
            <h1>Beneath The Surface</h1>
            <p>
              In 2016, when GML was established, it didn't simply set sail; it
              defined a novel trajectory for the seafood industry.
            </p>
            <p>
              Far from being just another seafood supplier, Grand Marine Life
              (GML) Seafood was conceived as a groundbreaker, revolutionizing
              the heart and soul of the seafood landscape.
            </p>
          </div>
          <div className={classes.bottom}>
            <h4>OUR MISSION</h4>
            <div className={classes.hLine}></div>
            <h1>A New Wave in Seafood</h1>
            <p>
              From our genesis, GML Seafood's singular mission has been not
              merely to satiate but to enrich—both palate and planet. For us,
              seafood transcends commodity status; it's a revered resource
              demanding our utmost care.
            </p>
          </div>
        </div>
        <div className={classes.dishes}>
            <div className={classes.dishes_images}>
                <div className={classes.imgs}>
                </div>
                <div className={classes.imgs1}>
                </div>
                <div className={classes.imgs2}>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Main;
