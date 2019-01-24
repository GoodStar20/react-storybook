import { createStore } from "redux";


// Action Generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementBy = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})


// set Count
const setCount = ({ setCount = 100} = {}) => ({
  type: 'SET',
  setCount
})

// reset Count
const resetCount = ({ resetCount = 0} = {}) => ({
  type: 'RESET'
})



// Redux Store
const store = createStore((state = { count: 0 }, action) => {
 switch (action.type) {
  case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    };
  
  case 'RESET':
    return {
      count: action.resetCount
    };

  case 'SET':
    return {
      count: action.setCount
    };
   
    case 'DECREMENT': 
    // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    return {
      count: state.count - action.decrementBy
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

// store.dispatch({
//   type: "INCREMENT"
// });


// custom arguments for dynamic action generators
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount()); 
store.dispatch(setCount())
store.dispatch(resetCount())

// store.dispatch({
//   type: "RESET"
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 5
// });

// I'd like to reset the count to zero

// console.log(store.getState());