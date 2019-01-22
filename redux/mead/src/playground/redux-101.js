import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
 switch (action.type) {
  case 'INCREMENT':
    return {
      count: state.count + 11
    };
  
  case 'RESET':
    return {
      count: 0
    };
  
    case 'DECREMENT': 
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    return {
      count: state.count - decrementBy
    }
    default: 
    return state
 }
 
});

store.subscribe(() => {
  console.log(store.getState());
})


// Actions
// I'd like to increment the count
// Implement dispatch() function from redux This is passed as an argument on a store to dispatch an action type
store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 5
});

// I'd like to reset the count to zero

// console.log(store.getState());