import { useState } from "react";
import styles from "./ImageSlider.module.css";

interface SliderPropsTypes {
  images: string[];
}

export default function ImageSlider({ images }: SliderPropsTypes) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  return (
    <div className={styles["image-slider"]}>
      <div className={styles["view"]}>
        <img src={currentImage} className={styles["view-img"]} />
      </div>
      <div className={styles["slides-box"]}>
        <div className={styles.slides}>
          {images.map((img, i) => {
            return (
              <img
                src={img}
                className={`${
                  currentIndex === i
                    ? `${styles.slide} ${styles.current}`
                    : styles.slide
                }`}
                key={img}
                onClick={() => setCurrentIndex(i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
