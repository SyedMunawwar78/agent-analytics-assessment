import axios from 'axios';
import { FETCH_PRODUCTS_DETAILS_ERROR, FETCH_PRODUCTS_DETAILS_REQUEST, FETCH_PRODUCTS_DETAILS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from './constants';

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await axios.get('http://localhost:8000/products');
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
  }
};

export const fetchProductDetails = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_DETAILS_REQUEST });
  try {
    const response = await axios.get(`http://localhost:8000/products/${id}`);
    dispatch({ type: FETCH_PRODUCTS_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_DETAILS_ERROR, payload: error.message });
  }
};
