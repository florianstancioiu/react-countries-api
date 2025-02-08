import { useContext } from "react";
import Country from "../components/Country";
import Loading from "../components/Loading";
import Sidebar from "../components/Sidebar";
import FilterCountries from "../components/FilterCountries";
import classes from "./Home.module.css";
import { CountriesContext } from "../store/CountriesContext";

const Home = () => {
  const { isLoading, countries } = useContext(CountriesContext);

  return (
    <>
      <FilterCountries />
      <div className={classes["content-wrapper"]}>
        <main className={classes.countries}>
          {isLoading && <Loading />}
          {!isLoading &&
            countries.map((country) => (
              <Country key={country.name.common} {...country} />
            ))}
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
