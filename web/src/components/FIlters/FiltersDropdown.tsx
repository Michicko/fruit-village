import styles from "./Filters.module.css";
import ArrowdownFilled from "../../assets/icons/arrow-down-filled.svg?react";
import { useRef, useState } from "react";

interface FiltersDropdownProps {
  children: React.ReactNode;
}

export default function FiltersDropdown({ children }: FiltersDropdownProps) {
  const [isOpened, setIsOpened] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleContent = () => {
    const contentDiv = contentRef.current;
    if (contentDiv) {
      contentDiv.toggleAttribute("open");
      setIsOpened(!isOpened);
    }
  };

  return (
    <div className={styles["filters-dropdown"]}>
      <button
        className={`${styles["filters-dropdown-btn"]} ${
          isOpened ? styles.isOpened : ""
        }`}
        onClick={toggleContent}
      >
        <span>Categories</span>
        <ArrowdownFilled className={`${styles["dropdown-icon"]} icon sm`} />
      </button>
      <div className={`${styles["filters-dropdown-content"]}`} ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
