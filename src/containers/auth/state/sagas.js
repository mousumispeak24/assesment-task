import { put, takeEvery } from "redux-saga/effects";
import {
  COUNTRY_WEATHER_SAGA_ACTION,
  ADD_NEW_SAGA,
  GET_PRODUCTS_SAGA,
  UPDATE_PRODUCT_SAGA_DATA,
  SEARCH_SAGA_DATA,
  DELETE_SAGA_DATA,
} from "./types";
import {
  setErrorMessageAction,
  setSuccessMessageAction,
  getStudents,
  searchAction
} from "./actions.js";
import { gateProductData,addNewProduct,updateProduct, deleteProduct,searchStudentData, } from "./api";
import { SEVERITY_TYPES } from "../../../enums/severityTypes";

//ADD NEW PRODUCT..............................
function* addNewStudentHandler(action) {
  try {
    const { payload } = action;
    //api
    const response = yield addNewProduct(payload);
    if (response) {
      yield put(
        getStudents({
          successMessage: "New studentAdded Successfully",
          successMessageToShow:"New studentAdded Successfully"
        })
      );
    } else {
      yield put(
        setErrorMessageAction({
          message: response.message,
          severity: SEVERITY_TYPES.ERROR,
        })
      );
    }
  } catch (error) {
    throw error;
  }
}
//GET PRODUCT DATA..................................
function* getStudentDataHandler(action) {
  try {
    //api call
    const response = yield gateProductData();

    if (response ) {
      yield put(
        getStudents({
          data: response,
          isLoading: false,
          successMessage: "get data",
        })
      );
    }
  } catch (error) {
    throw error;
  }
}
//UPDATE PRODUCT DATA.........................
function* updateStudentData(action) {
  try {
    const { payload } = action;
    //api
    const response = yield updateProduct(payload);
    if (response ) {
      yield put(
        getStudents({
          successMessage: "Student updated successfully",
          successMessageToShow: "Student updated successfully"
        })
      )
    } else {
      yield put(
        setErrorMessageAction({
          message: response.message,
          severity: SEVERITY_TYPES.ERROR,
        })
      );
    }
  } catch (error) {
    throw error;
  }
}
//DELETE PRODUCT DATA.................
function* deleteDataHandler(action){
  try {
    const { payload } = action;
    //api
    const response = yield deleteProduct(payload);
    if (response ) {
      yield put(
        getStudents({
          successMessage: "student data deleted Successfully",
          successMessageToShow: "student data deleted Successfully"
        })
      )
    } else {
      yield put(
        setErrorMessageAction({
          message: response.message,
          severity: SEVERITY_TYPES.ERROR,
        })
      );
    }
  } catch (error) {
    throw error;
  }

}
//SEARCH DATA .....................
function* searchDataHandler(action) {
  try {
    const { payload } = action;
    //api call
    const response = yield searchStudentData(payload);
    if (response) {
      yield put(
        searchAction({
          data: response,
        })
      );
    }
  } catch (error) {
    throw error;
  }
}

export default function* watchAuth() {
  yield takeEvery(ADD_NEW_SAGA,addNewStudentHandler);
  yield takeEvery(GET_PRODUCTS_SAGA,getStudentDataHandler);
  yield takeEvery(UPDATE_PRODUCT_SAGA_DATA, updateStudentData);
  yield takeEvery(SEARCH_SAGA_DATA, searchDataHandler);
  yield takeEvery(DELETE_SAGA_DATA, deleteDataHandler);


}
