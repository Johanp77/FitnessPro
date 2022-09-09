import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { DB } from "../../firebase/firebaseConfig"
import { firebaseTypes } from "../types/firebaseTypes"



export const readProteinDocAsync = () => {
    return async (dispatch) => {
        const docRef = doc(DB, "products", "0");
        const docSnap = await getDoc(docRef);
        const result =  docSnap;
        // console.log(docSnap.data());
        const up =[]
        up.push(result.data())
        // console.log(up)
        dispatch(readProteinDocSync(up))
    }
}

export const readProteinDocSync = (up) => {
    return {
        type: firebaseTypes.readUp,
        payload: up
    }
}


export const readProteinsAsync = () => {
    return async (dispatch) => {
        const collectionRead = await getDocs(collection(DB, "products"))
        console.log(collectionRead);
        const proteins = []
        collectionRead.forEach(doc => {
            proteins.push({
                ...doc.data()
            })

        })
        
        dispatch(readProteineSync(proteins))
    }
}

export const readProteineSync = (proteins) => {
    return {
        type: firebaseTypes.read,
        payload: proteins
    }
}