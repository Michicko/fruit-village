import Button from "../../components/Button/Button";
import ProductSlider from "../../components/Carousel/ProductSlider";
import Product from "../../components/Product/Product";
import SectionTop from "../../components/SectionTop/SectionTop";
import { products } from "../../data";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={`${styles.notfound} padded-x`}>
      <div className={styles.box}>
        <h1>Oops((( Page not found</h1>
        <img
          src="/images/error-404.gif"
          alt="not found"
          className={styles["error-img"]}
        />
        <Button
          bg="#42c84f"
          color="#fcfff9"
          hoveredBg="#0d6494"
          hoveredColor="#fcfff9"
          text="Go to homepage"
          link="/"
        />
      </div>
      <section className="section">
        <SectionTop title="You may like" />
        <ProductSlider>
          <div className="products">
            {products.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  showDeleteBtn={false}
                />
              );
            })}
          </div>
        </ProductSlider>
      </section>
    </div>
  );
}
