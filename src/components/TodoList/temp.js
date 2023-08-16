//REDUCER
const initValue = { value: 0 };
const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
    //
  }
};
// ACTion
// ACTION create
