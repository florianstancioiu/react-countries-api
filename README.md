# Things you will learn about React while developing this project

- CSS Modules
- React Router
- useContext hook
- useEffect hook
- debounce

## How to use the `useContext` hook

1. Create a file in `store` dir for your needs, example: `CountriesContext.jsx`, `AuthContext.jsx`, `DarkModeContext.jsx`
2. Import `createContext` and use it to instantiate a new context variable, example: `const CountriesContext = createContext(initialData);`
3. Create initial data (usually an object) to be used inside of all children, example: `{countries: []}`

```js
import { createContext } from "react";

export const CountriesContext = createContext({
  countries: [],
});
```

4. Create a provider component with `children` prop for your newly created context

```js
export const CountriesProvider = ({ children }) => {
  // reactive variable needed inside of all components
  const [countries, setCountries] = useState([]);

  return (
    // pass reactive variable to all children components with Provider component
    // with the help of value attribute
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};
```

5. Apply `Provider` component to all the children that needs the global context inside `main.jsx` or `App.jsx`

```js
import { createRoot } from "react-dom/client";
import App from "./App.js";

// import created Provider and use it to wrapp all children that needs the contenxt
import { CountriesProvider } from "./store/CountriesContext.jsx";

createRoot(document.getElementById("root")).render(
  <CountriesProvider>
    <App />
  </CountriesProvider>
);
```

6. Use the context inside of your child components, like so:

```js
import Loading from "../components/Loading";
import { useContext } from "react";
import { CountriesContext } from "../store/CountriesContext";

const Home = () => {
  const { isLoading, countries } = useContext(CountriesContext);

  return <>{isLoading && <Loading />}</>;
};

export default Home;
```

## How to create a router `Layout.jsx` file

1. Create a `layouts/DefaultLayout.jsx` file and import the `Outlet`

```js
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
```

2. Populate the layout with additional custom components like `<Header />`, `<Footer />`, `<Sidebar />`. We only add the `<Header />` component (and some wrapper class) in the following example:

```js
import { Outlet } from "react-router";
import Header from "../components/Header";
import classes from "./DefaultLayout.module.css";

export default () => {
  return (
    <>
      <div className={classes.page}>
        <Header />
        <div>
          {/* the Outlet component will be replaced with the content of children pages */}
          <Outlet />
        </div>
      </div>
    </>
  );
};
```

3. Import `DefaultLayout` component in routes file (or where you defined the routes: `main.js` or `App.js`) and use it with children `<Route>` components like in the following example:

```js
import { Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const routes = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/countries/:countryId" element={<Country />} />
    </Route>
  </Routes>
);

export default routes;
```

4. Retrive the `:countryId` param from an url like: `/countries/Romania`

```js
import { useParams } from "react-router";

const Country = () => {
  const { countryId } = useParams();

  return <div>You are in country page and the id is: {countryId}</div>;
};

export default Country;
```
