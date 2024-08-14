import { v4 as uuid } from "uuid";
import ArrowLeft from "../../assets/icons/arrow-long-left.svg?react";
import ArrowRight from "../../assets/icons/arrow-long-right.svg?react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderSlideProps } from "../../constants";

type HeaderSliderProps = {
  slides: HeaderSlideProps[];
};

export default function HeaderSlider({ slides }: HeaderSliderProps) {
  const [current, setCurrent] = useState(0);

  const interVal = useRef<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const slide = useCallback(
    (direction: string, source: string) => {
      let next = current;
      if (direction === "right") {
        next = next + 1;
        if (current >= slides.length - 1) {
          next = 0;
        }
      } else if (direction === "left") {
        next = next - 1;
        if (current <= 0) {
          next = slides.length - 1;
        }
      }

      if (source === "btn" && interVal.current) {
        clearInterval(interVal.current);
      }

      setCurrent(next);
    },
    [current, slides.length]
  );

  const autoSlide = useCallback(() => {
    interVal.current = setInterval(() => {
      slide("right", "auto");
    }, 6000);
  }, [slide]);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      autoSlide();
    }

    return () => {
      if (interVal.current) {
        clearInterval(interVal.current);
      }
    };
  }, [autoSlide, isMounted]);

  const getSlideDescription = (str: string, id: number) => {
    const strArr = str.split(" ");
    const fulltText = strArr.slice(0, strArr.length - 1).join(" ");
    const lastText = strArr[strArr.length - 1];
    return (
      <h2>
        {fulltText}{" "}
        <span className={id == 2 ? "yell" : "light"}>{lastText}</span>
      </h2>
    );
  };
  
  return (
    <div className="slider header__slider">
      <div className="slider__slides">
        {slides.map((slide, i) => {
          return (
            <div
              className={
                current === i
                  ? "slider__slide slider__slide--current"
                  : "slider__slide"
              }
              key={uuid()}
            >
              <div
                className="slider__slide-body"
                style={{ background: `${slide.bg}` }}
              >
                {getSlideDescription(slide.description, slide.id)}
                {slide.link && (
                  <Link
                    className={`btn btn--sm btn--light ${slide.btn}`}
                    to={slide.link}
                    style={{ color: `${slide.bg}` }}
                  >
                    {slide.linkText}
                  </Link>
                )}
              </div>
              <div className="slider__slide-img-box">
                <img
                  src={`/assets/images/${slide.image}`}
                  alt={slide.description}
                  className="slider__slide-img"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="slider__controls">
        <div className="slider__controls-desk">
          <button
            className="slider__controls-desk-btn"
            onClick={() => slide("left", "btn")}
          >
            <ArrowLeft className="slider__controls-desk-icon" />
          </button>
          <div className="slider__controls-desk-dots">
            {slides.map((_slide, i) => {
              return (
                <button
                  className={
                    i === current
                      ? "slider__controls-desk-dot slider__controls-desk-dot--current"
                      : "slider__controls-desk-dot"
                  }
                  key={uuid()}
                  onClick={() => setCurrent(i)}
                ></button>
              );
            })}
          </div>
          <button
            className="slider__controls-desk-btn"
            onClick={() => slide("right", "btn")}
          >
            <ArrowRight className="slider__controls-desk-icon" />
          </button>
        </div>
        <div className="slider__controls-mobile">
          {slides.map((_slide, i) => {
            return (
              <button
                className={
                  i === current
                    ? "slider__controls-mobile-btn slider__controls-mobile-btn--current"
                    : "slider__controls-mobile-btn"
                }
                key={uuid()}
                onClick={() => setCurrent(i)}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
