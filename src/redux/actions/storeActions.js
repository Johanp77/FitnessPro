import { useSelector } from "react-redux";
import { storeTypes } from "../types/storeTypes";




export const addElement = (product, idProduct) => {
    return (dispatch) => {
        console.log(product);
        const newProduct = []
        if (product) {
            console.log("Element already exists")
            const newProductObject = {
                id: product.id,
                name: product.name,
                price: product.price,

            }
            newProduct.push(newProductObject)
            dispatch(asyncAddElement(newProduct))
        }
        
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

export const deleteElement = (id) => {
    return {
        type: storeTypes.deleteElement,
        payload: id
    }
}

