import classes from "./Home.module.css";
import Hero from "./hero/Hero";
import HomeAbout from "./home-About/HomeAbout";
import Philosophy from "./home-contact/Philosophy";
import Footer from "../footer/Footer";
import MoblileFooter from "../mobilefooter/MobileFooter";
import HomeProducts from "../products/homePageProduct/HomeProduct";
import Header from "../header/Header";
const Home = () => {
  return (
    <div className={classes.containerr}>
      <Header />
      <Hero />
      <HomeAbout />
      <HomeProducts />
      <Philosophy />
      <div className={classes.icon_div}>
        <div className={classes.content}>
          <div className={classes.icon}>
            <img src={require("./gmlseafood-icon1.png")} alt="" />
            <p>Freshly Netted</p>
          </div>
          <div className={classes.icon}>
            <img src={require("./gmlseafood-iconA2.png")} alt="" />
            <p>Frozen At Peak Freshness</p>
          </div>
          <div className={classes.icon}>
            <img src={require("./gmlseafood-icon3.png")} alt="" />
            <p>Delivered in 1-3 days</p>
          </div>
          <div className={classes.icon}>
            <img src={require("./gmlseafood-iconA3.png")} alt="" />
            <p>Bulk Excellence</p>
          </div>
        </div>
      </div>
      <Footer />
      <MoblileFooter />
    </div>
  );
};

export default Home;
