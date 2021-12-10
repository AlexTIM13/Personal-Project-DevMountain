const initialState = {
  products:[],
  loading: false
}

const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
const PRODUCT_LIST_LOADING = "PRODUCT_LIST_LOADING";

export const getProducts = (products) => {
  return {
    type: PRODUCT_LIST_REQUEST,
    payload: products
  }
}

export const setLoading = (bool) => {
  return {
    type: PRODUCT_LIST_LOADING,
    payload: bool
  }
}

const productListReducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case PRODUCT_LIST_REQUEST: {
      return {...state, products: action.payload}
    }
  
    case PRODUCT_LIST_LOADING: {
      return {...state, loading:action.payload}
    }
    default: return state
  }
}

export default productListReducer