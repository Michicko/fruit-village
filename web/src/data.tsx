import UserIcon from "./assets/icons/user.svg?react";
import DocIcon from "./assets/icons/document.svg?react";
import HeartIcon from "./assets/icons/like.svg?react";
import ClockIcon from "./assets/icons/clock-3.svg?react";
import EyeIcon from "./assets/icons/eye.svg?react";
import GiftIcon from "./assets/icons/gift.svg?react";
import LogoutIcon from "./assets/icons/logout.svg?react";

export const products = [
  {
    id: "2bdy77h72782u289uj9",
    name: "pineapple premium",
    price: 5.99,
    stock: 5,
    image: "pineapple-premium.png",
    slug: "pineapple-premium",
    measurement: "piece",
    code: 1146,
  },
  {
    id: "2cdy57h72782u289uj9",
    name: "persimon sharon",
    price: 4.99,
    stock: 5,
    image: "persimmon-sharon.png",
    slug: "persimon-sharon",
    measurement: "kg",
    code: 1275,
  },
  {
    id: "2dcr57h44782u289uj9",
    name: "mango royal",
    price: 9.99,
    stock: 5,
    image: "mango-royal.png",
    slug: "mango-royal",
    measurement: "piece",
    code: 313,
  },
  {
    id: "2ccr47h24782u289uj9",
    name: "pitahaya yellow",
    price: 9.49,
    stock: 0,
    image: "pitahaya-yellow.png",
    slug: "pitahaya-yellow",
    measurement: "piece",
    code: 275,
  },
  {
    id: "2dcr57h44782u289uj2",
    name: "Longan",
    price: 4.39,
    stock: 4,
    image: "longan.png",
    slug: "longan",
    discount: 23,
    measurement: "kg",
    code: 1115,
  },
  {
    id: "2ccr47h24782u289uj9",
    name: "mandarin clementine",
    price: 1.49,
    stock: 0,
    image: "mandarin-clementine.png",
    slug: "mandarin-clementine",
    discount: 49,
    measurement: "kg",
    code: 1015,
  },
  {
    id: "2ccr47h24782u289uj9",
    name: "physalis",
    price: 2.49,
    stock: 4,
    image: "physalis.png",
    slug: "physalis",
    discount: 25,
    measurement: "kg",
    code: 125,
  },
  {
    id: "2ccr47h24782u289uj9",
    name: "avocado",
    price: 4.99,
    stock: 5,
    image: "avocado.png",
    slug: "physalis",
    discount: 10,
    measurement: "k",
    code: 175,
  },
];

export const categories = [
  {
    id: 1,
    category: "Avocado",
    link: "/sale?category=avocado",
    image: "avocado-category.jpg",
  },
  {
    id: 2,
    category: "Pineapple",
    link: "/sale?category=pineapple",
    image: "pineapple-category.jpg",
  },
  {
    id: 3,
    category: "Watermelons and melons",
    link: "/sale?category=watermelons+and+melons",
    image: "melons-category.png",
  },
  {
    id: 4,
    category: "Mango",
    link: "/sale?category=mango",
    image: "mango-category.jpg",
  },
  {
    id: 5,
    category: "Citrus",
    link: "/sale?category=citrus",
    image: "citrus-category.jpg",
  },
  {
    id: 6,
    category: "Apples, pear, persimmon",
    link: "/sale?category=apples,pear,persimmon",
    image: "",
  },
  {
    id: 7,
    category: "Grape",
    link: "/sale?category=grape",
    image: "",
  },
  {
    id: 8,
    category: "Peaches, apricots, plums",
    link: "/sale?category=peaches,apricots,plums",
    image: "",
  },
  {
    id: 9,
    category: "Berries",
    link: "/sale?category=berries",
    image: "",
  },
  {
    id: 10,
    category: "Exotic fruits",
    link: "/sale?category=exotic+fruits",
    image: "",
  },
  {
    id: 11,
    category: "Fruit boxes",
    link: "/sale?category=fruit+boxes",
    image: "",
  },
];

export const reviews = [
  {
    id: "1jduey388",
    author: "John Doe",
    date: "2021-09-27",
    rating: 4.2,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium cumque itaque maiores sunt quia sint cum soluta dicta provident possimus.",
    likes: 5,
    dislikes: 0,
  },
  {
    id: "1jduey311",
    author: "Amanda Smith",
    date: "2021-08-15",
    rating: 4.5,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium cumque itaque maiores sunt quia sint cum soluta dicta provident possimus.",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "1jduey3c2",
    author: "Jane Doe",
    date: "2022-09-27",
    rating: 5,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium cumque itaque maiores sunt quia sint cum soluta dicta provident possimus.",
    likes: 4,
    dislikes: 1,
  },
];

export const ratings = [
  0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6,
  1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.1, 3.2,
  3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8,
  4.9, 5,
];

export const user = {
  first_name: "Ronald",
  last_name: "Richards",
  phone_number: "(505) 555-0125",
  email: "ronaldrichards@gmail.com",
  date_of_birth: "02/04/1980",
  delivery_address: {
    country: "United Kingdom",
    city: "London",
    address: "235 Euston Road",
    postal_code: 45000,
  },
  wishList: [
    "2bdy77h72782u289uj9",
    "cdy57h72782u289uj9",
    "2dcr57h44782u289uj9",
  ],
  waitList: ["2dcr57h44782u289uj9", "2ccr47h24782u289uj9"],
};

export const wishListProducts = [
  {
    id: "2bdy77h72782u289uj9",
    name: "pineapple premium",
    price: 5.99,
    stock: 5,
    image: "pineapple-premium.png",
    slug: "pineapple-premium",
    measurement: "piece",
    code: 1146,
  },
  {
    id: "2cdy57h72782u289uj9",
    name: "persimon sharon",
    price: 4.99,
    stock: 5,
    image: "persimmon-sharon.png",
    slug: "persimon-sharon",
    measurement: "kg",
    code: 1275,
  },
  {
    id: "2dcr57h44782u289uj9",
    name: "mango royal",
    price: 9.99,
    stock: 5,
    image: "mango-royal.png",
    slug: "mango-royal",
    measurement: "piece",
    code: 313,
  },
];

export const privateLinks = [
  {
    name: "My account",
    link: "/account",
    icon: <UserIcon className="personal-page__icon path-filled" />,
    showTotal: false,
  },
  {
    name: "My orders",
    link: "/orders",
    icon: <DocIcon className="personal-page__icon" />,
    showTotal: false,
  },
  {
    name: "Wishlist",
    link: "/wishlist",
    icon: <HeartIcon className="personal-page__icon path-filled" />,
    showTotal: true,
    total: user.wishList.length,
  },
  {
    name: "Waitlist",
    link: "/waitlist",
    icon: <ClockIcon className="personal-page__icon" />,
    showTotal: true,
    total: user.waitList.length,
  },
  {
    name: "Viewed products",
    link: "/viewed-products",
    icon: <EyeIcon className="personal-page__icon" />,
    showTotal: false,
  },
  {
    name: "My bonus account",
    link: "/bonus",
    icon: <GiftIcon className="personal-page__icon stroked" />,
    showTotal: false,
  },
  {
    name: "Log out",
    link: "",
    icon: <LogoutIcon className="personal-page__icon" />,
    showTotal: false,
  },
];
