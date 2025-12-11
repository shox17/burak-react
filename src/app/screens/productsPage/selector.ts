import { createSelector } from "reselect";
import { AppRootState, ProductsPageState } from "../../../lib/types/screen";

export const retrieveRestaurant = createSelector(
  (state: AppRootState) => state.productsPage,
  (productsPage: ProductsPageState) => productsPage.restaurant
);

export const retrieveChosenProduct = createSelector(
  (state: AppRootState) => state.productsPage,
  (productsPage: ProductsPageState) => productsPage.chosenProduct
);

export const retrieveProducts = createSelector(
  (state: AppRootState) => state.productsPage,
  (productsPage: ProductsPageState) => productsPage.products
);
