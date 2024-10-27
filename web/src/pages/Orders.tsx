import { useEffect } from "react";
import usePersonalPageContext from "../hooks/usePersonalPageContext";
import { orders } from "../data";
import Order from "../components/Order/Order";

export default function Orders() {
  const { setPageTitle } = usePersonalPageContext();

  useEffect(() => {
    setPageTitle("My orders");
  }, [setPageTitle]);

  return (
    <>
      <section className="section section-page">
        <h2 className="sm-heading">My orders</h2>
        <div className="orders">
          {orders.map((order) => {
            return <Order order={order} key={order.id} />;
          })}
        </div>
      </section>
    </>
  );
}
