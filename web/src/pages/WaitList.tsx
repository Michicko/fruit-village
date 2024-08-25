import { v4 as uuid } from "uuid";
import Cancel from "../assets/icons/circle-center.svg?react";
import Product from "../components/Components/Product";
import { wishListProducts } from "../data";

export default function WaitList() {
  const waitListProducts = [
    {
      id: "2ccr47h24782u289uj9",
      name: "pineapple premium",
      price: 5.99,
      stock: 0,
      image: "pineapple-premium.png",
      slug: "pineapple-premium",
      measurement: "piece",
      code: 1146,
    },
    {
      id: "2cdy57h72782u289uj9",
      name: "persimon sharon",
      price: 4.99,
      stock: 0,
      image: "persimmon-sharon.png",
      slug: "persimon-sharon",
      measurement: "kg",
      code: 1275,
    },
  ];

  const wishListIds = wishListProducts.map((el) => el.id);

  return (
    <div className="personal-layout__content">
      <h3 className="heading heading--section">Waitlist</h3>
      <div className="items-list__btns">
        <button className="btn btn--bare primary">Add all to cart</button>
        <button className="btn btn--bare secondary">
          <span>Remove all</span>
          <Cancel className="items-list__icon" />
        </button>
      </div>
      <div className="items-list">
        {waitListProducts.map((el) => {
          return (
            <Product
              type="wishlist"
              product={el}
              isLiked={wishListIds.includes(el.id)}
              key={uuid()}
            />
          );
        })}
      </div>
    </div>
  );
}
