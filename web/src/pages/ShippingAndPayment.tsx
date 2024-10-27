import Phone from "../components/Phone/Phone";
import { v4 as uuid } from "uuid";
import Cash from "../assets/icons/cash.svg?react";
import Creditcard from "../assets/icons/credit-card.svg?react";
import PageCard from "../components/PageCard/PageCard";

export default function ShippingAndPayment() {
  const paymentsOptions = [
    {
      id: uuid(),
      icon: <Cash className="icon md path-filled" />,
      title: "Cash",
      description:
        "You can pay for the order in cash upon receipt by our courier, after having checked the quality of the product.",
    },
    {
      id: uuid(),
      icon: <Creditcard className="icon md path-filled" />,
      title: "Payment online",
      description:
        "It is carried out through payment by card, System Apple, Google pay and paypal and after we complete your order in stock.",
    },
  ];
  return (
    <main className="main">
      <h1 className="primary-heading">
        Shipping and payment <span className="line"></span>
      </h1>
      <section className="section section-page">
        <h2 className="sm-heading">Payment</h2>
        <p>
          You can choose from three payment options, if necessary, you can
          always change the method of payment by calling our hotline{" "}
          <Phone
            text="(805) 555-0011"
            color="green"
            noIcon={true}
            showOnSmallScreen={true}
          />
        </p>
        <div className="page-cards">
          {paymentsOptions.map((option) => {
            return (
              <PageCard
                title={option.title}
                icon={option.icon}
                description={option.description}
                key={option.id}
              />
            );
          })}
        </div>
      </section>
      <section className="section section-page">
        <h2 className="sm-heading">Methods of delivery</h2>
        <p>
          The minimum order in our online store is $9.99. We deliver free of
          charge to the customer's door. Free shipping is possible when ordering
          from $29 or more (depending on the distance of the shipment).
        </p>
        <p>
          Delivery is carried out by our courier (when ordering from $29 or
          more) and postal operators UPS, SKyNet, FedEx.
        </p>
        <p>
          In case of force major situations requiring urgent delivery you can
          call the operator who will help solve your problem. The possibility of
          urgent delivery depends on the delivery area and the number of orders
          and is specified when confirming the order.
        </p>
      </section>
      <section className="section section-page">
        <h2 className="sm-heading">Price and completion</h2>
        <p>
          In each order we enclose and invoice with the composition and details
          of the order. The difference in cost between the order generated on
          the site and the order receieved by the customer is due to the actual
          weight of the product included in the order.
        </p>
        <p>
          Depending on the volume of the order and the categories of the
          selected goods it will packaged in one or more packages.
        </p>
        <p>
          We cannot always choose products to order according to the desired
          weight. For example, we cannot ship 1kg or pineapple, while the
          average weight of the fruit is 2kg.
        </p>
      </section>
    </main>
  );
}
