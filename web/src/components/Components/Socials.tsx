import Facebook from "../../assets/icons/facebook.svg?react";
import Twitter from "../../assets/icons/twitter-x.svg?react";
import Telegram from "../../assets/icons/telegram-plane.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import { v4 as uuid } from 'uuid';

export default function Socials() {
  const socials = [
    {
      link: "https://instagram.com",
      icon: <Instagram className="social__icon" />,
    },
    {
      link: "https://telegram.com",
      icon: <Telegram className="social__icon" />,
    },
    {
      link: "https://x.com",
      icon: <Twitter className="social__icon" />,
    },
    {
      link: "https://facebook.com",
      icon: <Facebook className="social__icon" />,
    },
  ];
  return (
    <>
      {socials.map((social) => {
        return (
          <a href={social.link} target="_blank" className="social" key={uuid()}>
            {social.icon}
          </a>
        );
      })}
    </>
  );
}
