import Button from "../Button/Button";
import CartItem from "../Cart/CartItem";
import Price from "../Price/Price";
import styles from "./OrderSummary.module.css";

const order = {
  id: "djfiy-nsjcd-snjeee",
  status: "canceled",
  createdAt: "2024-04-15",
  paymentMethod: "apple pay",
  deliveryFee: 5,
  orderFee: 0,
  products: [
    {
      id: "bd2a15bc-3161-30bb-baeb-96249b0c63e0",
      quantity: 3,
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
};

export default function OrderSummary() {
  return (
    <div className={styles["order-summary"]}>
      <div className="flex space-between">
        <h2>Order summary</h2>
        <button>edit</button>
      </div>
      <div className={styles.orders}>
        {order.products.map((product) => {
          return (
            <CartItem item={product} key={product.id} showCounter={false} />
          );
        })}
      </div>
      <div className={styles["breakdown"]}>
        <div className="flex space-between">
          <p>Subtotal: </p>
          <Price discount={0} price={15.55} size="sm" />
        </div>
        <div className="flex space-between">
          <p>Delivery: </p>
          <Price discount={0} price={order.deliveryFee} size="sm" />
        </div>
      </div>
      <div className="flex space-between">
        <h3 className={styles.total}>Total to pay: </h3>
        <Price discount={0} price={order.deliveryFee} size="lg" />
      </div>
      <Button
        bg="#42c84f"
        color="#fcfff9"
        hoveredBg="#0d6494"
        hoveredColor="#fcfff9"
        text="Confirm order"
      />
    </div>
  );
}
