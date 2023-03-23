const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "USER_PENDING": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "USER_FULFILLED": {
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isError: false,
        message: action.payload.data,
      };
    }
    case "USER_REJECTED": {
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

export default user;
