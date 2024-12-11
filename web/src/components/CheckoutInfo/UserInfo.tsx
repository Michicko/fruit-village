import { useRef, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./CheckoutInfos.module.css";
import { isFormDataFilled } from "../../helpers";

export default function UserInfo() {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
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
        label="First name"
        type="text"
        name="firstname"
        id="firstname"
        onChange={onChange}
      />
      <Input
        label="Last name"
        type="text"
        name="lastname"
        id="lastname"
        onChange={onChange}
      />
      <Input
        label="Phone number"
        type="tel"
        name="phonenumber"
        id="phonenumber"
        onChange={onChange}
      />
      <Input
        label="E-mail"
        type="email"
        name="email"
        id="email"
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
