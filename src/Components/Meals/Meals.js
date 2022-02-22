import React from "react";
import MealsSmmary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSmmary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
