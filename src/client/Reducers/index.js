import { combineReducers } from "redux";
import { AppointmentReducers } from "./AppointmentReducers";
import { CategoryReducers } from "./CategoryReducers";
import { EventsReducers } from "./EventsReducers";
import { RestaurantsReducers } from "./RestaurantsReducers";


export const rootReducers = combineReducers({
    Category: CategoryReducers,
    Events: EventsReducers,
    Restaurants: RestaurantsReducers,
    Appointments: AppointmentReducers
});