import Categories from "../components/Components/Categories";
import Header from "../components/Layout/Header";
import Calendar from "../assets/icons/calendar.svg?react";
import { Link } from "react-router-dom";
import ProductSlider from "../components/Sliders/ProductSlider";
import CustomLink from "../components/Components/CustomLink";
import { v4 as uuid } from "uuid";
import Stat from "../components/Components/Stat";
import FruitBox from "../components/Components/FruitBox";
import NewsLetter from "../components/Components/NewsLetter";
import { categories, products } from "../data";

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
      link: "/sale?category=fruit+boxes",
      linkText: "Choose box",
      image: "slide-2.jpg",
      bg: "#37900D",
      btn: "btn--hovered-green",
    },
    {
      id: 3,
      description: "Free shipping on orders over $29",
      link: "/sale",
      linkText: "Sale now",
      image: "slide-3.jpg",
      bg: "#eb7c44",
      btn: "btn--hovered-red",
    },
  ];

  const fruitBox = {
    id: "2yhdud7683y8f",
    name: "box xs",
    image: "fruit-box.png",
    size: "1.8 kg",
    description:
      "mango, ready to eat, young coconut, herring, rambutan 2pcs, kiwi gold, passion fruit 2pcs, grenadilla, lychee 100g.",
    price: 21.99,
    slug: "box-xs",
    discount: 25,
  };

  const stats = [
    {
      number: "11",
      description:
        "For 11 years we have been delivering fresh fruit to consumers",
    },
    {
      number: "100+",
      description: " More than 100 items in assortment and more are added",
    },
    {
      number: "120+",
      description:
        "We cooperate with more than 100 suppliers from around the world",
    },
    {
      number: "1000+",
      description: "More than 1000 satisfied partners around the world",
    },
  ];

  return (
    <>
      <Header slides={slides} />
      <main className="main">
        <section className="section">
          <Categories categories={categories} />
        </section>
        <section className="section section__promo">
          <div className="text-box">
            <h2 className="heading heading--light heading--tiny heading--big">
              Every 2 days we supply exotic fruits
            </h2>
            <div className="box">
              <p>Delivery every day</p>
              <Calendar className="icon" />
            </div>
            <div className="link-box">
              <Link
                to={"/sale"}
                className="btn btn--sm btn--light btn--hovered-blue"
                style={{ color: "#426FCB" }}
              >
                Choose fruit
              </Link>
            </div>
          </div>
          <img
            src="/assets/images/delivery.png"
            alt="delivery guy"
            className="promo-img"
          />
        </section>
        <section className="section section__products">
          <div className="top">
            <h2 className="heading heading--secondary">Popular products</h2>
            <CustomLink text="Show all products" to="/sale" type="dark" />
          </div>
          <ProductSlider
            products={products.filter((el) => !el.discount).slice(0, 4)}
          />
        </section>
        <section className="section section__fruit-box">
          <div className="top">
            <h2 className="heading heading--light heading--tiny heading--big">
              Ready-made sets of fruits for a gift, yourself, friends and family
            </h2>
          </div>
          <FruitBox fruitBox={fruitBox} />
        </section>
        <section className="section section__discounts">
          <div className="top">
            <h2 className="heading heading--secondary">Promotional offers</h2>
            <CustomLink text="Show all products" to="/sale" type="dark" />
          </div>
          <ProductSlider
            products={products.filter((el) => el.discount).slice(0, 4)}
          />
        </section>
        <section className="section section__stats">
          {stats.map((stat) => {
            return (
              <Stat
                number={stat.number}
                description={stat.description}
                key={uuid()}
              />
            );
          })}
        </section>
        <section className="section section__newsletter">
          <h2 className="heading heading--secondary">Get a 7% discount</h2>
          <NewsLetter />
          <p>
            By subscribing to our newsletter you are agreeing to our{" "}
            <span className="underline">Data protection statement</span>
          </p>
        </section>
      </main>
    </>
  );
}
