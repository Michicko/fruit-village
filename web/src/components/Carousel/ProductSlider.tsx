import styles from "./Carousel.module.css";

interface ProductSliderProps {
  children: React.ReactNode;
}

export default function ProductSlider({ children }: ProductSliderProps) {
  return (
    <div className={styles["product-slider"]}>
      <div className={styles["slider-box"]}>{children}</div>
    </div>
  );
}
