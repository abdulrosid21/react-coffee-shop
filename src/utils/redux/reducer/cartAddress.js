const initialState = {
  data: [],
};

const address = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return {
        ...state,
        data: [action.payload],
      };
    default:
      return state;
  }
};

export default address;
