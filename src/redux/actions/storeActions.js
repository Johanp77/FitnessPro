import { useSelector } from "react-redux";
import { storeTypes } from "../types/storeTypes";




export const addElement = (product, idProduct) => {

	
    
    return (dispatch) => {
        console.log(product);
        const newProduct = []
        // if (product) {
            // console.log("Element already exists")
            const newProductObject = {
                id: product.id,
                name: product.name,
                price: product.price,

            }
            newProduct.push(newProductObject)

            const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
            if(newProductObject){
                localStorage.setItem('dataCarrito', JSON.stringify(newProduct))
            }
            console.log(newProduct);
            // const dataCarrito = JSON.parse(localStorage.setItem('dataCarrito', JSON.stringify(newProduct)))
            // if (product) {
            //     localStorage.setItem('dataCarrito', JSON.stringify(.concat(newProductObject)))
            // } else {
            //     localStorage.setItem('dataCarrito', JSON.stringify(newProductObject))
            // }


            // if (dataCarrito) {
            //     dataCarrito.map((product) => {
            //         if (product.id === idProduct) {
            //             product.quantity += 1
            //         }
            //         newProduct.push(product)
            //     })
            //     localStorage.setItem('dataCarrito', JSON.stringify(newProduct))
            // }
            // const pushNewLocalStorage = localStorage.setItem("product", JSON.stringify(newProductObject))
            // newProduct.push(newProductObject)
            dispatch(asyncAddElement(newProductObject))
        // }

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

