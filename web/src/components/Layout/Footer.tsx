import { Link } from "react-router-dom";
import Cards from "../Footer/Cards";
import Logo from "../Components/Logo";
import { v4 as uuid } from "uuid";
import Socials from "../Components/Socials";

export default function Footer() {
  type LinkProps = {
    name: string;
    link: string;
  };

  const links = {
    catalog: [
      {
        name: "Apples, pear, persimmon",
        link: "/shop?category=apples,pear,persimmon",
      },
      {
        name: "Avocado",
        link: "/shop?category=avocado",
      },
      {
        name: "Berries",
        link: "/shop?category=berries",
      },
      {
        name: "Citrus",
        link: "/shop?category=citrus",
      },
      {
        name: "Exotic fruits",
        link: "/shop?category=exotic+fruits",
      },
      {
        name: "Grape",
        link: "/shop?category=grape",
      },
      {
        name: "Mango",
        link: "/shop?category=mango",
      },
      {
        name: "Peaches, apricots, plums",
        link: "/shop?category=peaches,apricots,plums",
      },
      {
        name: "Pineapple",
        link: "/shop?category=pineapple",
      },
      {
        name: "watermelons and melons",
        link: "/shop?category=watermelons+and+melons",
      },
    ],
    fruitVillage: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "blog",
        link: "/blog",
      },
      {
        name: "contacts",
        link: "/contacts",
      },
      {
        name: "public contract (offer)",
        link: "/public-contract",
      },
      {
        name: "shipping and payment",
        link: "/shipping-and-payment",
      },
      {
        name: "Technical support",
        link: "/technical-support",
      },
      {
        name: "Term of use",
        link: "/term-of-use",
      },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer__contacts">
        <Logo hideSm={false} />
        <p className="footer__contact">(808) 555-0111</p>
        <p className="footer__contact">(808) 555-0222</p>
      </div>
      <div className="footer__socials-box">
        <h5 className="footer__heading">Follow us</h5>
        <div className="footer__socials">
          <Socials />
        </div>
      </div>

      <Cards />
      <div className="footer__links-box">
        {Object.keys(links).map((keyEl) => {
          const linksArr = links[keyEl];
          return (
            <div className="footer__links" key={uuid()}>
              <h5 className="footer__heading">{keyEl}</h5>
              {linksArr.map((el: LinkProps) => {
                return (
                  <Link to={el.link} key={uuid()} className="footer__link">
                    {el.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      <p className="copy footer__text">
        &copy; 2011 - {new Date().getFullYear()} Fruit Village store - delivery
        of fruits
      </p>
      <div className="author">
        <p className="footer__text">
          designed by{" "}
          <a
            href="https://www.behance.net/vitaliiminakov"
            className="footer__link"
            target="_blank"
          >
            Vitalii Minakov
          </a>
        </p>
        <p className="footer__text">
          built by{" "}
          <a
            href="https://github.com/Michicko"
            target="_blank"
            className="footer__link"
          >
            Michky
          </a>
        </p>
      </div>
    </footer>
  );
}
