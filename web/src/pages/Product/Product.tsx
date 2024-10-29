import Favorite from "../../components/Favorite/Favorite";
import Price from "../../components/Price/Price";
import ProductBtn from "../../components/Product/ProductBtn";
import RatingNumber from "../../components/Ratings/RatingNumber";
import Stars from "../../components/Ratings/Stars";
import ImageSlider from "../../components/Slider/ImageSlider";
import styles from "./Product.module.css";
import Wallet from "../../assets/icons/wallet.svg?react";
import { useState } from "react";
import ProductAbout from "../../components/Product/ProductAbout";
import ProductReviews from "../../components/Product/ProductReviews";
import ProductSectionSelector from "../../components/ProductSectionSelector/ProductSectionSelector";

export default function Product() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const switchSection = (index: number) => {
    setCurrentSectionIndex(index);
  };

  const product = {
    id: "9c4a1127-0687-4e09-a398-84895dc84053",
    name: "Pineapple premium",
    image: "/images/pineapple.png",
    category: "pineapple",
    price: 5.99,
    isFavorite: true,
    discount: 0,
    stock: 5,
    measurement: "piece",
    slug: "pineapple-premium",
    size: 1,
    code: 1224,
    ratingsAverage: 4.6,
    images: [
      "/images/pitahaya-white-1.png",
      "/images/pitahaya-white-2.png",
      "/images/pitahaya-white-3.png",
    ],
    tasteNotes:
      "subtle sweet flavor with notes of berry, pear, kiwi, and watermelon, sometimes with just a hint of sourness",
    about: [
      {
        id: "djndd",
        title: "Pitahaya white",
        text: "The dragon frut is actually a specie of cactus which is indegenous to the americas. It is classified within the broad category of pitaya or pitahaya which also belong to the family Cactaceae. Dragon fruit fruits are a distinct category of pitaya or pitahaya known as sweet pitaya and they are different compare to sour pitaya variety both in taste and texture. Sweet pitaya come in three types known as white-fleshed pitaya, red fleshed pitaya and yellow pitaya. The white fleshed pitaya (Selenicereus undatus) is the most cultivated pitaya species.",
      },
      {
        id: "hyuyuuid",
        title: "Regions",
        text: "The white fleshed pitaya is indegenous to the americas. It is widely cultivated in tropical and subtropical regions and also the most dragon fruit, is cultivated in Australia, South California, Florida, Caribbean, and in Southeast Asia.",
      },
      {
        id: "dnuomks",
        title: "Flavour & Texture",
        text: "The white fleshed pitaya has a delicately sweet and lingering flavour and is considered gourmets' delight. The flesh is juicy, firm and crisp and it can be used in marmalades soft drinks and smoothies.",
      },
      {
        id: "syuidhu",
        title: "Preparation",
        text: "Slice it in half and then scoop out the slightly firm flesh with a spoon and eat it right out of the shell or carefully use a sharp spoon to cut and remove the flesh from the skin. Then slice or cut it any way you like.",
      },
    ],
  };

  return (
    <main className={styles.main}>
      <div className={styles["box-1"]}>
        <h1>{product.name}</h1>
        <div className={styles.flex}>
          <Stars value={product.ratingsAverage} size="md" />
          <RatingNumber value={product.ratingsAverage} size="md" />
        </div>
        <div className={styles.flex}>
          <p>Product code: </p>
          <p className={styles.code}>{product.code}</p>
        </div>
      </div>

      <ImageSlider images={product.images} />

      <div className={styles["box-2"]}>
        <Price discount={product.discount} price={product.price} size="xl" />
        <Favorite product={product} size="lg" />
        <ProductBtn product={product} />
      </div>

      <div className={styles["box-3"]}>
        <h3>Taste notes</h3>
        <p>{product.tasteNotes}</p>
      </div>

      <div className={styles["box-4"]}>
        <div className={styles.info}>
          <div className={styles["icon-box"]}>
            <Wallet className="icon md green" />
            <h3>Payment</h3>
          </div>
          <ul>
            <li className={styles["info-text"]}>
              To the courier upon receipt of the order
            </li>
            <li className={styles["info-text"]}>
              By card online Visa, MasterCard
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <div className={styles["icon-box"]}>
            <Wallet className="icon md green" />
            <h3>Delivery</h3>
          </div>
          <ul>
            <li className={styles["info-text"]}>
              Free delivery by Fruit village courier service (min, order amount:
              $29.99)
            </li>
            <li className={styles["info-text"]}>
              Delivery service UPS, SkyNet, FedEx
            </li>
          </ul>
        </div>
      </div>

      <div className={styles["box-5"]}>
        <div className={styles.selectors}>
          <ProductSectionSelector
            text="About"
            handleOnClick={switchSection}
            index={0}
            currentIndex={currentSectionIndex}
          />
          <ProductSectionSelector
            text="Reviews"
            handleOnClick={switchSection}
            index={1}
            currentIndex={currentSectionIndex}
          />
        </div>
        {currentSectionIndex === 0 ? (
          <ProductAbout sections={product.about} />
        ) : (
          <ProductReviews ratingsAverage={product.ratingsAverage} reviews={12} />
        )}
      </div>
    </main>
  );
}
