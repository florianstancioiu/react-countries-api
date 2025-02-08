import { CountriesContext } from "../store/CountriesContext";
import { useContext } from "react";
import classes from "./FilterCountries.module.css";

const FilterCountries = () => {
  const { searchKeyword, setSearchKeyword } = useContext(CountriesContext);

  const onChangeSearchKeywordHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <form className={classes.form} action="#">
      <input
        type="text"
        placeholder="Search country"
        value={searchKeyword}
        onChange={onChangeSearchKeywordHandler}
      />
    </form>
  );
};

export default FilterCountries;
