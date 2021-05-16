import { createStore } from 'redux';

const CHANGE_NAME = 'CHANGE_NAME';
const START_TIMER = 'START_TIMER';
const ADD_RESULTS = 'ADD_RESULTS';

let initialState = {
  name: '',
  timer: 0,
  results: [{name: 1, result: 123}]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      }
    case START_TIMER:
      return {
        ...state,
        timer: state.timer + 1
      }
    case ADD_RESULTS:
      return {
        ...state,
        results: [...state.results, { name: state.name, result: state.timer }]
      }
    default:
      return state;
  }
};

export const startTimer = () => ({
  type: START_TIMER
})

export const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    name
  }
}

  export const addResult = () => ({
    type: ADD_RESULTS,
  })


  let store = createStore(reducer);

  export default store;