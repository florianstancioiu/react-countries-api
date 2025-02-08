import { createContext, useState, useEffect } from "react";

export const CountriesContext = createContext({
  countries: [],
  isLoading: false,
  searchKeyword: "",
});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      const url =
        searchKeyword === ""
          ? `https://restcountries.com/v3.1/all`
          : `https://restcountries.com/v3.1/name/${searchKeyword}`;

      try {
        setIsLoading(true);
        const response = await fetch(url);
        const jsonResponse = await response.json();

        if (response.ok) {
          setCountries(jsonResponse);
        } else {
          setCountries([]);
        }

        setIsLoading(false);
      } catch (e) {
        console.log("There was an error trying to fetch the countries", e);
        setIsLoading(false);
      }
    };

    let countriesTimeout = setTimeout(getCountries, 500);

    return () => clearTimeout(countriesTimeout);
  }, [searchKeyword]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        isLoading,
        setIsLoading,
        searchKeyword,
        setSearchKeyword,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
