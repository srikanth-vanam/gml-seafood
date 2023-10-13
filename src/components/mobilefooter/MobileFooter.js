import classes from "./MobileFooter.module.css";
const MoblileFooter = () => {
  return (
    <>
      <div className={classes.outer}>
        <img src={require("./gmlseafood-logo.png")} alt="sea food logo" />
        <div className={classes.content}>
          <p>©GML Seafood 2023</p>
          <p>Built With Passion by The Meraki Studio </p>
        </div>
      </div>
    </>
  );
};

export default MoblileFooter;
