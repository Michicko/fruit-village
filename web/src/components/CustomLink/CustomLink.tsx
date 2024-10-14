import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";
import styles from "./CustomLink.module.css";

interface CustomLinkProps {
  text: string;
  url: string;
  color: "dark" | "light";
  noIcon?: boolean;
  underline?: boolean;
  tone?: "thick" | "tiny";
  inline?: boolean;
}

export default function CustomLink({
  text,
  url,
  color,
  noIcon,
  underline,
  tone,
  inline,
}: CustomLinkProps) {
  return (
    <Link
      to={url}
      className={`${styles.link} ${styles[color]} ${
        underline ? styles["underline"] : ""
      } ${tone ? styles[tone] : ""} ${inline ? styles.inline : ""}`}
    >
      {text}
      {!noIcon && <ArrowRight className={`${styles.icon} icon`} />}
    </Link>
  );
}
