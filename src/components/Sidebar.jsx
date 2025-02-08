import classes from "./Sidebar.module.css";
import { useContext } from "react";
import { CountriesContext } from "../store/CountriesContext";

const Sidebar = () => {
  const { countries, searchKeyword } = useContext(CountriesContext);

  return (
    <aside className={classes.sidebar}>
      <p>There are {countries.length} countries in page</p>
      <p>
        And we search for the followind keyword:{" "}
        <strong>{searchKeyword}</strong>
      </p>
    </aside>
  );
};

export default Sidebar;
