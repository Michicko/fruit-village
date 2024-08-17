import CustomLink from "./CustomLink";

type FruitBoxProps = {
  fruitBox: {
    name: string;
    image: string;
    size: string;
    description: string;
    price: number;
  };
};

export default function FruitBox({ fruitBox }: FruitBoxProps) {
  return (
    <div className="fruit-box">
      <img
        src={`/assets/images/${fruitBox.image}`}
        alt={fruitBox.name}
        className="fruit-box__img"
      />
      <div className="fruit-box__body">
        <h4 className="fruit-box__name">{fruitBox.name}</h4>
        <p className="fruit-box__size">{fruitBox.size}</p>
        <p className="fruit-box__description">{fruitBox.description}</p>
        <p className="fruit-box__price">${fruitBox.price}</p>
        <div className="box">
          <button className="btn btn--sm btn--light btn--hovered-green fruit-box__btn">
            Buy
          </button>
          <CustomLink
            text="Show all boxes"
            to="/shop?category=fruit+box"
            type="light"
          />
        </div>
      </div>
    </div>
  );
}
