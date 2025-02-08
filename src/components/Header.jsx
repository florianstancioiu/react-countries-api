import classes from "./Header.module.css";

import { Link } from "react-router";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-menu"]}>
        <Link to="/">React Countries App</Link>
        <div className={classes["right-side-menu"]}>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
