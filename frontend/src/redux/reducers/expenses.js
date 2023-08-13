import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE} from "../action-types/expenses";

const initialList = () => {
    const lisst = localStorage.getItem("expense-list");
    let expenses = [];
    if(lisst) {
        expenses = JSON.parse(lisst);
    }
    return expenses;
}

const initialState={ 
    // It is used to store temporary data and whenever the webapp is reloaded then data will be lost
    // expenseList: [],
    
    // It is used to store data in local storage and whenever the webapp is reloaded then data will be remain the same without being lost
    expenseList: initialList(),
    query:"",
}

export const expenseReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_EXPENSE:{

            localStorage.setItem(
                "expense-list",
                JSON.stringify([...state.expenseList,action.data])
            )

            return{
                ...state,
                expenseList: [...state.expenseList, action.data],
            }
        }
        case DELETE_EXPENSE:{
            const {data} = action;
            const updatedList = state.expenseList.filter((item)=>item.createdAt !== data.createdAt);

            localStorage.setItem("expense-list",JSON.stringify(updatedList)); 
            return{
                ...state,
                expenseList: updatedList,
            }
        }

        case SEARCH_EXPENSE:{
            const {query} = action;
            return{
                ...state,
                query,
            }
        }

        default:
            return state;
    }
}