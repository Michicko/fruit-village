import LoadMoreButton from "../components/Components/LoadMoreButton";
import Order from "../components/Components/Order";
export default function Orders() {
  return (
    <div className="personal-layout__content">
      <h3 className="heading heading--section">My orders</h3>
      <div className="order__list">
        <Order />
      </div>
      <LoadMoreButton />
    </div>
  );
}
