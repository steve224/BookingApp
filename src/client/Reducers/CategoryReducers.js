import { types } from "../types";

const initialState = {
    SelectedCategory: "Events"
}

export function CategoryReducers(state = initialState, action){

    // console.log("action payload", action.payload);
    switch(action.types){
        case types.GET_CATEGORY:
            return {
                ...state,
                selectedCategory: state.SelectedCategory
            };
        case types.SET_CATEGORY:
            return{
                ...state,
                selectedCategory: action.payload
            }
        default:
            return state;    
    }

}

