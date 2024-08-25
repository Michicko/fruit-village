export type HeaderSlideProps = {
  id: number;
  description: string;
  link: string;
  linkText: string;
  image: string;
  bg: string;
  btn: string;
};

export type ProductTypes = {
  name: string;
  price: number;
  stock: number;
  image: string;
  slug: string;
  id: string;
  discount?: number | null;
  measurement: string;
  code: number;
};
