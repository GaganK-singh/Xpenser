import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from '../action-types/expenses';

export const addXpense = (data) => {
    console.log(data);
    return {
        type: ADD_EXPENSE,
        data,
    };
};

export const deleteXpense = (data) => {
    console.log(data);
    return {
        type: DELETE_EXPENSE,
        data,
    };
};

export const searchXpense = (query) => {
    console.log(query);
    return {
        type: SEARCH_EXPENSE,
        query,
    };
};
