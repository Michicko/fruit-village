import History from "../components/Components/History";
import Check from "../assets/icons/checkmark-circle-2.svg?react";
import Fast from "../assets/icons/stopwatch-icon.svg?react";
import Purse from "../assets/icons/purse.svg?react";
import UserTrust from "../assets/icons/user-heart.svg?react";
import GeneralPageSidebar from "../components/Components/GeneralPageSidebar";
import PageCard from "../components/Components/PageCard";
import { v4 as uuid } from "uuid";

export default function About() {
  const advantages = [
    {
      title: "Proven quality",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ullam maxime maiores optio suscipit!",
      icon: <Check className="page-card__icon" />,
    },
    {
      title: "Fast delivery",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ullam maxime maiores optio suscipit!",
      icon: <Fast className="page-card__icon" />,
    },
    {
      title: "Attractive prices",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ullam maxime maiores optio suscipit!",
      icon: <Purse className="page-card__icon" />,
    },
    {
      title: "Customer trust",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ullam maxime maiores optio suscipit!",
      icon: <UserTrust className="page-card__icon" />,
    },
  ];

  return (
    <main className="main">
      <History
        history={[
          {
            name: "About",
            link: "/about",
          },
        ]}
      />
      <div className="page__container">
        <div className="page__content">
          <h1 className="heading heading--primary heading--page">
            <span>About</span>
          </h1>
          <section className="section page__section">
            <h3 className="heading heading--section">About the company</h3>
            <p>
              <span className="primary">Fruit village</span> Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Nobis tempore dolorum
              molestias dignissimos nam iure so
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              ratione sunt iste, eveniet aperiam ducimus perferendis obcaecati
              debitis dicta! Recusandae ratione odio a sapiente cupiditate ullam
              non placeat. Id quasi aspernatur, ea impedit dolorem tempore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              et magnam repellat eos incidunt nam perferendis unde similique
              iste cumque eius, doloribus optio obcaecati. Nostrum incidunt
              dolorem sint dicta nobis.
            </p>
          </section>
          <section className="section page__section">
            <h3 className="heading heading--section">Our partners</h3>
            <p>
              <span className="primary">Fruit village</span> Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Nobis tempore dolorum
              molestias dignissimos nam iure so
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              ratione sunt iste, eveniet aperiam ducimus perferendis obcaecati
              debitis dicta! Recusandae ratione odio a sapiente cupiditate ullam
              non placeat. Id quasi aspernatur, ea impedit dolorem tempore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              et magnam repellat eos incidunt nam perferendis unde similique
              iste cumque eius, doloribus optio obcaecati. Nostrum incidunt
              dolorem sint dicta nobis.
            </p>
          </section>
          <section className="section page__section">
            <h3 className="heading heading--section">Our advantages</h3>
            <div className="page-card__list">
              {advantages.map((advantage) => {
                return <PageCard item={advantage} key={uuid()} />;
              })}
            </div>
          </section>
          <section className="section page__section">
            <h3 className="heading heading--section">Our story</h3>
            <p>
              <span className="primary">Fruit village</span> Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Nobis tempore dolorum
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              ratione sunt iste, eveniet aperiam ducimus perferendis obcaecati
              debitis dicta! Recusandae ratione
            </p>
          </section>
        </div>
        <GeneralPageSidebar />
      </div>
    </main>
  );
}
