const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "IMAGE_PENDING": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "IMAGE_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data,
      };
    }
    case "IMAGE_REJECTED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.msg,
      };
    }
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
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data,
      };
    }
    case "USER_REJECTED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.msg,
      };
    }
    case "PROFILE_PENDING": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "PROFILE_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data,
      };
    }
    case "PROFILE_REJECTED": {
      return {
        ...state,
        data: action.payload.data.data,
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
