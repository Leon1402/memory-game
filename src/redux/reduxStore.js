import { createStore } from 'redux';

const CHANGE_NAME = 'CHANGE_NAME';
const START_TIMER = 'START_TIMER';
const ADD_RESULTS = 'ADD_RESULTS';
const START_GAME = 'START_GAME';

let initialState = {
  name: '',     // имя ользователя, вводимое перед игрой
  timer: 0,     // таймер, подсчитывает время
  results: [],  // хранит все результаты
  isGameStarted: false    // импользуется, для того, чтобы при перезагрузке страницы
};                        // перенаправляло на стартовое окно

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
    case START_GAME: 
      return {
        ...state,
        isGameStarted: true
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

export const startGame = () => ({
  type: START_GAME
})

let store = createStore(reducer);

export default store;