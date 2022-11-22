import { Alert } from "@mui/material";
import React from "react";
import { useSelector, useStore } from "react-redux";
import { AlertSucessfullAddToCart } from "../../components/Alerts";
import { storeTypes } from "../types/storeTypes";
import ReactDOM from 'react-dom/client';



let newProduct = []

export const addElement = (product, idProduct) => {

    newProduct = JSON.parse(localStorage.getItem('dataCarrito'))

    // if (!localStorage.getItem('dataCarrito')) {
    //     newProduct = JSON.parse(localStorage.setItem('dataCarrito', JSON.stringify(newProduct)))
    // }
    // else {
    //     newProduct = JSON.parse(localStorage.getItem('dataCarrito'))
    // }

    return (dispatch) => {
        console.log(product);
        // if (product) {
        // console.log("Element already exists")
        const newProductObject = {
            id: product.id,
            name: product.name,
            price: product.price,
        }
        // console.log(newProductObject);
        newProduct.push(newProductObject)
        // console.log(newProduct);

        if (newProductObject) {
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

export const readAllElements = () => {
    return (dispatch) => {
        // dispatch(asyncReadAllElements())
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

