import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "./Reducers";

export const configureStore = () => {

    const store = createStore(rootReducers, applyMiddleware(thunk));

    return store;
}