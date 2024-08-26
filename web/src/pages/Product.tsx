import { useState } from "react";
import History from "../components/Components/History";
import LikeButton from "../components/Components/LikeButton";
import Strawberry from "./../assets/icons/strawberry.svg?react";
import Kiwi from "./../assets/icons/kiwi-2.svg?react";
import Grape from "./../assets/icons/grapes.svg?react";
import Purse from "./../assets/icons/purse.svg?react";
import DeliveryBox from "./../assets/icons/delivery-box.svg?react";
import { v4 as uuid } from "uuid";
import { products, reviews } from "../data";
import Review from "../components/Components/Review";
import Stars from "../components/Components/Stars";
import ArrowDown from "../assets/icons/arrow-down.svg?react";
import ProductSlider from "../components/Sliders/ProductSlider";
import CustomLink from "../components/Components/CustomLink";
import ReviewForm from "../components/Forms/ReviewForm";
import Switch from "../components/Components/Switch";

export default function Product() {
  const [index, setIndex] = useState(0);
  const [switchIndex, setSwitchIndex] = useState(0);

  const [isReviewFormShown, setIsReviewFormShown] = useState(false);

  const toggleReviewForm = () => {
    setIsReviewFormShown(!isReviewFormShown);
  };

  const images = [
    "pitahaya-white-1.png",
    "pitahaya-white-2.png",
    "pitahaya-white-3.png",
  ];

  const product = {
    id: "2bdy77h72782u289uj9",
    name: "pineapple premium",
    code: 1245,
    price: 5.99,
    stock: 5,
    image: "pineapple-premium.png",
    slug: "pineapple-premium",
    measurement: "piece",
  };

  return (
    <>
      <main className="main single-product__main">
        <History
          history={[
            {
              name: "Exotic fruits",
              link: "/sale?category=exotic+fruits",
            },
            {
              name: "Pitahaya white / Dragon fruit",
              link: "/sale/pitahaya-white-/-dragon-fruit",
            },
          ]}
        />

        <div className="single-product__container">
          <section className="section single-product__content">
            <div className="single-product__info">
              <h2 className="">Pitahaya white / Dragon fruit</h2>
              <div className="single-product__rating-box">
                <div className="ratings">
                  <Stars rating={5} />
                  <p className="text text--bold">5</p>
                </div>
                <p>
                  Product code:{" "}
                  <span className="single-product__code">1275</span>
                </p>
              </div>
            </div>
            <div className="single-product__img-box">
              <div className="single-product__img-view">
                <img
                  src={`/assets/images/${images[index]}`}
                  alt="Pitahaya white / Dragon fruit"
                  className="single-product__img"
                />
              </div>
              <div className="single-product__img-slider">
                <div className="single-product__img-slides">
                  {images.map((img, i) => {
                    return (
                      <img
                        src={`/assets/images/${img}`}
                        alt="Pitahaya white / Dragon fruit"
                        key={uuid()}
                        className={
                          index === i
                            ? "single-product__img-slide current"
                            : "single-product__img-slide"
                        }
                        onClick={() => setIndex(i)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="single-product__text-box">
              <div className="single-product__taste-box">
                <h3>Taste notes</h3>
                <div className="content">
                  <div className="taste">
                    <Strawberry className="icon icon--dark" />
                    <p>Strawberry</p>
                  </div>
                  <div className="taste">
                    <Kiwi className="icon icon--dark" />
                    <p>Kiwi</p>
                  </div>
                  <div className="taste">
                    <Grape className="icon icon--dark" />
                    <p>Grape</p>
                  </div>
                </div>
              </div>
              <div className="single-product__instruction-box">
                <div>
                  <Purse className="icon icon--primary" />
                  <h4>Payment</h4>
                </div>
                <ul className="instruct">
                  <li>To the courier upon receipt of the order</li>
                  <li>By card online Visa, MasterCard</li>
                </ul>
                <div>
                  <DeliveryBox className="icon icon--primary" />
                  <h4>Delivery</h4>
                </div>
                <ul className="instruct">
                  <li>
                    Fruit delivery by fruit village courier (min order amount
                    $29.9)
                  </li>
                  <li>Delivery service; UPS, SkyNet, FedEx</li>
                </ul>
              </div>
              {!product.stock && (
                <div className="single-product__waitlist-btn-box">
                  <p>
                    Join the waitlist to be emailed when this product becomes
                    available
                  </p>
                  <button className="btn btn--sm btn--secondary">
                    Join waitlist
                  </button>
                </div>
              )}
              <div className="single-product__price-box">
                <h4 className="single-product__price">$9.99</h4>
                <LikeButton isLiked={true} />
                <button
                  className="btn btn--sm btn--primary"
                  disabled={!product.stock}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
          <section className="section">
            <Switch
              switchIndex={switchIndex}
              setSwitchIndex={setSwitchIndex}
              switches={[
                "about",
                <>
                  reviews <span>({reviews.length})</span>
                </>,
              ]}
            />
            <div className="single-product__switch-views">
              <div
                className={
                  switchIndex === 0
                    ? "single-product__switch-view single-product__switch-view--current about"
                    : "single-product__switch-view about"
                }
              >
                <h3 className="heading heading--section">Pitahaya white</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatem perspiciatis blanditiis odit quas mollitia quasi,
                  sapiente modi dolorem culpa? Ex consequuntur officiis iusto
                  quo? Veritatis obcaecati adipisci, culpa dolores facilis
                  dolore earum iure unde ipsam ab necessitatibus fugiat
                  reiciendis!
                </p>
                <h3 className="heading heading--section">Regions</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatem perspiciatis blanditiis odit quas mollitia quasi,
                  sapiente modi dolorem culpa? Ex con.
                </p>
                <h3 className="heading heading--section">Flavors & Texture</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatem perspiciatis blanditiis odit quas mollitia quasi,
                  sapiente modi dolorem culpa? Ex con.
                </p>
                <h3 className="heading heading--section">Regions</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatem perspiciatis blanditiis odit quas mollitia quasi,
                  sapiente modi dolorem culpa? Ex con.
                </p>
                <h3 className="heading heading--section">Preparation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatem perspiciatis blanditiis odit quas mollitia quasi,
                  sapiente modi dolorem culpa? Ex con.
                </p>
              </div>
              <div
                className={
                  switchIndex === 1
                    ? "single-product__switch-view single-product__switch-view--current"
                    : "single-product__switch-view"
                }
              >
                <div className="single-product__btn-box">
                  <div className="single-product__review-intro">
                    <h3 className="heading heading--section">5.0</h3>
                    <Stars rating={5} size="xl" />
                    <p className="text">
                      <span>{reviews.length} </span>
                      reviews
                    </p>
                  </div>
                  <button
                    className="btn btn--sm btn--primary"
                    onClick={toggleReviewForm}
                  >
                    Write a Review
                  </button>
                </div>
                {isReviewFormShown && (
                  <div className="single-product__review-form-box">
                    <ReviewForm />
                  </div>
                )}
                <div className="single-product__reviews">
                  {reviews.map((review) => {
                    return <Review review={review} key={uuid()} />;
                  })}
                </div>
                <button className="single-product__review-btn">
                  <span>Show more</span>
                  <ArrowDown className="icon icon--sm" />
                </button>
              </div>
            </div>
          </section>
        </div>
        <section className="section section__products">
          <div className="top">
            <h2 className="heading heading--secondary">Popular products</h2>
            <CustomLink text="Show all products" to="/sale" type="dark" />
          </div>
          <ProductSlider
            products={products.filter((el) => !el.discount).slice(0, 4)}
          />
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
      </main>
    </>
  );
}
