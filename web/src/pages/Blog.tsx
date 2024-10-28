import { useState } from "react";
import Article from "../components/Article/Article";
import { articles } from "../data";
import Pagination from "../components/Pagination/Pagination";
import PrimaryHeading from "../components/Typography/PrimaryHeading";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    "all articles"
  );

  const categories = [
    "all articles",
    ...new Set(articles.map((el) => el.category)),
  ];

  const pickedCategory =
    selectedCategory === "all articles" ? "" : selectedCategory;

  const selectCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => {
    const target = e?.target as HTMLButtonElement;
    let category;
    if (target) {
      category = target.textContent?.toLowerCase();
    }
    setSelectedCategory(category);
  };

  const handlePageClick = () => {
    console.log("Next page");
  };

  return (
    <main className="main">
      <PrimaryHeading text="Blog" />
      <section className="section section-about blog">
        <div className="article-categories">
          {categories.map((category, i) => {
            return (
              <button
                key={i}
                className={`article-category-btn ${
                  category === selectedCategory ? "active" : ""
                }`}
                onClick={selectCategory}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="articles">
          {articles
            .filter((el) => {
              if (pickedCategory === "") return el;
              return el.category === pickedCategory;
            })
            .map((article) => {
              return <Article article={article} key={article.id} />;
            })}
        </div>
      </section>
      <section className="section section-page jc">
        <Pagination pageCount={10} handlePageClick={handlePageClick} />
      </section>
    </main>
  );
}
