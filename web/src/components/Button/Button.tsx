import { MouseEventHandler, useCallback, useEffect, useRef } from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  text?: string;
  bg?: string;
  color?: string;
  hoveredBg?: string;
  hoveredColor?: string;
  type: "reset" | "button" | "submit";
  link?: string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  text,
  bg,
  color,
  hoveredBg,
  hoveredColor,
  type,
  onClickHandler,
  link,
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const buttonStyles = {
    background: bg,
    color,
  };

  const onHover = useCallback(
    (btn: HTMLAnchorElement | HTMLButtonElement | null) => {
      if (btn) {
        btn.style.background = hoveredBg || bg || "white";
        btn.style.color = hoveredColor || color || "white";
      }
    },
    [bg, color, hoveredBg, hoveredColor]
  );

  const onHoverLeave = useCallback(
    (btn: HTMLAnchorElement | HTMLButtonElement | null) => {
      if (btn) {
        btn.style.background = bg || "white";
        btn.style.color = color || "#2c302d";
      }
    },
    [bg, color]
  );

  useEffect(() => {
    const btn = btnRef.current;
    const link = linkRef.current;

    if (link) {
      link.addEventListener("mouseenter", () => onHover(link));
      link.addEventListener("mouseleave", () => onHoverLeave(link));

      return () => {
        link.removeEventListener("mouseenter", () => onHover(link));
        link.removeEventListener("mouseleave", () => onHoverLeave(link));
      };
    }

    if (btn) {
      btn.addEventListener("mouseenter", () => onHover(btn));
      btn.addEventListener("mouseleave", () => onHoverLeave(btn));

      return () => {
        btn.removeEventListener("mouseenter", () => onHover(btn));
        btn.removeEventListener("mouseleave", () => onHoverLeave(btn));
      };
    }
  }, [onHover, onHoverLeave]);

  if (link) {
    return (
      <Link to={link} style={buttonStyles} className={styles.btn} ref={linkRef}>
        {text}
      </Link>
    );
  }

  return (
    <button
      style={buttonStyles}
      className={styles.btn}
      onClick={onClickHandler}
      type={type || "button"}
      ref={btnRef}
    >
      {text}
    </button>
  );
}
