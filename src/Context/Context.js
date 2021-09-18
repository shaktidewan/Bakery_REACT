import React,{useContext, useReducer} from 'react'
import {createContext} from "react";
import cakesDetail from '../cakes.json';
import {cartReducer} from './Reducer';
//FOr filters
import { productReducer } from './Reducer';

const Cart = createContext();

const Context = ({children}) => {
    const cakes= cakesDetail;

    const [state, dispatch] = useReducer(cartReducer, {
        cakes: cakes,
        cart: [] //empty array where we will add our products in future
    })

    //FOr filter
    const [productState,productDispatch] = useReducer(productReducer,{
        searchQuery:""
    })

    // console.log(cakes);
    return (
        <Cart.Provider value={{state,dispatch,productState,productDispatch}}>
           {children} 
        </Cart.Provider>
    )
}

export default Context;

//GLOBAL STATE, CAN BE USED ANYWHERE
export const CartState = () =>{
    return useContext(Cart);
}
