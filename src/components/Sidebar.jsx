import classes from "./Sidebar.module.css";
import { useContext } from "react";
import { CountriesContext } from "../store/CountriesContext";

const Sidebar = () => {
  const { countries, searchKeyword } = useContext(CountriesContext);

  return (
    <aside className={classes.sidebar}>
      <p>There are {countries.length} countries in page</p>
      {searchKeyword.trim() === "" && (
        <p>You haven't searched for anything yet</p>
      )}
      {searchKeyword.trim() !== "" && (
        <p>
          And we search for the following keyword:{" "}
          <strong>{searchKeyword}</strong>
        </p>
      )}
    </aside>
  );
};

export default Sidebar;
