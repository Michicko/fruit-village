import { Link } from "react-router-dom";
import User from "../../assets/icons/user-dark.svg?react";
import PublicLinks from "../Components/PublicLinks";
import { user } from "../../data";

export default function SmallNav() {
  return (
    <div className="nav__small">
      <div className="nav__small-links">
        <PublicLinks size={'desktop'} />
      </div>
      <div className="nav__small-end">
        {!user ? (
          <Link to={"/login"} className="nav__link">
            login
          </Link>
        ) : (
          <Link to={"/account"} className="nav__small-profile">
            <p className="light">{user.first_name}</p>
            <User className="nav__small-icon" />
          </Link>
        )}
      </div>
    </div>
  );
}
