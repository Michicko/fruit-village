import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Carousel.module.css";
import CarouselMobileController from "./CarouselMobileController";
import CarouselController from "./CarouselController";
import { v4 as uuid } from "uuid";

const data = [
  {
    id: uuid(),
    title: "We are having a fruit box",
    catchPhrase: "sale!",
    catchPhraseColor: "yellow",
    image: "/images/carousel-img-1.jpg",
    url: "/sale?category=fruit+box",
    boxBg: "#37900d",
    btnText: "Choose box",
    btnBg: "#fcfff9",
    btnColor: "#386d15",
    btnHoveredBg: "#e3f7e5",
    btnHoveredColor: "#386d15",
    showBtn: true,
  },
  {
    id: uuid(),
    title: "Additional discount on seasonal fruits",
    catchPhrase: "15%",
    catchPhraseColor: "",
    image: "/images/carousel-img-2.jpg",
    boxBg: "#0d6494",
    showBtn: false,
  },
  {
    id: uuid(),
    title: "Free shipping on orders over",
    catchPhrase: "$29",
    catchPhraseColor: "",
    image: "/images/carousel-img-3.jpg",
    url: "/sale",
    boxBg: "#d97442",
    btnText: "Shop now",
    btnBg: "#fcfff9",
    btnColor: "#d97442",
    btnHoveredBg: "#f9eae3",
    btnHoveredColor: "#d97442",
    showBtn: true,
  },
];

const signals = data.map((_, i) => i);

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const currentData = data[current];

  return (
    <div className={styles.carousel}>
      <div className={styles.left} style={{ background: currentData.boxBg }}>
        <h1 className={styles.heading}>
          {currentData.title}
          <span
            style={{
              color: currentData.catchPhraseColor
                ? currentData.catchPhraseColor
                : "#fcfff9",
            }}
          >
            {currentData.catchPhrase}
          </span>
        </h1>
        {currentData.showBtn && (
          <Button
            text={currentData.btnText}
            bg={currentData.btnBg}
            color={currentData.btnColor}
            link={currentData.url}
            hoveredBg={currentData.btnHoveredBg}
            hoveredColor={currentData.btnHoveredColor}
          />
        )}
        <CarouselController
          data={signals}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
      <div className={styles.right}>
        <img
          src={currentData.image}
          alt={currentData.title}
          className={styles["carousel-img"]}
        />
      </div>
      <CarouselMobileController
        data={signals}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
}
