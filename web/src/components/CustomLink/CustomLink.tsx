import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";
import styles from "./CustomLink.module.css";

interface CustomLinkProps {
  text: string;
  url: string;
  color: "dark" | "light";
}

export default function CustomLink({ text, url, color }: CustomLinkProps) {
  return (
    <Link to={url} className={`${styles.link} ${styles[color]}`}>
      {text}
      <ArrowRight className={`${styles.icon} icon`} />
    </Link>
  );
}
