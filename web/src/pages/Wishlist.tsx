import { wishList } from "../data";
import Page from "../components/Page/Page";

export default function Wishlist() {
  return <Page list={wishList} title="Wishlist" />;
}
