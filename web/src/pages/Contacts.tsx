import Phone from "../assets/icons/phone.svg?react";
import PhoneFilled from "../assets/icons/phone-filled.svg?react";
import Whatsapp from "../assets/icons/whatsapp.svg?react";
import Address from "../assets/icons/address.svg?react";

export default function Contacts() {
  return (
    <main className="main">
      <h1 className="primary-heading">
        Contacts <span className="line"></span>
      </h1>
      <section className="section section-about contact-cards">
        <div className="contacts-card nums">
          <div className="contact-info-desc">
            <Phone className="icon sm green" />
            <p>Phone numbers</p>
          </div>
          <div className="contact-info">
            <div className="icon-box">
              <PhoneFilled className="icon md path-filled" />
            </div>
            <p className="lg">(808) 555-0111</p>
          </div>
          <div className="contact-info">
            <div className="icon-box">
              <Whatsapp className="icon md path-filled" />
            </div>
            <p className="lg">(808) 555-0222</p>
          </div>
        </div>
        <div className="contacts-card">
          <div className="contact-info-desc">
            <Address className="icon sm green" />
            <p>Address</p>
          </div>
          <div className="contact-info f-d">
            <p>Suite 12</p>
            <p>Queens House.</p>
            <p>180 Tottenham Court Road.</p>
            <p>London W1T 7PD.</p>
          </div>
        </div>
      </section>
      <section className="section section-page map">
        <iframe
          width="100%"
          height="300"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, 180 Tottenham Court Road, London&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="map"
        ></iframe>
      </section>
    </main>
  );
}
