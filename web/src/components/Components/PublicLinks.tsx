import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

type PublicLinksProps = {
  size: "mobile" | "desktop";
  cb?: () => void;
};

export default function PublicLinks({ size, cb }: PublicLinksProps) {
  const { pathname: path, search } = useLocation();
  const pathname = path + search;
  const links = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Shipping and payment",
      link: "/shipping-and-payment",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Sale",
      link: "/sale",
    },
  ];

  return (
    <>
      {links.map((el) => {
        return (
          <Link
            to={el.link}
            key={uuid()}
            className={
              pathname === el.link
                ? `nav__link ${size} nav__link--active`
                : `nav__link ${size}`
            }
            onClick={cb}
          >
            {el.name}
          </Link>
        );
      })}
    </>
  );
}
