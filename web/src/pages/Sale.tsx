import { useState } from "react";
import Filters from "../components/Filters/Filters";
import PageHistory from "../components/PageHistory/PageHistory";
import Pagination from "../components/Pagination/Pagination";
import { catalogue, products } from "../data";
import FiltersController from "../components/Filters/FiltersController";
import Product from "../components/Product/Product";

export default function Sale() {
  const [currentCategory, setCurrentCategory] = useState("all goods");
  const categories = ["all goods", ...catalogue.map((el) => el.name)];

  const handlePageClick = () => {
    console.log("Next page");
  };

  const [isFiltersOpened, setIsFiltersOpened] = useState(false);

  return (
    <main className="page-layout">
      <PageHistory />
      <div className="sale-container">
        <Filters
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          isFiltersOpened={isFiltersOpened}
          setIsFiltersOpened={setIsFiltersOpened}
        />
        <div className="sale-content">
          <div className="sale-content-header">
            <h1>{currentCategory}</h1>
            <FiltersController setIsFiltersOpened={setIsFiltersOpened} />
          </div>
          <section className="section section-page">
            <h1></h1>
            <div className="sale-products">
              {products.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </section>
          <section className="section section-page jc">
            <Pagination pageCount={10} handlePageClick={handlePageClick} />
          </section>
        </div>
      </div>
    </main>
  );
}
