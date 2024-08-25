import { useState } from "react";
import History from "../components/Components/History";
import { products, user } from "../data";
import Product from "../components/Components/Product";
import DesktopTop from "../components/Sale/DesktopTop";
import MobileTop from "../components/Sale/MobileTop";
import { v4 as uuid } from "uuid";
import Pagination from "../components/Components/Pagination";
import Filter from "../components/Filters/Filter";

export default function Sale() {
  const [history, setHistory] = useState([
    {
      name: "All goods",
      link: "/sale",
    },
  ]);

  const [isFilterOpened, setIsFilterOpened] = useState(false);
  return (
    <>
      <main className="main">
        <History history={history} />
        <section className="section sale">
          <Filter
            isFilterOpened={isFilterOpened}
            setIsFilterOpened={setIsFilterOpened}
          />
          <div className="products">
            <DesktopTop category="All goods" />
            <MobileTop
              category="All goods"
              setIsFilterOpened={setIsFilterOpened}
            />
            <div className="products__top-filters"></div>
            <div className="products__list">
              {products.map((product) => {
                return (
                  <Product
                    type="product"
                    product={product}
                    isLiked={user.wishList.includes(product.id)}
                    key={uuid()}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <Pagination />
      </main>
    </>
  );
}
