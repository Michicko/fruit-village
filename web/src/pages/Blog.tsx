import BlogCard from "../components/Components/BlogCard";
import History from "../components/Components/History";
import GeneralPageSidebar from "../components/Components/GeneralPageSidebar";
import { v4 as uuid } from "uuid";
import Switch from "../components/Components/Switch";
import { useState } from "react";

export default function Blog() {
  const articles = [
    {
      title: "9 tricks for storing fruits",
      image: "9-tricks-for-storing-fruits.PNG",
      summary:
        "Food product tend to spoil even when you buy fresh and hight quality",
      date: "2022-15-7",
      category: "lifehacks",
      slug: "9-tricks-for-storing-fruits",
    },
    {
      title: "Fruit village branded delivery cars",
      image: "fruit-village-branded-delivery-cars.PNG",
      summary:
        "Today there are many advertising options that help attract new ones",
      date: "2024-11-8",
      category: "news",
      slug: "fruit-village-branded-delivery-cars",
    },
  ];

  const categories = ["all articles", "news", "lifehacks", "recipes"];
  const [switchIndex, setSwitchIndex] = useState(0);
  const filteredArticles = articles.filter((el) => {
    if (categories[switchIndex].toLowerCase() === "all articles") {
      return el;
    }
    return el.category === categories[switchIndex].toLowerCase();
  });

  return (
    <main className="main">
      <History
        history={[
          {
            name: "Blog",
            link: "/blog",
          },
        ]}
      />
      <div className="page__container">
        <div className="page__content">
          <h1 className="heading heading--primary heading--page">
            <span>Blog</span>
          </h1>
          <div className="blog__categories">
            <Switch
              switchIndex={switchIndex}
              setSwitchIndex={setSwitchIndex}
              switches={categories}
            />
          </div>
          <section className="section page__section">
            <div className="blog__list">
              {filteredArticles.map((article) => {
                return <BlogCard article={article} key={uuid()} />;
              })}
            </div>
            <div className="pagination">pagination</div>
          </section>
        </div>
        <GeneralPageSidebar />
      </div>
    </main>
  );
}
