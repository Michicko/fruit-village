import Categories from "../components/Components/Categories";
import Header from "../components/Layout/Header";
import Calendar from "../assets/icons/calendar.svg?react";
import { Link } from "react-router-dom";
import ProductSlider from "../components/Sliders/ProductSlider";
import CustomLink from "../components/Components/CustomLink";

export default function Home() {
  const slides = [
    {
      id: 1,
      description: "Additional discounts on seasonal fruits 15%",
      link: "",
      linkText: "",
      image: "slide-1.jpg",
      bg: "#055c93",
      btn: "",
    },
    {
      id: 2,
      description: "We are having a fruit box sale!",
      link: "/shop?category=fruit+boxes",
      linkText: "Choose box",
      image: "slide-2.jpg",
      bg: "#37900D",
      btn: "btn--hovered-green",
    },
    {
      id: 3,
      description: "Free shipping on orders over $29",
      link: "/shop",
      linkText: "Shop now",
      image: "slide-3.jpg",
      bg: "#eb7c44",
      btn: "btn--hovered-red",
    },
  ];

  const categories = [
    {
      id: 1,
      category: "Avocado",
      link: "/shop?category=avocado",
      image: "avocado.jpg",
    },
    {
      id: 2,
      category: "Pineapple",
      link: "/shop?category=pineapple",
      image: "pineapple.jpg",
    },
    {
      id: 3,
      category: "Watermelons and melons",
      link: "/shop?category=watermelons+and+melons",
      image: "melons.png",
    },
    {
      id: 4,
      category: "Mango",
      link: "/shop?category=mango",
      image: "mango.jpg",
    },
    {
      id: 5,
      category: "Citrus",
      link: "/shop?category=citrus",
      image: "citrus.jpg",
    },
    {
      id: 6,
      category: "Show all categories",
      link: "/shop",
      image: "all.jpg",
    },
  ];

  const products = [
    {
      id: "2bdy77h72782u289uj9",
      name: "pineapple premium",
      price: 5.99,
      stock: 5,
      image: "pine.PNG",
      slug: "pineapple-premium",
      quantity: "1 piece",
    },
    {
      id: "2bdy77h72782u289uj9",
      name: "pineapple premium",
      price: 5.99,
      stock: 5,
      image: "pine.PNG",
      slug: "pineapple-premium",
      quantity: "1 piece",
    },
    {
      id: "2cdy57h72782u289uj9",
      name: "persimon sharon",
      price: 4.99,
      stock: 5,
      image: "persi.PNG",
      slug: "persimon-sharon",
      quantity: "1 kg",
      discount: 23,
    },
    {
      id: "2dcr57h44782u289uj9",
      name: "mango royal",
      price: 9.99,
      stock: 5,
      image: "man.PNG",
      slug: "mango-royal",
      quantity: "1 piece",
    },
    {
      id: "2dcr57h44782u289uj9",
      name: "mango royal",
      price: 9.99,
      stock: 5,
      image: "man.PNG",
      slug: "mango-royal",
      quantity: "1 piece",
    },
    {
      id: "2dcr57h44782u289uj9",
      name: "mango royal",
      price: 9.99,
      stock: 5,
      image: "man.PNG",
      slug: "mango-royal",
      quantity: "1 piece",
    },
    {
      id: "2ccr47h24782u289uj9",
      name: "pitahaya yellow",
      price: 9.49,
      stock: 0,
      image: "pita.PNG",
      slug: "pitahaya-yellow",
      quantity: "1 piece",
      discount: 40,
    },
    {
      id: "2dcr57h44782u289uj9",
      name: "mango royal",
      price: 9.99,
      stock: 5,
      image: "man.PNG",
      slug: "mango-royal",
      quantity: "1 piece",
      discount: 15,
    },
    {
      id: "2ccr47h24782u289uj9",
      name: "pitahaya yellow",
      price: 9.49,
      stock: 0,
      image: "pita.PNG",
      slug: "pitahaya-yellow",
      quantity: "1 piece",
      discount: 40,
    },
  ];

  const fruitBox = {
    id: "2yhdud7683y8f",
    name: "box xs",
    image: "box-xs.PNG",
    size: "1.8 kg",
    description:
      "mango, ready to eat, young coconut, herring, rambutan 2pcs, kiwi gold, passion fruit 2pcs, grenadilla, lychee 100g.",
    price: 21.99,
    slug: "box-xs",
    discount: 25,
  };

  return (
    <>
      <Header slides={slides} />
      <main className="main">
        <section className="section">
          <Categories categories={categories} />
        </section>
        <section className="section section__promo">
          <h2 className="heading heading--section">
            Every 2 days we supply exotic fruits
          </h2>
          <div className="box">
            <p>Delivery every day</p>
            <Calendar className="icon" />
          </div>

          <Link
            to={"/shop"}
            className="btn btn--sm btn--light btn--hovered-blue"
            style={{ color: "#426FCB" }}
          >
            Choose fruit
          </Link>
        </section>
        <section className="section section__products">
          <div className="top">
            <h2 className="heading heading--secondary">Popular products</h2>
            <CustomLink text="Show all products" to="/shop" type="dark" />
          </div>
          <ProductSlider
            products={products.filter((el) => !el.discount).slice(0, 4)}
          />
        </section>
        <section className="section section__fruit-box">
          <div className="top">
            <h2 className="heading heading--section">
              Ready-made sets of fruits for a gift, yourself, friends and family
            </h2>
          </div>
          <div className="fruit-box">
            <img
              src={`/assets/images/${fruitBox.image}`}
              alt={fruitBox.name}
              className="fruit-box__img"
            />
            <div className="fruit-box__body">
              <h4 className="fruit-box__name">{fruitBox.name}</h4>
              <p className="fruit-box__size">{fruitBox.size}</p>
              <p className="fruit-box__description">{fruitBox.description}</p>
              <p className="fruit-box__price">${fruitBox.price}</p>
              <div className="box">
                <button className="btn btn--sm btn--light btn--hovered-green fruit-box__btn">
                  Buy
                </button>
                <CustomLink
                  text="Show all boxes"
                  to="/shop?category=fruit+box"
                  type="light"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section section__discounts">
          <div className="top">
            <h2 className="heading heading--secondary">Promotional offers</h2>
            <CustomLink text="Show all products" to="/shop" type="dark" />
          </div>
          <ProductSlider
            products={products.filter((el) => el.discount).slice(0, 4)}
          />
        </section>
        <section className="section section__infos">
          <div className="info">
            <p className="info__number">11</p>
            <div className="info__desc">
              For 11 years we have been delivering fresh fruit to consumers
            </div>
          </div>
          <div className="info">
            <p className="info__number">100+</p>
            <div className="info__desc">
              More than 100 items in assortment and more are added
            </div>
          </div>
          <div className="info">
            <p className="info__number">120+</p>
            <div className="info__desc">
              We cooperate with more than 100 suppliers from around the world
            </div>
          </div>
          <div className="info">
            <p className="info__number">1000+</p>
            <div className="info__desc">
              More than 1000 satisfied partners around the world
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
