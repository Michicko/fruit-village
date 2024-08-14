import { ProductProps } from "../../constants";
import Product from "../Components/Product";
import { v4 as uuid } from "uuid";

type ProductSliderProps = {
  products: ProductProps[];
};

export default function ProductSlider({ products }: ProductSliderProps) {
  return (
    <div className="product-slider">
      <div className="product-slider__box">
        <div className="product-slider__slides">
          {products.map((product) => {
            return <Product product={product} key={uuid()} />;
          })}
        </div>
      </div>
    </div>
  );
}
