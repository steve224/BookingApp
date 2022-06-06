import { types } from "../types";

export const get_all_restaurants = () => {
    return (dispacth) => dispacth({
        type: types.GET_ALL_RESTAURANTS,
        // payload: 
    });
}

export const get_featured_restaurant = () => {
    return (dispacth) => dispacth({
        type: types.GET_FEATURED_RESTAURANT,
        // payload: 
    })
}