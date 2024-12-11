import styles from "./SectionSelector.module.css";

interface ProductSectionSelectorPropsTypes {
  text: string;
  currentIndex: number;
  index: number;
  handleOnClick: (arg: number) => void;
}

export default function SectionSelector({
  text,
  currentIndex,
  index,
  handleOnClick,
}: ProductSectionSelectorPropsTypes) {

  return (
    <button
      className={
        currentIndex === index
          ? `${styles.selector} ${styles.current}`
          : styles.selector
      }
      onClick={() => handleOnClick(index)}
    >
      {text}
    </button>
  );
}
