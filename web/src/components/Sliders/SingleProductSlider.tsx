import DraggableSlider from "./DraggableSlider";
import { v4 as uuid } from "uuid";

type SingleProductSliderProps = {
  images: string[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function SingleProductSlider({
  images,
  index,
  setIndex,
}: SingleProductSliderProps) {
  return (
    <div className="single-product__slider">
      <DraggableSlider>
        {images.map((img, i) => {
          return (
            <img
              src={`/assets/images/${img}`}
              alt="Pitahaya white / Dragon fruit"
              key={uuid()}
              className={
                index === i
                  ? "single-product__img-slide current"
                  : "single-product__img-slide"
              }
              onClick={() => setIndex(i)}
            />
          );
        })}
      </DraggableSlider>
    </div>
  );
}
