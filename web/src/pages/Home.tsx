import Carousel from "../components/Carousel/Carousel";
import Category from "../components/Category/Category";
import Promo from "../components/Promo/Promo";
import { catalogue } from "../data";
import { v4 as uuid } from "uuid";

export default function Home() {
  const categories = [
    ...catalogue.filter((el) => el.image),
    {
      id: uuid(),
      name: "Show all categories",
      url: "/sale",
      image: "/images/show-all.jpg",
    },
  ];

  return (
    <>
      <header className="home-header">
        <Carousel />
      </header>
      <main>
        <section className="section">
          <div className="home-categories">
            {categories.map((category) => {
              return (
                <Category
                  name={category.name}
                  url={category.url}
                  image={category.image}
                  key={category.id}
                />
              );
            })}
          </div>
        </section>
        <section className="section section-promo">
          <Promo />
        </section>
      </main>
    </>
  );
}
