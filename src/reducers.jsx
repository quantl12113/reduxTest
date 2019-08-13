import { combineReducers } from "redux";
const defaultState = { value: 0 }

const todo = (state = defaultState, action) => {
  switch (action.type) {
    case 'up': 
      return { value: state.value+1};
    case 'down': 
      return {value: state.value-1};
    default: 
      return state;
  }
}

const todoApp = combineReducers({
  todo,
})

export default todoApp;