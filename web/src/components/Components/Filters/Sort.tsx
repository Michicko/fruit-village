import { v4 as uuid } from 'uuid';

export default function Sort() {
  const options = [
    {
      name: "featured",
      value: "featured",
    },
    {
      name: "Best selling",
      value: "best selling",
    },
    {
      name: "Price, low to high",
      value: "price, low to high",
    },
    {
      name: "Price, high to low",
      value: "price, high to low",
    },
  ];
  return (
    <select name="sort" id="sort" className="sort">
      {options.map((el) => {
        return <option value={el.value} key={uuid()}>{el.name}</option>;
      })}
    </select>
  );
}
