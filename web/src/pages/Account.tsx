import { useState } from "react";
import Info from "../components/Components/Info";
import { v4 as uuid } from "uuid";
import Allergy from "../components/Components/Allergy";
import Plus from "../assets/icons/plus.svg?react";

export default function Account() {
  const splitNameWithSpace = (str: string): string => {
    return str.replace(/_/g, " ");
  };

  interface PersonalData {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    date_of_birth: string;
  }

  interface DeliveryAddress {
    country: string;
    city: string;
    address: string;
    postal_code: number;
  }

  const [personalData, setPersonalData] = useState<PersonalData>({
    first_name: "Ronald",
    last_name: "Richards",
    phone_number: "(505) 555-0125",
    email: "ronaldrichards@gmail.com",
    date_of_birth: "02/04/1980",
  });

  const [deliveryAdress, setDeliveryAddress] = useState<DeliveryAddress>({
    country: "United Kingdom",
    city: "London",
    address: "235 Euston Road",
    postal_code: 45000,
  });

  const [isAllergyInputShown, setIsAllergyInputShown] = useState(false);
  const [allergy, setAllergy] = useState("");
  const [allergies, setAllergies] = useState(["banana", "kiwi"]);

  const removeAllergy = (allergy) => {};

  return (
    <div className="personal-layout__content">
      <div className="account__infos-box">
        <h3 className="heading heading--section">Personal data</h3>
        <div className="account__infos">
          {Object.keys(personalData).map((el) => {
            return (
              <Info
                name={splitNameWithSpace(el)}
                value={personalData[el as keyof typeof personalData]}
                key={uuid()}
              />
            );
          })}
        </div>
      </div>
      <div className="account__infos-box">
        <h3 className="heading heading--section">Delivery address</h3>
        <div className="account__infos">
          {Object.keys(deliveryAdress).map((el) => {
            return (
              <Info
                name={splitNameWithSpace(el)}
                value={deliveryAdress[el as keyof typeof deliveryAdress]}
                key={uuid()}
              />
            );
          })}
        </div>
      </div>
      <div className="account__infos-box">
        <h3 className="heading heading--section">Allergy information</h3>
        <p className="account__infos-lead">If you are allergic to any fruits write to us about it.</p>
        <div className="allergy__list">
          {allergies.map((allergy) => {
            return (
              <Allergy
                key={uuid()}
                allergy={allergy}
                removeAllergy={removeAllergy}
              />
            );
          })}
          <div className="allergy__form-box">
            {isAllergyInputShown ? (
              <form className="allergy__form">
                <input
                  type="text"
                  name="allergy"
                  id="allergy"
                  autoComplete="on"
                  value={allergy}
                />
                <button type="submit">save</button>
                <button
                  type="button"
                  onClick={() => setIsAllergyInputShown(false)}
                >
                  cancel
                </button>
              </form>
            ) : (
              <button
                className="allergy__btn"
                onClick={() => setIsAllergyInputShown(true)}
              >
                <Plus className="allergy__icon with-g" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
