import { Link } from "react-router-dom";
import Like from "../../assets/icons/like.svg?react";
import Liked from "../../assets/icons/like-filled.svg?react";
import { ProductProps } from "../../constants";
import LikeButton from "./LikeButton";

type ProductProper = {
  product: ProductProps;
};

export default function Product({ product }: ProductProper) {
  const user = {
    name: "John Doe",
    wishList: ["2cdy57h72782u289uj9"],
  };

  const getDiscountPrice = (price: number, discount: number) => {
    const pricePercent = (discount / 100) * price;
    const currentPrice = (price - pricePercent).toFixed(2);
    return currentPrice;
  };

  return (
    <div className="product">
      {product.discount && (
        <div className="product__discount">
          <span>{product.discount}%</span>
        </div>
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
        <p className="product__quantity">price for {product.quantity}</p>
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
          <LikeButton product={product} />
        </div>
        <button className="btn btn--sm btn--primary">Add to Cart</button>
      </div>
    </div>
  );
}
