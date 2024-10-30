import styles from "./SectionTop.module.css";
import CustomLink from "../CustomLink/CustomLink";

interface SectionTopPropsTypes {
  title: string;
}

export default function SectionTop({ title }: SectionTopPropsTypes) {
  return (
    <div className={styles.top}>
      <h3 className="section-heading">{title}</h3>
      <CustomLink text="Show all products" url="/sale" color="dark" />
    </div>
  );
}
