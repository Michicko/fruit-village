import { brands } from "../data";
import { v4 as uuid } from "uuid";
import Checkmark from "../assets/icons/check-circle.svg?react";
import Stopwatch from "../assets/icons/stopwatch.svg?react";
import Wallet from "../assets/icons/wallet.svg?react";
import Userlove from "../assets/icons/user-love.svg?react";
import PageCard from "../components/PageCard/PageCard";

export default function About() {
  const advantages = [
    {
      id: uuid(),
      icon: <Checkmark className="icon md path-filled" />,
      title: "Proven quality",
      description:
        "The quality of all products in our range is confirmed by certificates and international HACCP certificate.",
    },
    {
      id: uuid(),
      icon: <Stopwatch className="icon md filled" />,
      title: "Fast delivery",
      description:
        "We accept, process orders 24/7 and deliver them to customers door by our own courier service",
    },
    {
      id: uuid(),
      icon: <Wallet className="icon md filled" />,
      title: "Attractive prices",
      description:
        "We import our own products so the cost of our product is one of the lowest in the market",
    },
    {
      id: uuid(),
      icon: <Userlove className="icon md filled" />,
      title: "Customer trust",
      description:
        "3000+ regular customers across Europe: partners, retail chains and regular families",
    },
  ];

  return (
    <main className="main">
      <h1 className="primary-heading">
        About <span className="line"></span>
      </h1>
      <section className="section section-about">
        <h2 className="sm-heading">About our company</h2>
        <p>
          <span className="green">Fruit Village</span> - is the distributor of
          exotic fruits with delivery to apartments and establishment. Speed and
          stability delivery, maintenance of high quality and the wide range
          product and of our main products.
        </p>
        <p>
          In our online store regardless of seasons, you can order fruits and
          vegetables from more than 30 countries. After all we independently
          organize imports from the most remote parts of the world. We work with
          the best producers in Ecuador, Sri Lanka, Chile, Vietnam, Thailand,
          Malaysia, Takjistan, Mexico, Brazil, Egypt, Spain, France and the
          Netherlands.
        </p>
        <p>
          To ensure that you receive only the freshest vegetables and fruits,
          our team daily analyzes the market needs and requirements of partners,
          select the best suppliers, monitors the balance and quality of the
          range. We listen to the opinions of customers, constantly improve and
          become better for you.
        </p>
      </section>
      <section className="section section-about">
        <h2 className="sm-heading">Our partners</h2>
        <p>
          <span className="green">Fruit Village</span> as been working with
          clients for more than {new Date().getFullYear() - 2011} years.
          Currently more than 1000 partners in the largest cities in Europe
          maintain stable partnership with us. We are trusted by Cafes,
          restaurant, bars, bistros, hotels, schools, kindergatens, shops,
          supermarkets, retail chains, catering and charities.
        </p>
        <p>We are responsible, flexible and always compromise.</p>
        <p>
          Each partner has a personal manager who is always in touch, knows
          about the specific of the client's work and organizes the delivery of
          the products as coviniently and efficiently. Thanks to this we are
          chosen by the best institutions.
        </p>
      </section>
      <section className="section section-about brands">
        {brands.map((brand) => {
          return (
            <img
              src={brand.image}
              alt={brand.name}
              className="brand-img"
              key={brand.id}
            />
          );
        })}
      </section>
      <section className="section section-about">
        <h2 className="sm-heading">Our advantages</h2>
        <div className="page-cards">
          {advantages.map((advantage) => {
            return (
              <PageCard
                title={advantage.title}
                icon={advantage.icon}
                description={advantage.description}
                key={advantage.id}
              />
            );
          })}
        </div>
      </section>
      <section className="section section-about">
        <h2 className="sm-heading">Our story</h2>
        <p>
          <span className="green">Fruit Village</span> started its work in early
          2013 in London. At the time we were the first desributor of fruits in
          the city to deliver fruits to the restaurant business.
        </p>
        <p>
          Over the years we have gone from a small local company to supplying
          exotic fruits to an importer NPI in Europe in its field expanding its
          abilities and range to meet market needs.
        </p>
      </section>
    </main>
  );
}
