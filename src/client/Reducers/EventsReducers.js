import { types } from "../types";

// const events = [
//         {
//             name: "testFirstEvents",
//             description: "testFirstDescription"
//         },
//         {
//             name: "testSecondEvent",
//             description: "testSecondDescription"
//         },
//         {
//             name: "testThirdEvent",
//             description: "testThirdDescription"
//         },
//         {
//             name: "testFourthEvent",
//             description: "testFourthDescription"
//         }
// ]

// const featuredEvent = {
//     name: "testFeaturedEvent",
//     description: "featuredEventDescription"
// }



const initialState = {
    
    FeaturedEvent: {
        name: "testFeaturedEvent",
        description: "featuredEventDescription"
    },

    Events: [
        {
            name: "testFirstEvents",
            description: "testFirstDescription"
        },
        {
            name: "testSecondEvent",
            description: "testSecondDescription"
        },
        {
            name: "testThirdEvent",
            description: "testThirdDescription"
        },
        {
            name: "testFourthEvent",
            description: "testFourthDescription"
        }
    ],
    
    error: null
}

export function EventsReducers(state = initialState, action){

    switch(action.type){

        case types.GET_FEATURED_EVENT:
            // console.log("dispacthh", action.payload);
            return{
                ...state,
                FeaturedEvent: action.payload
            };
        case types.GET_ALL_EVENTS:
            // console.log("dispacthhhh", action.payload);
            return{
                ...state,
                Events: action.payload
            };
        case types.ERROR:
            return{
                ...state,
                error: action.payload
            };
        default:
            return state;     
    }
}