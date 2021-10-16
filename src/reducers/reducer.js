import initState from "./initState";

export const StoreReducer = (state = initState, action) => {
  switch (action.type) {
      case "ADD_TO_CART":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        cart: state.cart === [] ? [action.item] : state.cart.filter(item => item.id === action.item.id).length < 1 ? [...state.cart, action.item] : state.cart.map((shoe,i) => shoe.id === action.id ? action.item : shoe)
      }
      case "REMOVE_FROM_CART":
        // Update total price of cart items
        // Subtract item base price + item quantity
        let cart = JSON.parse(localStorage.getItem("cart"))
        console.log(action.payload !== cart.cart[0].id)
        // console.log(cart.cart[0].id)
        let index = cart.cart.find(sneaker => sneaker.id === action.payload)
        let price = index.retailPrice
        index = cart.cart.indexOf(index)
        console.log(index)
        cart.cart = cart.cart.filter((_,i) => (

          i !== index
                    ))
        localStorage.setItem("cart",JSON.stringify(cart)) 
        localStorage.setItem("total",Number(localStorage.getItem("total")) - Number(price)) 
        console.log(cart)
        return {
          ...state,
          cart:state.cart.filter(sneaker => (
sneaker.id !== action.payload
          )),
        };
        case "REMOVE_CART":
        // Update total price of cart items
        // Subtract item base price + item quantity
        // console.log(cart.cart[0].id)
        
        localStorage.setItem("cart",JSON.stringify({cart:[]}))
        localStorage.setItem("total",0) 
        return {
          ...state,
          cart:[],
          total:0
        };
        case "DELETE_ORDER":
          // Update total price of cart items
          // Subtract item base price + item quantity
          
          // console.log(cart.cart[0].id)
          
          // console.log(cart.cart[0].id)
          
          let orders_index = state.orders.find(sneaker => sneaker.id === action.payload)
          orders_index = state.orders.indexOf(orders_index)
          
          console.log(orders_index)
          console.log(state.orders.filter((_,i) => (
  
            i !== orders_index
                      )))
          return {
            ...state,
            orders:state.orders.filter((_,i) => (
  
              i !== orders_index
                        )),
          }
          case "ORDERS":
          return {
            ...state,
            orders:action.payload
          }
    default:
      return initState;
  }
};
