import Footer from "../footer/Footer";
import MoblileFooter from "../mobilefooter/MobileFooter";
import ProductPageProducts from "../products/productsPageProduct/ProductPageProducts";
import ProductsAbout from "./about/ProductsAbout";
import ProductsHero from "./hero/ProductsHero";

const ProductsPage = () => {
  return (
    <>
      <ProductsHero />
      <ProductsAbout />
      <ProductPageProducts />
      <Footer />
      <MoblileFooter />
    </>
  );
};

export default ProductsPage;
