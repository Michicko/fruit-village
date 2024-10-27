import { useEffect, useState } from "react";
import usePersonalPageContext from "../../hooks/usePersonalPageContext";
import { ProductProps } from "../../constants";
import CircleDot from "../../assets/icons/circle-dot.svg?react";
import Product from "../Product/Product";

interface PagePropsTypes {
  list: ProductProps[];
  title: string;
}

export default function Page({ list, title }: PagePropsTypes) {
  const [stateList, setStateList] = useState(list);
  const { setPageTitle } = usePersonalPageContext();

  useEffect(() => {
    setPageTitle(title);
  }, [setPageTitle, title]);

  const deleteItemFromList = (id: string) => {
    const updatedList = stateList.filter((item) => item.id !== id);
    setStateList(updatedList);
  };

  const removeItems = () => {
    setStateList([]);
  };

  const addItemsToCart = () => {
    // wishes.map((wish) => {

    // })
    console.log("Added list to cart");
  };

  return (
    <>
      <section className="section section-about">
        <div className="page-btns">
          <button className="page-btn add" onClick={addItemsToCart}>
            Add all to Cart
          </button>
          <button className="page-btn del" onClick={removeItems}>
            Remove all <CircleDot className="icon sm path-filled red" />
          </button>
        </div>
        <div className="list">
          {stateList.map((item) => {
            return (
              <Product
                product={item}
                showDeleteBtn={true}
                key={item.id}
                deleteWish={deleteItemFromList}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
