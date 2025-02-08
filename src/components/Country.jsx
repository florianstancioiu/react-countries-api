import classes from "./Country.module.css";
import { Link } from "react-router";

const Country = ({ capital, name, flag, population }) => {
  return (
    <div className={classes.country}>
      <Link
        to={`/countries/${name.common}`}
        className={classes["flag-wrapper"]}
      >
        <span>{flag}</span>
      </Link>
      <div className={classes["country-info"]}>
        <p>
          <strong>Country: {name.common}</strong>
        </p>
        <p>
          <strong>Capital: {capital}</strong>
        </p>
        <p>
          <strong>Population: {population}</strong>
        </p>
      </div>
    </div>
  );
};

export default Country;
