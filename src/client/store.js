// import { createStore, applyMiddleware } from "redux";
import { configureStore } from "./confiureStore";
// import thunk from "redux-thunk";

import { rootReducers } from "./Reducers/index";

export const store = configureStore(rootReducers);
// export const store = configureStore(rootReducers);

