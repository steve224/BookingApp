import { types } from "../types";


export const get_category = () => {
    return (dispatch) => dispatch({
        type: types.GET_CATEGORY,
        // payload: 
    })
}

export const set_category = (selected) => {
    return (dispatch) => dispatch({
        type: types.GET_CATEGORY,
        payload: selected
    })
}