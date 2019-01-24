import { createStore, combineReducers } from 'redux';

// ACTIONS
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// Expense Reducer
const expenseReducerDefaultState = []
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    default:
    return state;
  } 
}

// Filter Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      default:
      return state;
    }
  }


// create a global store for our reducers and combine them using Redux combineReducers Function
const store = createStore(combineReducers({
  expenses: expenseReducer,
  filters: filtersReducer
})
);


// console the state of the store reducer
console.log(store.getState());



const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

