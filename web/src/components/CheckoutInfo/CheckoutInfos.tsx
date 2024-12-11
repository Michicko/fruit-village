import { useState } from "react";
import Login from "../Auth/Login";
import SectionSelector from "../SectionSelector/SectionSelector";
import styles from "./CheckoutInfos.module.css";
import UserInfo from "./UserInfo";
import CheckoutInfo from "./CheckoutInfo";
import ShippingInfo from "./ShippingInfo";
import Payment from "./Payment";

export default function CheckoutInfos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCheckoutIndex, setCurrentCheckoutIndex] = useState(2);

  const switchSection = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles["checkout-info"]}>
      <div className="infos">
        <CheckoutInfo
          title={"User information"}
          index={0}
          currentIndex={currentCheckoutIndex}
        >
          <div className={styles.selectors}>
            <SectionSelector
              text="Checkout as a new customer"
              currentIndex={currentIndex}
              index={0}
              handleOnClick={switchSection}
            />
            <SectionSelector
              text="Login"
              currentIndex={currentIndex}
              index={1}
              handleOnClick={switchSection}
            />
          </div>
          {currentIndex === 0 ? <UserInfo /> : <Login />}
        </CheckoutInfo>
        <CheckoutInfo
          title={"Shipping information"}
          index={1}
          currentIndex={currentCheckoutIndex}
        >
          <ShippingInfo />
        </CheckoutInfo>
        <CheckoutInfo
          title={"Payment"}
          index={2}
          currentIndex={currentCheckoutIndex}
        >
          <Payment />
        </CheckoutInfo>
      </div>
    </div>
  );
}
