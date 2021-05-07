import {
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
  GET_PRODUCTS,
  SEARCH_DATA,

} from "./types.js";

const initialState = {
  data:[],
  isLoading:false,
  successMessage:"",
  successMessageToShow:"",
};

export const productDataReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_ERROR_MESSAGE:
      return { ...state, error: action.payload };
    case SET_SUCCESS_MESSAGE:
      return { ...state, success: action.payload };
    case GET_PRODUCTS:
      return { ...state,...action.payload };
    case SEARCH_DATA:
      return { ...state,...action.payload };
    default:
      return { ...state };
  }
};
