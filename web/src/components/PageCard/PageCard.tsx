import styles from "./PageCard.module.css";

interface PageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function PageCard({ icon, title, description }: PageCardProps) {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-icon-box"]}>{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
