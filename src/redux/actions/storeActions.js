import { Alert } from "@mui/material";
import React from "react";
import { ReactReduxContext, useSelector, useStore } from "react-redux";
import { AlertSucessfullAddToCart } from "../../components/Alerts";
import { storeTypes } from "../types/storeTypes";
import ReactDOM from 'react-dom/client';
import { store } from "../store/store";



let newProduct = []

console.log(newProduct)

// TODO: Manage the global store state here
export const readAllElements = () => {

const reduxState = store.getState();


    if (localStorage.getItem('dataCarrito') === null) {
        newProduct = JSON.parse(localStorage.setItem('dataCarrito', JSON.stringify(newProduct)))
        console.log("nothing to see here");
    }
    else {
        newProduct = JSON.parse(localStorage.getItem('dataCarrito'))
        asyncReadAllElements(newProduct)
        console.log("we have an else here")
    }



    // return (dispatch) => {
    //     // dispatch(asyncReadAllElements())
    // }
}

export const asyncReadAllElements = (ProductsLocalStorage) => {
    return {
        type: storeTypes.readAllElements,
        payload: ProductsLocalStorage
    }
}


export const addElement = (product, idProduct) => {

    // newProduct = JSON.parse(localStorage.getItem('dataCarrito'))

    // console.log(product)

    if (localStorage.getItem('dataCarrito') === null) {
        newProduct = JSON.parse(localStorage.setItem('dataCarrito', JSON.stringify(newProduct)))
        console.log("nothing to see here");
    }
    else {
        newProduct = JSON.parse(localStorage.getItem('dataCarrito'))
        asyncReadAllElements(newProduct)
        console.log("we have an else here")
    }

    console.log(newProduct)


    return (dispatch) => {
        // console.log(product);
        // if (product) {
        // console.log("Element already exists")
        const newProductObject = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        }
        // console.log(newProductObject);
        newProduct.push(newProductObject)
        // console.log(newProduct);

        if (newProductObject) {
            // console.log(newProductObject);

            localStorage.setItem('dataCarrito', JSON.stringify(newProduct))
            // const root = ReactDOM.createRoot(
            //     document.getElementById('storeComponent')
            // );
            // const element = <AlertSucessfullAddToCart />
            // root.render(element)
        }
        dispatch(asyncAddElement(newProduct))

    }

}

export const asyncAddElement = (newProduct) => {
    return {
        type: storeTypes.setElement,
        payload: newProduct
    }

}





export const deleteAllElements = () => {
    // localStorage.removeItem('dataCarrito')

    // newProduct = JSON.parse(localStorage.setItem('dataCarrito', JSON.stringify(newProduct)))
    newProduct.length = 0
    localStorage.setItem('dataCarrito', JSON.stringify(newProduct))
}

export const asyncDeleteElement = (id) => {
    return {
        type: storeTypes.deleteElement,
        payload: id
    }
}

export const deleteProduct = (id) => {

    // console.log(reduxState)

    // console.log(reduxState.authReducers)



}
