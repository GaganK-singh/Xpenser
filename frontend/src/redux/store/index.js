import { legacy_createStore as createStore, combineReducers }  from 'redux';
// import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "../reducers/expenses";

const reducer = combineReducers({
    expenses: expenseReducer,
});
const initialState = {};
const store = createStore(reducer, initialState); 
//We Can also createStore but it is depriciated nowadays
// const store = configureStore(reducer, initialState);
export default store;