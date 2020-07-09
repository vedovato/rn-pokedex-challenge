import { INCREMENT, DECREMENT } from './types';

const STATE = {
  counter: 40,
};

const counterReducer = (state = STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: ++state.counter,
      };

    case DECREMENT:
      return {
        ...state,
        counter: --state.counter,
      };

    default:
      return state;
  }
};

export default counterReducer;
