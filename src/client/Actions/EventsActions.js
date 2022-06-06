import { types } from "../types";

export const get_all_events = () => {
    return (dispatch) => dispatch({
        type: types.GET_ALL_EVENTS,
        // payload: Events
    })
}


export const get_featured_event = () => {
    return (dispatch) => dispatch({
        type: types.GET_FEATURED_EVENT,
        // payload: FeaturedEvent
    })
}