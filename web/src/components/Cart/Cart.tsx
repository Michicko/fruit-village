import Dialog from "../Dialog/Dialog";
import styles from "./Cart.module.css";
import Close from "../../assets/icons/close.svg?react";
import { CartProducts } from "../../data";
import CartItem from "./CartItem";
import { useCallback, useEffect, useRef, useState } from "react";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import Checkbox from "../CheckBox/Checkbox";
import Price from "../Price/Price";
import Button from "../Button/Button";

interface CartPropsTypes {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Cart({ showCart, setShowCart }: CartPropsTypes) {
  const [isMobile, setIsMobile] = useState(false);
  const [cartItems, setCartItems] = useState(CartProducts);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [isServicesOpened, setIsServicesOpened] = useState(false);
  const [cartTotal, setCartTotals] = useState(0);

  const calculateTotals = useCallback(() => {
    const total = cartItems.reduce(
      (prev, curr) => curr.product.price * curr.quantity + prev,
      0
    );
    setCartTotals(total);
  }, [cartItems]);

  const services = [
    {
      id: "durhr-sjdi-dmdjkd",
      name: "pineapple peeling knife",
      price: 1.99,
    },
    {
      id: "barhr-sjdi-cddjkd",
      name: "Cardboard box with stickers",
      price: 1.49,
    },
  ];

  const removeItem = (id: string) => {
    const items = cartItems.filter((el) => el.id !== id);
    setCartItems(items);
  };

  const toggleAdditionalServices = () => {
    const services = servicesRef.current;
    if (services) {
      services.toggleAttribute("close");
      setIsServicesOpened(!isServicesOpened);
    }
  };

  const checkScreenSize = useCallback(() => {
    const screen = window.innerWidth;
    if (screen >= 768) {
      if (!isMobile) return;
      setIsMobile(false);
    } else {
      if (isMobile) return;
      setIsMobile(true);
    }
  }, [isMobile]);

  useEffect(() => {
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [checkScreenSize]);

  useEffect(() => {
    calculateTotals();
  }, [calculateTotals]);

  return (
    <Dialog
      id="cart-dialog"
      showModal={showCart}
      setShowModal={setShowCart}
      fullOnMobile={true}
      classNm={styles["cart-dialog"]}
    >
      <div className={styles.cart}>
        <div className={styles["card-header"]}>
          <h3 className={`section-heading ${isMobile ? "light" : ""}`}>Cart</h3>
          <button onClick={() => setShowCart(false)}>
            <Close
              className={`icon md stroke ${isMobile ? "light" : "dark"}`}
            />
          </button>
        </div>
        <div className={styles.main} tabIndex={1}>
          <div className={styles["cart-content"]}>
            <div className={styles["cart-items"]}>
              {cartItems.map((item) => {
                return (
                  <CartItem item={item} key={item.id} removeItem={removeItem} />
                );
              })}
            </div>
            <div className={styles["other-services"]}>
              <button
                className={`${styles["additional-btn"]} ${
                  isServicesOpened ? styles.opened : ""
                }`}
                onClick={toggleAdditionalServices}
              >
                Additional services{" "}
                <ArrowDown className={`${styles.icon} icon sm dark`} />
              </button>
              <div className={styles.services} ref={servicesRef}>
                {services.map((service) => {
                  return (
                    <Checkbox
                      name={`${service.name} (+ $${service.price})`}
                      id={service.id}
                      key={service.id}
                      group="services"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <button onClick={() => setShowCart(false)}>
              Continue shopping
            </button>
            <div className={styles["checkout-box"]}>
              <h4>Total amount:</h4>
              <Price price={cartTotal} discount={0} size="lg" />
              <Button
                text={"Checkout"}
                bg={"#42c84f"}
                color={"#fcfff9"}
                hoveredBg={"#4c6fc8"}
                hoveredColor={"#fcfff9"}
                link="/checkout"
              />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
