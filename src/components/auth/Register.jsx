import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../hooks/useForm'
import { registerAsync } from '../../redux/actions/authActions'
import styles from './AuthStyles.module.css';
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom';
import Footer from '../global/Footer';


const Register = () => {

  const dispatch = useDispatch()

  const [formValue, handleInputChange, rest] = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

  const { name, email, password1, password2 } = formValue

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
    dispatch(registerAsync(email, password1, name))
    rest()
  }
  return (
    <div>
      <div className={styles.register_container} >
        <h1 className={styles.h1_register}>Formulario de registro</h1>
        <div className={styles.container_register}>
          <form onSubmit={handleSubmit}>
            <div className="campos">
              <div className={styles.inputs}>
                <TextField
                  required
                  minLength="4"
                  type="text"
                  id="outlined-required"
                  label="Nombre"
                  name="name"
                  value={name} onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputs}>
                <TextField
                  required
                  type="email"
                  id="outlined-required"
                  label="Email"
                  name="email"
                  value={email} onChange={handleInputChange}
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
              <div className={styles.inputs}>
                <TextField
                  required
                  minLength="6"
                  type="password"
                  id="outlined-required"
                  label="Contraseña"
                  name="password2"
                  value={password2} onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={styles.center_button_login}>
              <button className={styles.button_login}>Regístrate!</button>
            </div>
          </form>
        </div>
        <div className={styles.container_redirect_login}>
          <p className={styles.p_register}>¿Ya tienes una cuenta? <Link to="/login" className={styles.a_register}>Inicia Sesión</Link></p>
        </div>
      </div>
      <div className={styles.container_footer_register}>
          <Footer />
        </div>
    </div>
  )
}

export default Register