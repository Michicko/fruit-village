import { useRef, useState } from "react";
import { isFormDataFilled } from "../../helpers";
import styles from "./CheckoutInfos.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function ShippingInfo() {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    country: "",
    city: "",
    postalCode: "",
    addresss: "",
  });

  const checkIsFormFilled = () => {
    const form = formRef.current;
    if (form) {
      if (isFormDataFilled(form) && form.checkValidity()) {
        setIsFormFilled(true);
      } else {
        setIsFormFilled(false);
      }
    }
  };

  const onChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    checkIsFormFilled();
  };
  return (
    <form className={styles["user-form"]} noValidate ref={formRef}>
      <Input
        label="Country"
        type="text"
        name="country"
        id="country"
        onChange={onChange}
      />
      <Input
        label="City"
        type="text"
        name="city"
        id="city"
        onChange={onChange}
      />
      <Input
        label="Postal code"
        type="text"
        name="postalcode"
        id="postalcode"
        onChange={onChange}
      />
      <Input
        label="Address"
        type="text"
        name="address"
        id="address"
        onChange={onChange}
      />
      <Button
        bg="#42c84f"
        color="#fcfff9"
        hoveredBg="#0d6494"
        hoveredColor="#fcfff9"
        text="Send"
        type="submit"
        disabled={!isFormFilled}
      />
    </form>
  );
}
