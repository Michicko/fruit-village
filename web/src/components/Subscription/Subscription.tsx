import Button from "../Button/Button";
import styles from "./Subscription.module.css";
import CustomLink from "../CustomLink/CustomLink";

export default function Subscription() {
  return (
    <div className={styles.subscription}>
      <h3 className="section-heading">Get a 7% discount</h3>
      <form className={styles["subscription-form"]}>
        <input type="email" name="email" id="email" placeholder="Email" />
        <Button
          bg="#42c84f"
          color="#fcfff9"
          hoveredBg="#0d6494"
          hoveredColor="#fcfff9"
          text="Send"
          type={"submit"}
        />
        <p className="form-text">
          By subscribing to our newsletter, you're agreeing to our{" "}
          <CustomLink
            noIcon={true}
            text="Data protection statement"
            url="/data-protection"
            color="dark"
            tone={'tiny'}
            underline={true}
            inline={true}
          />
        </p>
      </form>
    </div>
  );
}
