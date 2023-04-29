import { ADD_TO_CART, CLEAR_CART, CartActionTypes, REMOVE_FROM_CART } from "../actions/cartActions";
import { Cart, Event } from "../types/types";


const initialState: Cart = {
    cart: [],
    total: 0
};

export function CartReducer(state = initialState, action: CartActionTypes): Cart {
    switch (action.type){
        case ADD_TO_CART:
            return {
                total: state.total,
                cart: [...state.cart, action.payload]            
            }
        case REMOVE_FROM_CART:
            return {
                total: state.total,
                cart: state.cart.filter(( event: Event ) => event.id !== action.payload.id)
            }
        case CLEAR_CART: 
            return {
                total: 0,
                cart:[]
            }   
        default:
            return state; 

    }

}