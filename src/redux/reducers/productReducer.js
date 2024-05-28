import { FETCH_PRODUCTS_DETAILS_ERROR, FETCH_PRODUCTS_DETAILS_REQUEST, FETCH_PRODUCTS_DETAILS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../constants";

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, loading: false };
        case FETCH_PRODUCTS_ERROR:
            return { ...state, error: action.payload, loading: false };
        case FETCH_PRODUCTS_DETAILS_REQUEST:
            return { ...state, loading: true };
        case FETCH_PRODUCTS_DETAILS_SUCCESS:
            return { ...state, product: action.payload, loading: false };
        case FETCH_PRODUCTS_DETAILS_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export default productReducer;
