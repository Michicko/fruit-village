import styles from "./Carousel.module.css";
import { v4 as uuid } from "uuid";
import { CarouselControllerProps } from "../../constants";

export default function CarouselMobileController({
  data,
  current,
  setCurrent,
}: CarouselControllerProps) {
  return (
    <div className={styles["carousel-mobile-controllers"]}>
      {data.map((i) => {
        const key = uuid();
        return (
          <button
            key={key}
            className={`${styles["carousel-mobile-controller"]} ${
              current === i ? styles["current"] : ""
            }`}
            onClick={() => setCurrent(i)}
          ></button>
        );
      })}
    </div>
  );
}
