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
    name: "Watermelon and melons",
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
    code: 24,
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
    code: 114,
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
    code: 104,
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
    code: 14,
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
    code: 13,
  },
  {
    id: "39413517-62da-4912-aa98-865d90d9455d",
    name: "Persimmon Sharon",
    image: "/images/persimmon-sharon.jpg",
    category: "pineapple",
    price: 4.99,
    isFavorite: true,
    discount: 0,
    stock: 8,
    measurement: "kg",
    slug: "persimmon-sharon",
    size: 1,
    code: 114,
  },
  {
    id: "f2217dd9-bf31-4074-9a9e-02841d803c31",
    name: "Longan",
    image: "/images/longan.png",
    category: "pineapple",
    price: 3.39,
    isFavorite: true,
    discount: 10,
    stock: 10,
    measurement: "kg",
    size: 1,
    slug: "longan",
    code: 104,
  },
];

export const waitList = [
  {
    id: "9c4a1127-0687-4e09-a398-84895dc84053",
    name: "Pineapple premium",
    image: "/images/pineapple.png",
    category: "pineapple",
    price: 5.99,
    isFavorite: true,
    discount: 0,
    stock: 0,
    measurement: "piece",
    slug: "pineapple-premium",
    code: 13,
  },
  {
    id: "f2217dd9-bf31-4074-9a9e-02841d803c31",
    name: "Longan",
    image: "/images/longan.png",
    category: "pineapple",
    price: 3.39,
    isFavorite: false,
    discount: 10,
    stock: 0,
    measurement: "kg",
    size: 1,
    slug: "longan",
    code: 104,
  },
];

export const CartProducts = [
  {
    id: "bd2a15bc-3161-30bb-baeb-96249b0c63e0",
    quantity: 1,
    product: {
      id: "fd2a15ba-3161-40bc-baeb-96249b0c63e0",
      name: "Pitahaya yellow",
      image: "/images/pitahaya-yellow.jpg",
      category: "cactus",
      price: 9.49,
      isFavorite: true,
      discount: 0,
      stock: 5,
      size: 1,
      measurement: "piece",
      slug: "pitahaya-yellow",
      code: 12,
    },
  },
  {
    id: "5c4c1127-1687-4e09-b398-84895dd84053",
    quantity: 1,
    product: {
      id: "9c4a1127-0687-4e09-a398-84895dc84053",
      name: "Pineapple premium",
      image: "/images/pineapple.png",
      category: "pineapple",
      price: 5.99,
      isFavorite: true,
      discount: 0,
      stock: 3,
      measurement: "piece",
      slug: "pineapple-premium",
      size: 1,
      code: 24,
    },
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
  code: 124,
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

export const brands = [
  { id: uuid(), name: "bakker", image: "/images/bakker.png" },
  { id: uuid(), name: "berries-pride", image: "/images/berries-pride.jpg" },
  { id: uuid(), name: "elbefruit", image: "/images/elbefruit.png" },
  { id: uuid(), name: "fyffes", image: "/images/fyffes.png" },
  { id: uuid(), name: "fairfruit", image: "/images/fairfruit.png" },
];

export const articles = [
  {
    id: uuid(),
    category: "news",
    title: "Fruit village branded delivery car",
    createdAt: "1 day ago",
    coverImage: "/images/fruit-village-branded-delivery-car.png",
    summary:
      "Today there are many advertising options that help attract new ones",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum voluptate quibusdam soluta veritatis. Laudantium nisi voluptas voluptate debitis unde.",
    slug: "fruit-village-branded-delivery-car",
  },
  {
    id: uuid(),
    category: "lifehacks",
    title: "9 tricks for storing fruits",
    createdAt: "2 days ago",
    coverImage: "/images/9-tricks-for-storing-fruits.jpg",
    summary:
      "Food products tends to spoil even when you buy fresh and high quality",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum voluptate quibusdam soluta veritatis. Laudantium nisi voluptas voluptate debitis unde.",
    slug: "9-tricks-for-storing-fruits",
  },
  {
    id: uuid(),
    category: "recipes",
    title: "What is known about Thai food",
    createdAt: "3 days ago",
    coverImage: "/images/what-is-known-about-thai-food.jpg",
    summary:
      "It is unlinkely that anyone in our harsh land would think of marinating an exotic product",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum voluptate quibusdam soluta veritatis. Laudantium nisi voluptas voluptate debitis unde.",
    slug: "what-is-known-about-thai-food",
  },
  {
    id: uuid(),
    category: "news",
    title: "Fruit village inspires chef",
    createdAt: "3 days ago",
    coverImage: "/images/fruit-village-inspires-chef.jpeg",
    summary:
      "Fruit village is a reliable destributor of fruits for establishment in the segment",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum voluptate quibusdam soluta veritatis. Laudantium nisi voluptas voluptate debitis unde.",
    slug: "fruit-village-inspires-chef",
  },
];

export const sortOptions = [
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

export const tastes = ["citrus", "fresh", "sour", "sour-sweet", "sweet"];

export const orders = [
  {
    id: "djfiy-nsjcd-snjeee",
    status: "canceled",
    createdAt: "2024-04-15",
    paymentMethod: "apple pay",
    deliveryFee: 5,
    orderFee: 0,
    products: [
      {
        id: "bd2a15bc-3161-30bb-baeb-96249b0c63e0",
        quantity: 1,
        product: {
          id: "fd2a15ba-3161-40bc-baeb-96249b0c63e0",
          name: "Pitahaya yellow",
          image: "/images/pitahaya-yellow.jpg",
          category: "cactus",
          price: 9.49,
          isFavorite: true,
          discount: 0,
          stock: 5,
          size: 1,
          measurement: "piece",
          slug: "pitahaya-yellow",
          code: 12,
        },
      },
      {
        id: "5c4c1127-1687-4e09-b398-84895dd84053",
        quantity: 1,
        product: {
          id: "9c4a1127-0687-4e09-a398-84895dc84053",
          name: "Pineapple premium",
          image: "/images/pineapple.png",
          category: "pineapple",
          price: 5.99,
          isFavorite: true,
          discount: 0,
          stock: 3,
          measurement: "piece",
          slug: "pineapple-premium",
          size: 1,
          code: 24,
        },
      },
      {
        id: "bd2a15dc-3161-30bb-baeb-96249b0c63e0",
        quantity: 2,
        product: {
          id: "fd2a15ba-3161-40bc-baeb-96249b0c63e0",
          name: "Pitahaya yellow",
          image: "/images/pitahaya-yellow.jpg",
          category: "cactus",
          price: 9.49,
          isFavorite: true,
          discount: 0,
          stock: 5,
          size: 1,
          measurement: "piece",
          slug: "pitahaya-yellow",
          code: 12,
        },
      },
      {
        id: "5c4c1147-1687-4e09-b398-84895dd84053",
        quantity: 3,
        product: {
          id: "9c4a1127-0687-4e09-a398-84895dc84053",
          name: "Pineapple premium",
          image: "/images/pineapple.png",
          category: "pineapple",
          price: 5.99,
          isFavorite: true,
          discount: 0,
          stock: 3,
          measurement: "piece",
          slug: "pineapple-premium",
          size: 1,
          code: 24,
        },
      },
    ],
  },
  {
    id: "djfiy-nsbjd-snjeee",
    status: "completed",
    createdAt: "2024-04-15",
    paymentMethod: "apple pay",
    deliveryFee: 5,
    orderFee: 0,
    products: [
      {
        id: "bd2a15bc-3161-30bb-baeb-96249b0c63e0",
        quantity: 1,
        product: {
          id: "fd2a15ba-3161-40bc-baeb-96249b0c63e0",
          name: "Pitahaya yellow",
          image: "/images/pitahaya-yellow.jpg",
          category: "cactus",
          price: 9.49,
          isFavorite: true,
          discount: 0,
          stock: 5,
          size: 1,
          measurement: "piece",
          slug: "pitahaya-yellow",
          code: 12,
        },
      },
      {
        id: "5c4c1127-1687-4e09-b398-84895dd84053",
        quantity: 1,
        product: {
          id: "9c4a1127-0687-4e09-a398-84895dc84053",
          name: "Pineapple premium",
          image: "/images/pineapple.png",
          category: "pineapple",
          price: 5.99,
          isFavorite: true,
          discount: 0,
          stock: 3,
          measurement: "piece",
          slug: "pineapple-premium",
          size: 1,
          code: 24,
        },
      },
    ],
  },
  {
    id: "djfiy-nsjjd-snjeee",
    status: "pending",
    createdAt: "2024-04-15",
    paymentMethod: "apple pay",
    deliveryFee: 5,
    orderFee: 0,
    products: [
      {
        id: "bd2a15bc-3161-30bb-baeb-96249b0c63e0",
        quantity: 1,
        product: {
          id: "fd2a15ba-3161-40bc-baeb-96249b0c63e0",
          name: "Pitahaya yellow",
          image: "/images/pitahaya-yellow.jpg",
          category: "cactus",
          price: 9.49,
          isFavorite: true,
          discount: 0,
          stock: 5,
          size: 1,
          measurement: "piece",
          slug: "pitahaya-yellow",
          code: 12,
        },
      },
      {
        id: "5c4c1127-1687-4e09-b398-84895dd84053",
        quantity: 1,
        product: {
          id: "9c4a1127-0687-4e09-a398-84895dc84053",
          name: "Pineapple premium",
          image: "/images/pineapple.png",
          category: "pineapple",
          price: 5.99,
          isFavorite: true,
          discount: 0,
          stock: 3,
          measurement: "piece",
          slug: "pineapple-premium",
          size: 1,
          code: 24,
        },
      },
    ],
  },
];

// cached viewed products
export const viewedProducts = [
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
    code: 13,
  },
  {
    id: "f2217dd9-bf31-4074-9a9e-02841d803c31",
    name: "Longan",
    image: "/images/longan.png",
    category: "pineapple",
    price: 3.39,
    isFavorite: false,
    discount: 10,
    stock: 0,
    measurement: "kg",
    size: 1,
    slug: "longan",
    code: 104,
  },
];

export const reviews = [
  {
    id: "hjhjj",
    author: "Anette Black",
    date: "2024-05-02",
    rating: 4.3,
    review:
      "Very juicy i can't compare the taste to anything. Ate ate sweetish. Many people say the fruit is tastless. I do not think so.",
    likes: 0,
    dislikes: 0,
    answer: "Thank you for patronising us.",
  },
  {
    id: "hjscc",
    author: "Anette Black",
    date: "2024-05-02",
    rating: 4.3,
    review:
      "Very juicy i can't compare the taste to anything. Ate ate sweetish. Many people say the fruit is tastless. I do not think so.",
    likes: 0,
    dislikes: 0,
    answer: "",
  },
];
