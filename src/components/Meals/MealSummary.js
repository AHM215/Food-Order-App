import React from "react";

import classes from "./MealSummary.module.css";
const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose oyour favorite meal form our broad selection of available meals
        and enjowy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients , just -in-time
        and of course by experienced chefs!
      </p>
    </section>
  );
};
export default MealSummary;
