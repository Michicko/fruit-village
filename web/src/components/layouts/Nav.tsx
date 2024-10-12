import NavMain from "./NavMain";
import NavSmall from "./NavSmall";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavSmall />
      <NavMain />
    </nav>
  );
}
