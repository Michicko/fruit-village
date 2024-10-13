import { CarouselControllerProps } from "../../constants";
import styles from "./Carousel.module.css";
import ArrowLeft from "../../assets/icons/arrow-thin-left.svg?react";
import ArrowRight from "../../assets/icons/arrow-thin-right.svg?react";
import { v4 as uuid } from "uuid";
import { useCallback, useEffect, useRef } from "react";

export default function CarouselController({
  data,
  current,
  setCurrent,
}: CarouselControllerProps) {
  const interval = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    let next = current + 1;
    if (next > data.length - 1) {
      next = 0;
    }
    setCurrent(next);
  }, [current, data.length, setCurrent]);

  const prevSlide = useCallback(() => {
    let prev = current - 1;
    if (prev < 0) {
      prev = data.length - 1;
    }
    setCurrent(prev);
  }, [current, data.length, setCurrent]);

  useEffect(() => {
    interval.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, [nextSlide]);

  return (
    <div className={styles["carousel-controllers"]}>
      <button className={styles["carousel-controller"]} onClick={prevSlide}>
        <ArrowLeft className={`${styles.icon} icon lg`} />
      </button>
      <div className={styles.signals}>
        {data.map((i) => {
          const key = uuid();
          return (
            <button
              key={key}
              className={`${styles.signal} ${
                current === i ? styles.current : ""
              }`}
              onClick={() => setCurrent(i)}
            ></button>
          );
        })}
      </div>
      <button className={styles["carousel-controller"]} onClick={nextSlide}>
        <ArrowRight className={`${styles.icon} icon lg`} />
      </button>
    </div>
  );
}
