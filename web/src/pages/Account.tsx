import { useEffect } from "react";
import usePersonalPageContext from "../hooks/usePersonalPageContext";
import Info from "../components/Info/Info";
import RoundedInfo from "../components/Info/RoundedInfo";
import RoundedInfoForm from "../components/Info/RoundedInfoForm";

export default function Account() {
  const { setPageTitle } = usePersonalPageContext();

  useEffect(() => {
    setPageTitle("My account");
  }, [setPageTitle]);

  const allergies = [
    {
      id: "djjfjf",
      name: "apricots",
    },
    {
      id: "fy7gugy",
      name: "bananas",
    },
    {
      id: "jdjfhi",
      name: "kiwi",
    },
  ];

  return (
    <>
      <section className="section section-page">
        <h2 className="sm-heading">Personal data</h2>
        <div className="infos">
          <Info name="First name" type="text" intialValue="Ronald" />
          <Info name="Last name" type="text" intialValue="Richards" />
          <Info name="Phone number" type="tel" intialValue="(505) 555-0125" />
          <Info
            name="Email"
            type="email"
            intialValue="ronaldrichards@gmail.com"
          />
          <Info name="Date of birth" type="date" intialValue="1980-04-02" />
        </div>
      </section>
      <section className="section section-page">
        <h2 className="sm-heading">Delivery address</h2>
        <div className="infos">
          <Info name="City" type="text" intialValue="London" />
          <Info name="Address" type="text" intialValue="235 Euston road" />
          <Info name="Postal code" type="number" intialValue={45000} />
        </div>
      </section>
      <section className="section section-page">
        <h2 className="sm-heading">Allergy information</h2>
        <p>If you're allergic to any fruit, write to us about it.</p>
        <div className="allergies-box">
          <div className="allergies">
            {allergies.map((allergy) => {
              return <RoundedInfo text={allergy.name} key={allergy.id} />;
            })}
          </div>
          <RoundedInfoForm name={"allergy"} />
        </div>
      </section>
    </>
  );
}
