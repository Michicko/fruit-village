import { Link } from "react-router-dom";
import { ProductTypes } from "../../constants";
import LikeButton from "./LikeButton";
import Bin from "../../assets/icons/recycle-bin-line-icon.svg?react";
import { getDiscountPrice } from "../../utils";

type ProductProper = {
  product: ProductTypes;
  type: "product" | "wishlist" | "waitlist";
  isLiked: boolean;
  source?: string;
};

export default function Product({ product, type, isLiked, source }: ProductProper) {
  return (
    <div className={`product ${source}`} title={product.name}>
      {product.discount && (
        <div className="product__discount">
          <span>{product.discount}%</span>
        </div>
      )}
      {(type === "wishlist" || type === "waitlist") && (
        <button className="product__del-btn">
          <Bin className="product__del-icon" />
        </button>
      )}
      <div className="product__img-box">
        <img
          src={`/assets/images/${product.image}`}
          alt={product.name}
          className="product__img"
        />
      </div>
      <div className="product__body">
        <Link to={`/sale/${product.slug}`} className="product__name">
          {product.name}
        </Link>
        <p className="product__quantity">price for 1 {product.measurement}</p>
        <span
          className={
            product.stock ? "product__status green" : "product__status red"
          }
        >
          {product.stock ? "in stock" : "by order"}
        </span>
        <div className="product__box">
          {!product.discount ? (
            <p className="product__price">${product.price}</p>
          ) : (
            <div className="product__price-box">
              <p className="product__price current">
                ${getDiscountPrice(product.price, product.discount)}
              </p>
              <p className="product__price-original">${product.price}</p>
            </div>
          )}
          <LikeButton isLiked={isLiked} />
        </div>
        <button className="btn btn--sm btn--primary">Add to Cart</button>
      </div>
    </div>
  );
}
