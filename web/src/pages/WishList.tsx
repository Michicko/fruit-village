import Product from "../components/Components/Product";
import { v4 as uuid } from "uuid";
import Cancel from "../assets/icons/circle-center.svg?react";
import { wishListProducts } from "../data";

export default function WishList() {
  return (
    <div className="personal-layout__content">
      <h3 className="heading heading--section">Wishlist</h3>
      <div className="items-list__btns">
        <button className="btn btn--bare primary">Add all to cart</button>
        <button className="btn btn--bare secondary">
          <span>Remove all</span>
          <Cancel className="items-list__icon" />
        </button>
      </div>
      <div className="items-list">
        {wishListProducts.map((el) => {
          return (
            <Product type="wishlist" product={el} isLiked={true} key={uuid()} />
          );
        })}
      </div>
    </div>
  );
}
