import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { google } from "../../firebase/firebaseConfig"
import { authTypes } from "../types/authTypes"




// ***********************Login Asincrónico Firebase***********************/

export const loginAsync = (email, password) => {
    return(dispatch)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(loginSync(user.email, user.password))
            console.log("Usuario logueado")
        })
        .catch(error=>{
            console.warn(error, 'usuario no logueado');
        })
    }
}

export const loginSync =(user, pass)=>{
    return{
            type: authTypes.login,
            payload: { user, pass}
    }
}




export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                console.log(user, 'Usuario autorizado')
            })
            .catch(error => {
                console.warn(error, 'No autorizado')
            })
    }
}



//-------------------Logout --------- */
export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then((user) => {
                console.log('Adios')
                dispatch(logout())
                window.location.href = '/login'
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const logout = () => {
    return {
        type: authTypes.logout
    }
}




export const authStatusChanger = (isAuth) => {
    return (dispatch) => {
        const auth = getAuth()
        const userData = [
            {
                email: "",
                userName: "",
                password: "",
                uid: "",
                photoURL: "",
                isAuth: false
            }
         ]
        auth.onAuthStateChanged(user => {
            if (user) {
            // console.log(user);
                userData[0].email = user.email
                userData[0].userName = user.displayName
                userData[0].password = user.password
                userData[0].uid = user.uid
                userData[0].photoURL = user.photoURL
                userData[0].isAuth = true
            console.log(userData);
            dispatch(authStatus(userData))
            
            } else {
                dispatch(authStatus(false))
            }
            
        }

        )
    }
}

export const authStatus = (userData) => {
    return {
        type: authTypes.authStatus,
        payload: userData
    }
}



// ***********************Registro en Firebase ***************************/

export const registerAsync =(email, password, name) => {
    return(dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(async ({user}) =>{
            await updateProfile(auth.currentUser, {displayName: name})
            dispatch(registerSync(email, password, name))
            console.log("Usuario registrado")
        })
        .catch(error => {
            console.warn(error, 'Usuario no registrado')
        })
    }
}

export const registerSync =(email, pass, name)=>{
    return{
        type: authTypes.register,
        payload: {
            email, pass, name
        }
    }
}

