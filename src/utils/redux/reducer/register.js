const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_PENDING": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "REGISTER_FULFILLED": {
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isError: false,
        message: action.payload.data,
      };
    }
    case "REGISTER_REJECTED": {
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default register;
