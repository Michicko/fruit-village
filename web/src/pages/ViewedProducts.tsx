import Page from "../components/Page/Page";
import { viewedProducts } from "../data";

export default function ViewedProducts() {
  return <Page list={viewedProducts} title="Viewed products" />;
}
