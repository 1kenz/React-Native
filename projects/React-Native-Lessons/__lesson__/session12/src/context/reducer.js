function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      // state.counter = state.counter + 1;
      return { ...state, counter: state.counter + 1 };

    case 'DECREASE_COUNTER':
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
}

export { reducer };
