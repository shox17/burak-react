import { createSelector } from "reselect";
import { AppRootState, HomePageState } from "../../../lib/types/screen";

export const retrievePopularDishes = createSelector(
  (state: AppRootState) => state.homePage,
  (homePage: HomePageState) => homePage.popularDishes
);

export const retrieveNewDishes = createSelector(
  (state: AppRootState) => state.homePage,
  (homePage: HomePageState) => homePage.newDishes
);

export const retrieveTopUsers = createSelector(
  (state: AppRootState) => state.homePage,
  (homePage: HomePageState) => homePage.topUsers
);
