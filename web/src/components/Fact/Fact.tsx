import styles from "./Fact.module.css";

interface FactProps {
  fact: {
    id: string;
    title: string;
    description: string;
  };
}

export default function Fact({ fact }: FactProps) {
  return (
    <div className={styles.fact}>
      <h3 className={styles["fact-title"]}>{fact.title}</h3>
      <p className={styles["fact-desc"]}>{fact.description}</p>
    </div>
  );
}
