import classes from "./Sidebar.module.css";

const Sidebar = () => {
  // replace the current variables with context variables
  const countries = [];
  const searchKeyword = "";

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
