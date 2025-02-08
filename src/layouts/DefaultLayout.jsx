import { Outlet } from "react-router";
import Header from "../components/Header";
import classes from "./DefaultLayout.module.css";

export default () => {
  return (
    <>
      <div className={classes.page}>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
