import {
  ADD_NEW_SAGA,
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
  GET_PRODUCTS_SAGA,
  GET_PRODUCTS,
  UPDATE_PRODUCT_SAGA_DATA,
  SEARCH_SAGA_DATA,
  SEARCH_DATA,
  DELETE_SAGA_DATA
} from "./types.js";

//set error
export const setErrorMessageAction = (payload) => ({
  type: SET_ERROR_MESSAGE,
  payload,
});
//set success
export const setSuccessMessageAction = (payload) => ({
  type: SET_SUCCESS_MESSAGE,
  payload,
});

//ADD NEW REWORD RULE
export const addNewSagaRewordRule = (payload) => ({
  type: ADD_NEW_SAGA,
  payload,
});
//GET STUDENTS
export const getStudentManagementSaga = (payload) => ({
  type: GET_PRODUCTS_SAGA,
  payload,
});
export const getStudents = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});
//UPDATE STUDENT DATA
export const updateSagaStudent = (payload) => ({
  type: UPDATE_PRODUCT_SAGA_DATA,
  payload,
});
//SEARCH DATA
export const searchSagaAction = (payload) => ({
  type: SEARCH_SAGA_DATA,
  payload,
});
export const searchAction = (payload) => ({
  type: SEARCH_DATA,
  payload,
});
//DELETE DATA
export const deleteSagaAction= (payload) => ({
  type: DELETE_SAGA_DATA,
  payload,
});