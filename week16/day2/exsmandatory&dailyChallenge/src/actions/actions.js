//List of action's names that the reducer will define what state to change in each action
export const increment = (hello) => {
  return {
    //I'm getting the type and the payload from the dispatch in App.js
    type: "increment",
    payload: hello,
  };
};

export const decrement = () => {
  //I'm getting the type and the payload from the dispatch in App.js
  return {
    type: "decrement",
  };
};

export const showDetails = (movie) => {
  return {
    type: "showDetails",
    payload: movie,
  };
};
