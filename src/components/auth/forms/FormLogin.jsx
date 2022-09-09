import { createTheme, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../../hooks/useForm';
import { loginAsync } from '../../../redux/actions/authActions'
import styles from '../AuthStyles.module.css';



const FormLogin = () => {
    const dispatch = useDispatch()

    const [formValue, handleInputChange, rest] = useForm({
        email: '',
        password1: ''
    })

    const { email, password1 } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(loginAsync(email, password1))
        rest()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.h2_login}>Inicia Sesión </h2>
                <div className={styles.inputs}>
                    <TextField
                    InputProps={{ inputProps: { style: { color: '#fff' }}}} //No funciona   
                        required
                        type="email"
                        id="outlined-required"
                        label="Email"
                        name="email"
                        color="primary" //No funciona
                        root="primary" //No funciona
                        multilineColor="primary" //No funciona
                        value={email} onChange={handleInputChange}
                        sx={{ borderRadius: '16px', borderColor: 'primary.main', color: 'primary.main', input: { color: '#f8f8f8' } }}
                    />
                </div>
                <div className={styles.inputs}>
                <TextField  
                        required
                        minLength="6"
                        type="password"
                        id="outlined-required"
                        label="Contraseña"
                        name="password1"
                        value={password1} onChange={handleInputChange}
                    />
                </div>
                <div className={styles.center_button_login}>
                <button className={styles.button_login}>Iniciar Sesión</button>
                </div>
            </form>
        </div>
    )
}

export default FormLogin