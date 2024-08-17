import { Link } from "react-router-dom";
import CustomLink from "../components/Components/CustomLink";
import ProductSlider from "../components/Sliders/ProductSlider";
import { products } from "../data";

export default function Error404() {
  return (
    <main className="main error__page">
      <section className="error__page-container">
        <h2 className="heading heading--section heading--dark">
          Oops((( Page not found
        </h2>
        <img
          src="/assets/images/404-error.gif"
          alt="not found"
          className="error__page-img"
        />
        <Link to={"/"} className="btn btn--primary">
          Go to main page
        </Link>
      </section>
      <section className="section section__products">
        <div className="top">
          <h2 className="heading heading--secondary">You may like</h2>
          <CustomLink text="Show all products" to="/shop" type="dark" />
        </div>
        <ProductSlider
          products={products.filter((el) => !el.discount).slice(0, 4)}
        />
      </section>
    </main>
  );
}
