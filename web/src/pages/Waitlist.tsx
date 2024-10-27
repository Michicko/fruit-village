import Page from "../components/Page/Page";
import { waitList } from "../data";

export default function Waitlist() {
  return <Page list={waitList} title="Waitlist" />;
}
