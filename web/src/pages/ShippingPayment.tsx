import History from "../components/Components/History";
import Cash from "../assets/icons/cash.svg?react";
import Card from "../assets/icons/credit-card.svg?react";
import { v4 as uuid } from "uuid";
import GeneralPageSidebar from "../components/Components/GeneralPageSidebar";
import PageCard from "../components/Components/PageCard";

export default function ShippingPayment() {
  const payments = [
    {
      title: "Cash",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ullam maxime maiores optio suscipit!",
      icon: <Cash className="page-card__icon" />,
    },
    {
      title: "Payment online",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ullam maxime maiores optio suscipit!",
      icon: <Card className="page-card__icon" />,
    },
  ];

  return (
    <main className="main">
      <History
        history={[
          {
            name: "Shipping and payment",
            link: "/shipping-and-payment",
          },
        ]}
      />
      <div className="page__container">
        <div className="page__content">
          <h1 className="heading heading--primary heading--page">
            <span>Shipping and payment</span>
          </h1>
          <section className="section page__section">
            <h3 className="heading heading--section">Payment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.{" "}
              <a href="tel:(808) 555-0111" className="tel">
                (808) 555-0111
              </a>
            </p>
            <div className="page-card__list">
              {payments.map((pay) => {
                return <PageCard item={pay} key={uuid()} />;
              })}
            </div>
          </section>
          <section className="section page__section">
            <h3 className="heading heading--section">Methods of delivery</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              tempore dolorum molestias dignissimos nam iure so
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              ratione sunt iste, eveniet aperiam ducimus perferendis
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              et magnam repellat eos incidunt nam perferendis unde similique
              iste cumque eius.
            </p>
          </section>

          <section className="section page__section">
            <h3 className="heading heading--section">Price and completion</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              tempore dolorum
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. dfre ee
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              ratione sunt iste, eveniet aperiam duci
            </p>
          </section>
        </div>
        <GeneralPageSidebar />
      </div>
    </main>
  );
}
