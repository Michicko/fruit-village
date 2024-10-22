import styles from "./Filters.module.css";
import ArrowdownFilled from "../../assets/icons/arrow-down-filled.svg?react";
import { useRef, useState } from "react";
import ArrowDown from "../../assets/icons/arrow-down-filled.svg?react";

interface FiltersDropdownProps {
  name: string;
  children: React.ReactNode;
  showBtn: boolean;
}

export default function FiltersDropdown({
  name,
  children,
  showBtn,
}: FiltersDropdownProps) {
  const [isOpened, setIsOpened] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isShowingAll, setIsShowingAll] = useState(false);

  const toggleContent = () => {
    const contentDiv = contentRef.current;
    if (contentDiv) {
      contentDiv.toggleAttribute("open");
      setIsOpened(!isOpened);
    }
  };

  const toggleShowAll = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const btn = event.target as HTMLButtonElement;
    const list = btn.previousElementSibling;
    list?.toggleAttribute("open");
    setIsShowingAll(!isShowingAll);
  };

  return (
    <div className={styles["filters-dropdown"]}>
      <button
        className={`${styles["filters-dropdown-btn"]} ${
          isOpened ? styles.isOpened : ""
        }`}
        onClick={toggleContent}
      >
        <span>{name}</span>
        <ArrowdownFilled className={`${styles["dropdown-icon"]} icon sm`} />
      </button>
      <div className={`${styles["filters-dropdown-content"]}`} ref={contentRef}>
        {children}
        {showBtn && (
          <button
            className={`${styles["toggle-list-btn"]} ${
              isShowingAll ? styles["showing-all"] : ""
            }`}
            onClick={toggleShowAll}
          >
            <span>{isShowingAll ? "Show few" : "Show all"}</span>
            <ArrowDown className="icon sm path-filled green" />
          </button>
        )}
      </div>
    </div>
  );
}
