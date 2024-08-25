import { useState } from "react";
import History from "../Components/History";
import PersonalPageSidebar from "../Components/PersonalPageSidebar";
import { Outlet, useLocation } from "react-router-dom";
import UserIcon from "../../assets/icons/user.svg?react";
import DocIcon from "../../assets/icons/document.svg?react";
import HeartIcon from "../../assets/icons/like.svg?react";
import ClockIcon from "../../assets/icons/clock-3.svg?react";
import EyeIcon from "../../assets/icons/eye.svg?react";
import GiftIcon from "../../assets/icons/gift.svg?react";
import LogoutIcon from "../../assets/icons/logout.svg?react";

export default function PersonalLayout() {
  const { pathname: path, search } = useLocation();
  const pathname = path + search;

  const [user, setUser] = useState({
    first_name: "Ronald",
    last_name: "Richards",
    phone_number: "(505) 555-0125",
    email: "ronaldrichards@gmail.com",
    date_of_birth: "02/04/1980",
    delivery_address: {
      country: "United Kingdom",
      city: "London",
      address: "235 Euston Road",
      postal_code: 45000,
    },
    wishList: [
      "2dcr57h44782u289uj9",
      "2ccr47h24782u289uj9",
      "2dcr57h44782u289uj2",
    ],
    waitList: ["2dcr57h44782u289uj9", "2ccr47h24782u289uj9"],
  });

  const links = [
    {
      name: "My account",
      link: "/account",
      icon: <UserIcon className="personal-page__icon path-filled" />,
      showTotal: false,
    },
    {
      name: "My orders",
      link: "/orders",
      icon: <DocIcon className="personal-page__icon" />,
      showTotal: false,
    },
    {
      name: "Wishlist",
      link: "/wishlist",
      icon: <HeartIcon className="personal-page__icon path-filled" />,
      showTotal: true,
      total: user.wishList.length,
    },
    {
      name: "Waitlist",
      link: "/waitlist",
      icon: <ClockIcon className="personal-page__icon" />,
      showTotal: true,
      total: user.waitList.length,
    },
    {
      name: "Viewed products",
      link: "/viewed-products",
      icon: <EyeIcon className="personal-page__icon" />,
      showTotal: false,
    },
    {
      name: "My bonus account",
      link: "/bonus",
      icon: <GiftIcon className="personal-page__icon stroked" />,
      showTotal: false,
    },
    {
      name: "Log out",
      link: "",
      icon: <LogoutIcon className="personal-page__icon" />,
      showTotal: false,
    },
  ];

  const currentLink = links.find((el) => {
    if (pathname.startsWith(el.link)) {
      return el;
    }
  });

  return (
    <main className="main">
      <History
        history={[
          {
            name: currentLink?.name,
            link: pathname,
          },
        ]}
      />
      <div className="personal-layout">
        <h1 className="heading heading--primary heading--page">
          <span>Personal account</span>
        </h1>
        <div className="personal-layout__container grid col-min-auto gap-4">
          <PersonalPageSidebar links={links} />
          <Outlet />
        </div>
      </div>
    </main>
  );
}
