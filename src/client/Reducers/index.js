import { combineReducers } from "redux";
import { CategoryReducers } from "./CategoryReducers";
import { EventsReducers } from "./EventsReducers";
import { RestaurantsReducers } from "./RestaurantsReducers";


export const rootReducers = combineReducers({
    Category: CategoryReducers,
    Events: EventsReducers,
    Restaurants: RestaurantsReducers
});