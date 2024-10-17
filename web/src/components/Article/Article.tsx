import { Link } from "react-router-dom";
import styles from "./Article.module.css";

interface ArticleProps {
  article: {
    id: string;
    category: string;
    title: string;
    createdAt: string;
    coverImage: string;
    summary: string;
    article: string;
    slug: string;
  };
}

export default function Article({ article }: ArticleProps) {
  return (
    <article className={styles.article}>
      <div className={styles["img-box"]}>
      <img src={article.coverImage} alt={article.title} className={"img"} />
      </div>
      <div className={styles.body}>
        <div className={styles["article-info"]}>
          <p className={styles.category}>{article.category}</p>
          <p className={styles.date}>{article.createdAt}</p>
        </div>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.desc}>{article.summary}...</p>
        <Link to={`/blog/${article.slug}`} className={styles.link}>
          read more
        </Link>
      </div>
    </article>
  );
}
