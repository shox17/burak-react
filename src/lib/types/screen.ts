import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
}

/** HOME PAGE **/
export interface HomePageState {
  PopularDishes: Product[];
  NewDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE **/

/** ORDER PAGE **/
