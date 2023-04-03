import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import data from "./pages/API/data.json";

// create store
const store = ( initialState = startState ) => {
    return createStore(reducer, initialState);
}

export const initStore = createWrapper(store); // a wrapper that simplifies all the redux store