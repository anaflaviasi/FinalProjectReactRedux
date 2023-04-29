import { Event } from "../types/types";
//Actions
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";


//Actions Creators Type (interfaces)
export interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: Event;
}

export interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: Event;
}

export interface ClearCartAction{
    type: typeof CLEAR_CART;

}

export type CartActionTypes =  AddToCartAction | RemoveFromCartAction | ClearCartAction;


//Action Creators
export const addToCart = (event: Event): CartActionTypes => ({
    type: ADD_TO_CART,
    payload: event,
});

export const removeFromCart = (event: Event): CartActionTypes => ({
    type: REMOVE_FROM_CART,
    payload: event,
});

export const clearCart = (): CartActionTypes => ({
    type: CLEAR_CART,
});