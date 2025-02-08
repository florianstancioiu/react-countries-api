import classes from "./Country.module.css";
import { useParams } from "react-router";

const Country = () => {
  const { countryId } = useParams();

  return (
    <div className={classes["content-wrapper"]}>
      <p>You are in country page and the id is: {countryId}</p>
    </div>
  );
};

export default Country;
