import CheckoutInfo from "../../components/CheckoutInfo/CheckoutInfo";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import styles from "./Checkout.module.css";

export default function Checkout() {
  return (
    <main className={`${styles.checkout} padded-x`}>
      <h1>Checkout</h1>
      <div className={styles["checkout-content"]}>
        <CheckoutInfo />
        <OrderSummary />
      </div>
    </main>
  );
}
