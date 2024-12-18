import Carousel from "../components/Carousel/Carousel";
import ProductSlider from "../components/Carousel/ProductSlider";
import Category from "../components/Category/Category";
import Fact from "../components/Fact/Fact";
import FruitBox from "../components/FruitBox/FruitBox";
import Product from "../components/Product/Product";
import Promo from "../components/Promo/Promo";
import SectionTop from "../components/SectionTop/SectionTop";
import Subscription from "../components/Subscription/Subscription";
import { catalogue, facts, fruitbox, products } from "../data";
import { v4 as uuid } from "uuid";

export default function Home() {
  const categories = [
    ...catalogue.filter((el) => el.image),
    {
      id: uuid(),
      name: "Show all categories",
      url: "/sale",
      image: "/images/show-all.jpg",
    },
  ];

  return (
    <>
      <header className="home-header">
        <Carousel />
      </header>
      <main>
        <section className="section">
          <div className="home-categories">
            {categories.map((category) => {
              return (
                <Category
                  name={category.name}
                  url={category.url}
                  image={category.image}
                  key={category.id}
                />
              );
            })}
          </div>
        </section>
        <section className="section section-promo section-with-bg">
          <Promo />
        </section>
        <section className="section padded-x">
          <SectionTop title="Popular products" />
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
        <section className="section section-fruitbox section-with-bg">
          <h2 className="secondary-heading light">
            Ready-made sets of fruits for a gift, yourself, friends and family
          </h2>
          <FruitBox fruitbox={fruitbox} showAll={true} />
        </section>
        <section className="section padded-x">
          <SectionTop title="Promotional products" />
          <ProductSlider>
            <div className="products">
              {products
                .filter((el) => el.discount > 0)
                .map((product) => {
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
        <section className="section section-facts section-with-bg">
          <div className="facts">
            {facts.map((fact) => {
              return <Fact key={fact.id} fact={fact} />;
            })}
          </div>
        </section>
        <section className="section section-subscription">
          <Subscription />
        </section>
      </main>
    </>
  );
}
