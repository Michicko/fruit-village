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
    image: "/images/mango.jpg",
  },
  {
    id: uuid(),
    name: "Avocado",
    url: "/sale?category=avocado",
    image: "/images/avocado-img.jpg",
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
    image: "/images/pineapple-img.jpg",
  },
  {
    id: uuid(),
    name: "Citrus",
    url: "/sale?category=citrus",
    image: "/images/citrus.jpeg",
  },
  {
    id: uuid(),
    name: "Watermelon, melons",
    url: "/sale?category=watermelon,melons",
    image: "/images/watermelons-melons.jpg",
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

export const products = [
  {
    id: "9c4a1127-0687-4e09-a398-84895dc84053",
    name: "Pineapple premium",
    image: "/images/pineapple.png",
    category: "pineapple",
    price: 5.99,
    isFavorite: true,
    discount: 0,
    stock: 5,
    measurement: "piece",
    slug: "pineapple-premium",
    size: 1,
  },
  {
    id: "39413517-62da-4912-aa98-865d90d9455d",
    name: "Persimmon Sharon",
    image: "/images/persimmon-sharon.jpg",
    category: "pineapple",
    price: 4.99,
    isFavorite: false,
    discount: 0,
    stock: 8,
    measurement: "kg",
    slug: "persimmon-sharon",
    size: 1,
  },
  {
    id: "f2217dd9-bf31-4074-9a9e-02841d803c31",
    name: "Longan",
    image: "/images/longan.png",
    category: "pineapple",
    price: 3.39,
    isFavorite: false,
    discount: 10,
    stock: 10,
    measurement: "kg",
    size: 1,
    slug: "longan",
  },
  {
    id: "fd2a15ba-3161-40bc-baeb-96249b0c63e0",
    name: "Pitahaya yellow",
    image: "/images/pitahaya-yellow.jpg",
    category: "cactus",
    price: 9.49,
    isFavorite: true,
    discount: 0,
    stock: 0,
    measurement: "piece",
    size: 1,
    slug: "pitahaya-yellow",
  },
];

export const wishList = [
  {
    id: "9c4a1127-0687-4e09-a398-84895dc84053",
    name: "Pineapple premium",
    image: "/images/pineapple.png",
    category: "pineapple",
    price: 5.99,
    isFavorite: true,
    discount: 0,
    stock: 5,
    measurement: "piece",
    slug: "pineapple-premium",
  },
];

export const CartProducts = [
  {
    id: "fd2a15ba-3161-40bc-baeb-96249b0c63e0",
    name: "Pitahaya yellow",
    image: "/images/pitahaya-yellow.jpg",
    category: "cactus",
    price: 9.49,
    isFavorite: true,
    discount: 0,
    stock: 0,
    size: 1,
    measurement: "piece",
    slug: "pitahaya-yellow",
  },
];

export const fruitbox = {
  id: "fc3b15ba-3161-40bc-bbeb-76249b0c63e0",
  name: "Box XS",
  category: "fruit box",
  size: 1.8,
  measurement: "kg",
  description:
    "Mango ready to eat, young coconut, Herring, Rambutan 2px, Kiwi Gold, Passio fruit 2pcs, Grenadilla, Lychee 100g",
  price: 21.99,
  slug: "box-xs",
  image: "/images/box-xs.png",
  isFavorite: true,
  discount: 0,
  stock: 5,
};

export const facts = [
  {
    id: uuid(),
    title: "11",
    description:
      "For 11 years we have been delivering fresh fruits to consumers",
  },
  {
    id: uuid(),
    title: "100+",
    description: "More than 100 items in assortments and more are added",
  },
  {
    id: uuid(),
    title: "120+",
    description: "We cooperate with more than 120 suppliers",
  },
  {
    id: uuid(),
    title: "1000+",
    description: "More than 1000 satisfied partners around the world",
  },
];
