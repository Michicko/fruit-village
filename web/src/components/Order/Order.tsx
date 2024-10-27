import { CartItemProps } from "../../constants";
import styles from "./Order.module.css";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import CartItem from "../Cart/CartItem";
import CreditCard from "../../assets/icons/credit-card.svg?react";
import Button from "../Button/Button";
import { useRef, useState } from "react";

interface OrderPropsTypes {
  order: {
    id: string;
    status: string;
    createdAt: string;
    paymentMethod: string;
    deliveryFee: number;
    orderFee: number;
    products: CartItemProps[];
  };
}

export default function Order({ order }: OrderPropsTypes) {
  const [isOpened, setIsOpened] = useState(false);
  const orderRef = useRef<HTMLDivElement | null>(null);

  const toggleOrder = () => {
    const order = orderRef.current;

    if (order) {
      order.toggleAttribute("open");
      setIsOpened(!isOpened);
    }
  };

  return (
    <div className={styles.order} ref={orderRef}>
      <div
        className={`${styles["product-infos"]} ${styles[order.status]}`}
        onClick={toggleOrder}
      >
        <div className={styles["product-info"]}>
          <p>#7454</p>
          <p>05/03/2024</p>
        </div>
        <div className={styles["product-info"]}>
          <p>Order price: </p>
          <p>$ 25.55</p>
        </div>
        <div className={styles["product-info"]}>
          <p className={`${styles.status} ${styles[order.status]}`}>
            {order.status}
          </p>
        </div>
      </div>
      <div>
        {!isOpened && (
          <div className={styles["items-img-box"]}>
            <div className={styles["items-imgs"]}>
              {order.products.map((el) => {
                return (
                  <img
                    src={el.product.image}
                    alt={el.product.name}
                    className={styles["item-img"]}
                    key={el.id}
                  />
                );
              })}
            </div>
          </div>
        )}
        <button className={`${styles.btn} ${isOpened ? styles.isOpened : ""}`}>
          <ArrowDown className={`${styles.icon} icon path-filled dark`} />
        </button>
      </div>
      <div className={styles["order-items-box"]}>
        <h3 className={styles["box-heading"]}>Goods</h3>
        <div className={styles["order-items"]}>
          {order.products.map((orderItem) => {
            return <CartItem item={orderItem} key={orderItem.id} />;
          })}
        </div>
        <div className={styles["order-infos"]}>
          <div className={styles["order-info"]}>
            <p>Payment method</p>
            <div className={styles["payment-method"]}>
              <p>Apple pay</p>
              <CreditCard className="icon sm green" />
            </div>
          </div>
          <div className={styles["order-info"]}>
            <p>Delivery</p>
            <p>$4.99</p>
          </div>
          <div className={styles["order-info"]}>
            <p>Total</p>
            <p>$20.36</p>
          </div>
          <div className={`${styles["order-info"]} ${styles.btns}`}>
            <Button
              text="Write a review"
              bg="#c6eeca"
              color="#31870b"
              hoveredBg="#31870b"
              hoveredColor="#fcfff9"
            />
            <Button
              text="Repeat order"
              bg="#31870b"
              color="#fcfff9"
              hoveredBg="#0d6494"
              hoveredColor="#fcfff9"
            />
          </div>
        </div>
      </div>
      <div className="user-infos-box">
        <div className={styles["delivery-box"]}>
          <h3 className={styles["box-heading"]}>Delivery</h3>
          <div className={styles["delivery-infos"]}>
            <div className={styles["delivery-info"]}>
              <p>country</p>
              <div className="country">
                <p></p>
                <p>United kingdom</p>
              </div>
            </div>
            <div className={styles["delivery-info"]}>
              <p>City</p>
              <p>London</p>
            </div>
            <div className={styles["delivery-info"]}>
              <p>Address</p>
              <p>255 Eusten road</p>
            </div>
            <div className={styles["delivery-info"]}>
              <p>Postal code</p>
              <p>45000</p>
            </div>
          </div>
        </div>
        <div className={styles["user-box"]}>
          <h3 className={styles["box-heading"]}>User information</h3>
          <div className={styles["delivery-infos"]}>
            <div className={styles["delivery-info"]}>
              <p>First name</p>
              <p>Ronald</p>
            </div>
            <div className={styles["delivery-info"]}>
              <p>Last name</p>
              <p>Richards</p>
            </div>
            <div className={styles["delivery-info"]}>
              <p>Phone number</p>
              <p>(505) 555-0125</p>
            </div>
            <div className={styles["delivery-info"]}>
              <p>Email</p>
              <p>ronaldrichards@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
