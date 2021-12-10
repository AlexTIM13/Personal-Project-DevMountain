const initialState = {
  cartItems: [{
    id: '',
    name: '',
    img1: '',
    price:''
  }]
}

const CART_ADD_ITEM = "CART_ADD_ITEM" 
  
export function addToCart(cartObj) {
  console.log(`I am hitting my addToCart action with ${JSON.stringify(cartObj, null, 2)} `)
  return  {
    type: CART_ADD_ITEM,
    payload: cartObj
  }
  localStorage.setItem('cartItems', JSON.stringify(cartObj))
}

export const cartReducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find(x => x.id === item.id)

      if(existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => x.id === existItem.id ? item : x)
        }
      } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item]
          }
      }
    default:
      return state  
  }
}