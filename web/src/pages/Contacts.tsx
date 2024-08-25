import History from "../components/Components/History";
import GeneralPageSidebar from "../components/Components/GeneralPageSidebar";
import Phone from "../assets/icons/phone-light.svg?react";
import PhoneFilled from "../assets/icons/phone-dark.svg?react";
import Whatsapp from "../assets/icons/whatsapp-icon.svg?react";
import Location from "../assets/icons/location-2.svg?react";

export default function Contacts() {
  return (
    <main className="main">
      <History
        history={[
          {
            name: "Contacts",
            link: "/contacts",
          },
        ]}
      />
      <div className="page__container">
        <div className="page__content">
          <h1 className="heading heading--primary heading--page">
            <span>Contacts</span>
          </h1>

          <section className="section page__section">
            <div className="grid col-2">
              <div className="contacts__box">
                <p>
                  <Phone className="icon icon--primary" />{" "}
                  <span>Phone numbers</span>
                </p>
                <div className="phones">
                  <div>
                    <div className="contacts__icon-box">
                      <PhoneFilled className="contacts__icon" />
                    </div>
                    <h4>(808) 555-0111</h4>
                  </div>
                  <div>
                    <div className="contacts__icon-box">
                      <Whatsapp className="contacts__icon path-fill" />
                    </div>
                    <h4>(808) 555-0111</h4>
                  </div>
                </div>
              </div>
              <div className="contacts__box">
                <p>
                  <Location className="icon icon--primary" />{" "}
                  <span>Address</span>
                </p>
                <p>Suite 12</p>
                <p>Queen House</p>
                <p>180 Tottenham Court Road,</p>
                <p>London W1T 7PD</p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="contacts__map-box"></div>
          </section>
        </div>
        <GeneralPageSidebar />
      </div>
    </main>
  );
}
