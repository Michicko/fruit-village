import { useRef, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Auth.module.css";
import { isFormDataFilled } from "../../helpers";

export default function Login() {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    <form className={styles.form} ref={formRef}>
      <Input
        label="E-mail"
        type="email"
        name="email"
        id="email"
        onChange={onChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        id="password"
        onChange={onChange}
      />
      <Button
        bg="#42c84f"
        color="#fcfff9"
        hoveredBg="#0d6494"
        hoveredColor="#fcfff9"
        text="Login"
        type="submit"
        disabled={!isFormFilled}
      />
    </form>
  );
}
