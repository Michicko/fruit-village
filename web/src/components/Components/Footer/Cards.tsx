import MasterCard from "../../../assets/icons/master-card.svg?react";
import Visa from "../../../assets/icons/visa.svg?react";

export default function Cards() {
  return (
    <div className="footer__icons">
      <div className="footer__icon-box">
        <Visa className="footer__icon" />
      </div>
      <div className="footer__icon-box">
        <MasterCard className="footer__icon" />
      </div>
    </div>
  );
}
