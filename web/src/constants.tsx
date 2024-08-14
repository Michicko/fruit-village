export type HeaderSlideProps = {
  id: number;
  description: string;
  link: string;
  linkText: string;
  image: string;
  bg: string;
  btn: string;
};

export type ProductProps = {
  name: string;
  price: number;
  stock: number;
  image: string;
  slug: string;
  id: string;
  quantity: string;
  discount?: number | null;
};
