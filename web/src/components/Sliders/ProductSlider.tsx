import { user } from "../../data";
import Product from "../Components/Product";
import { v4 as uuid } from "uuid";
import DraggableSlider from "./DraggableSlider";
import { ProductTypes } from "../../constants";

type ProductSliderProps = {
  products: ProductTypes[];
};

export default function ProductSlider({ products }: ProductSliderProps) {
  return (
    <div className="product-slider">
      <DraggableSlider>
        {products.map((product) => {
          return (
            <Product
              type="product"
              isLiked={user.wishList.includes(product.id)}
              product={product}
              source="slider"
              key={uuid()}
            />
          );
        })}
        
      </DraggableSlider>
    </div>
  );
}
