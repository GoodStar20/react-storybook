import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
 switch (action.type) {
  case 'INCREMENT':
    return {
      count: state.count + 11
    };
  
  case 'RESET':
    return {
      count: state.count = 0
    };
  
    case 'DECREMENT': 
    return {
      count: state.count - 1
    }
    default: 
    return state
 }
 
});

console.log(store.getState());

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
  type: "DECREMENT"
});

// I'd like to reset the count to zero

console.log(store.getState());