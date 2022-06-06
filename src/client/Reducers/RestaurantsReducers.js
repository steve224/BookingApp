import { types } from "../types";

const initialState = {
    
    FeaturedRestaurant: {
        name: "FeaturedRestaurant",
        description: "FeaturedRestaurantDescription",
    },

    Restaurants: [
        {
            name: "firstRestaurant",
            description: "firstRestaurant"
        },
        {
            name: "secondRestaurant",
            description: "secondRestaurant"
        },
        {
            name: "thirdRestaurant",
            description: "thirdRestaurant"
        },
        {
            name: "fourthRestaurant",
            description: "fourthRestaurant"
        }
    ],

    error: null

}

export function RestaurantsReducers(state = initialState, action){

    switch(action.type){

        case types.GET_FEATURED_RESTAURANT:
            return{
                ...state,
                FeaturedRestaurant: action.payload
            };
        case types.GET_ALL_RESTAURANTS:
            return{
                ...state,
                Restaurants: action.payload
            };
        default:
            return state;

    }
}