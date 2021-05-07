import axios from "axios";
import { getDefaultHeaders, processError } from "../../../utils/common";
//GET THE ALL PRODUCT DATA
export const gateProductData = async (data) => {
  try {
    const headers = getDefaultHeaders();
    const response = await axios.get(
      `http://localhost:3002/students?_sort=name&_order=as`,
      {
        headers,
      } 
    );
    return response.data;
  } catch (error) {
    return processError(error);
  }
};

//ADD NEW PRODUCT 
export const addNewProduct = async (data) => {
  try {
    const headers = getDefaultHeaders();
    const response = await axios.post(
      `http://localhost:3002/students`,data 
    );
    return response.data;

  } catch (error) {
    return processError(error);
  }
};

//UPDATE PRODUCT....
export const updateProduct = async (payload) => {
  try {
    //api call
    const headers = getDefaultHeaders();
    const response = await axios.put(
      `http://localhost:3002/students/${payload.id}`,
      payload,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    return processError(error);
  }
};

//DELETE PRODUCT DATA,.........
export const deleteProduct = async (payload) => {
  try {
    //api call
    const headers = getDefaultHeaders();
    const response = await axios.delete(
      `http://localhost:3002/students/${payload.id}`,
      payload,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    return processError(error);
  }
};

//SEARCH DATA ACCORDINGLY..........
export const searchStudentData =  async (payload) => {
  try {
    //api call
    const headers = getDefaultHeaders();
    const response = await axios.get(
      `http://localhost:3002/students?q=${payload.searchKey}`,
      {
        headers,
      }
    );
    return response.data;

  } catch (error) {
    return processError(error);
  }
};