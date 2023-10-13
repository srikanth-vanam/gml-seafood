import AboutPage from "./components/aboutPage/AboutPage";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import ProductsPage from "./components/productsPage/ProductsPage";
import ContactPage from "./components/contactPage/ContactPage";
function App() {
  return (
    <>
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/contact">
      <ContactPage />
      </Route>
    </>
  );
}

export default App;
