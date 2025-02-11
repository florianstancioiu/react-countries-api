import { createContext, useState, useEffect, useContext } from "react";

const initialCountriesData = {
  countries: [],
  isLoading: false,
  searchKeyword: "",
};

// implement CountriesContext and CountriesContext.Provider
