import { useState } from "react";
import Select from "../Select";

export default function Sort() {
  const options = [
    {
      name: "Featured",
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

  const [sort, setSort] = useState(options[1].value);

  const handleOnchange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    setSort(target.value);
    target.blur();
  };

  return (
    <Select
      options={options}
      name="sort"
      id="sort"
      value={sort}
      handleOnChange={handleOnchange}
    />
  );
}
