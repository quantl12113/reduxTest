import { combineReducers } from "redux";
const defaultState = { value: 10 }

const todo = (state = defaultState, action) => {
  switch (action.type) {
    case 'up': return {state: state.value+1};
    case 'down': return {state: state.value-1};
    default: return state;
  }
}

const todoApp = combineReducers({
  todo,
})

export default todoApp;