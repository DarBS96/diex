const initState = {
  count: 0,
};
export const calculateReducer = (state = initState, action) => {
  // The action is coming from the actions
  // console.log(action);
  switch (action.type) {
    // 4. return the change of the state - prop_one to the store
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { ...state };
  }
};
