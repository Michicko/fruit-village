import { Link } from "react-router-dom";

type ArticleTypes = {
  category: string;
  image: string;
  date: string;
  title: string;
  summary: string;
  slug: string;
};

type BlogCardProps = {
  article: ArticleTypes;
};

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <div className="blog-card">
      <img
        src={`/assets/images/${article.image}`}
        alt={article.title}
        className="blog-card__img"
      />
      <div className="blog-card__body">
        <div className="blog-card__top">
          <p className="blog-card__category">{article.category}</p>
          <p className="blog-card__date">{article.date}</p>
        </div>
        <h5 className="blog-card__title">{article.title}</h5>
        <p className="blog-card__sum">{article.summary}</p>
        <Link to={`/blog/${article.slug}`} className="blog-card__link">
          read more
        </Link>
      </div>
    </div>
  );
}
