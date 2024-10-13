import { v4 as uuid } from "uuid";

export const links = [
  {
    id: uuid(),
    name: "About",
    url: "/about",
  },
  {
    id: uuid(),
    name: "Shipping and payment",
    url: "/shipping-and-payment",
  },
  {
    id: uuid(),
    name: "Blog",
    url: "/blog",
  },
  {
    id: uuid(),
    name: "Sale",
    url: "/sale",
  },
];

export const catalogue = [
  {
    id: uuid(),
    name: "Grape",
    url: "/sale?category=grape",
  },
  {
    id: uuid(),
    name: "Apples, persimon, pear",
    url: "/sale?category=apples,persimon,pear",
  },
  {
    id: uuid(),
    name: "Mango",
    url: "/sale?category=mango",
  },
  {
    id: uuid(),
    name: "Avogado",
    url: "/sale?category=avogado",
  },
  {
    id: uuid(),
    name: "Peaches, apricots, plums",
    url: "/sale?category=peaches,apricots,plums",
  },
  {
    id: uuid(),
    name: "Berries",
    url: "/sale?category=berries",
  },
  {
    id: uuid(),
    name: "Pineapple",
    url: "/sale?category=pineapple",
  },
  {
    id: uuid(),
    name: "Citrus",
    url: "/sale?category=citrus",
  },
  {
    id: uuid(),
    name: "Watermelon, melons",
    url: "/sale?category=watermelon,melons",
  },
  {
    id: uuid(),
    name: "exotic fruits",
    url: "/sale?category=exotic+fruits",
  },
  {
    id: uuid(),
    name: "Fruit boxes",
    url: "/sale?category=fruit+boxes",
  },
];