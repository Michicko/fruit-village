import clsx from "clsx";
import styles from "./ui.module.css";

const Capsule = ({ children }: { children: React.ReactNode }) => {
  return <div className={clsx(styles.capsule)}>{children}</div>;
};

export default Capsule;
