import classes from "./FilterCountries.module.css";

const FilterCountries = () => {
  // replace the current variables with context variables
  const searchKeyword = "";
  const setSearchKeyword = (value) => console.log("implement me");

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
