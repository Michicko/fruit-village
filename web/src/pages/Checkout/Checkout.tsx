import CheckoutInfos from "../../components/CheckoutInfo/CheckoutInfos";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const infos = {
    user: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
    shipping: {
      country: "",
      city: "",
      postalCode: "",
      address: "",
    },
  };

  const signals = [{}];

  return (
    <main className={`${styles.checkout} padded-x`}>
      <h1>Checkout</h1>
      <div className={styles["checkout-signals-mobile"]}>
        <div className={styles.info}>
          <span>1</span>
          <p>User information</p>
        </div>
        <div className={styles.info}>
          <span>2</span>
          <p>Shipping information</p>
        </div>
        <div className={styles.info}>
          <span>3</span>
          <p>Payment</p>
        </div>
      </div>
      <div className={styles["checkout-content"]}>
        <CheckoutInfos />
        <OrderSummary />
      </div>
    </main>
  );
}
