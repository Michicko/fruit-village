import { useState } from "react";
import Filters from "../components/FIlters/Filters";
import PageHistory from "../components/PageHistory/PageHistory";
import Pagination from "../components/Pagination/Pagination";
import { catalogue } from "../data";
import { v4 as uuid } from "uuid";

export default function Sale() {
  const [currentCategory, setCurrentCategory] = useState("all goods");
  const categories = ["all goods", ...catalogue.map((el) => el.name)];

  const handlePageClick = () => {
    console.log("Next page");
  };
  
  return (
    <main className="page-layout">
      <PageHistory />
      <div className="sale-container">
        <Filters
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <div className="sale-content">
          <div className="sale-content-header">
            <h1>{currentCategory}</h1>
            <div className="sale-filters">
              <div className="sale-filters-mobile"></div>
              <div className="sale-filters-desktop"></div>
            </div>
          </div>
          <section className="section section-page">
            <h1></h1>
          </section>
          <section className="section section-page jc">
            <Pagination pageCount={10} handlePageClick={handlePageClick} />
          </section>
        </div>
      </div>
    </main>
  );
}
