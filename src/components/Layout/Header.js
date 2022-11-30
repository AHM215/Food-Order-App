import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsimg from "../../assets/meals.jpg";
import HeaderCartButton from "../Cart/HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        ReactMeals
        <HeaderCartButton onClick={props.onConfirm} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimg} alt="A table full of delicious food !!" />
      </div>
    </Fragment>
  );
};
export default Header;
