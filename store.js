import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import data from "./pages/API/data.json";

// initial state
const startState = {
    cards: []
}

// Actions
export const initialCards = () => {
    return {
         type: "INITIALCARDS",
         cards: data
    }
}

export const addItems = () => {
    return {
        type: "ADD",
        item
    }
} // just for example

// Reducers
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIALCARDS":
            return {
                cards: action.cards
            }
        case "ADD":
            return {
                ...state,
                cards: [...state.cards, action.item]
            }
        default:
            return state
    } 

}

// create store
const store = ( initialState = startState ) => {
    return createStore(reducer, initialState);
}

export const initStore = createWrapper(store); // a wrapper that simplifies all the redux store