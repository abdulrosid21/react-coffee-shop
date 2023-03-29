const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const menus = (state = initialState, action) => {
  switch (action.type) {
    case "MENUS_DETAIL_PENDING": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "MENUS_DETAIL_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    }
    case "MENUS_DETAIL_REJECTED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: true,
        message: action.payload.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default menus;
