import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { loginGoogle } from '../../redux/actions/authActions';
import styles from './AuthStyles.module.css';
import FormLogin from './forms/FormLogin';
import Footer from '../global/Footer';
import AppAppBar from '../global/AppBar';



const H1 = styled.h1`
    text-align: center;
    /* padding: 1rem auto; */
    margin: 0 auto;
`
const P = styled.p`
    text-align: center;
    padding: 1.5rem 0;
`


const Login = () => {
    const dispatch = useDispatch()
    return (
        <div className={styles.inyected_login_container}>
            <div className={styles.main_container}>
                <div className={styles.nav_container}>
                    <AppAppBar />
                </div>
                <div className={styles.login_component}>
                    <div className={styles.undefined}>
                        <H1>FitnessPro te da la bienvenida!</H1>

                    </div>
                    <div className={styles.formLogin_container}>
                        <FormLogin />
                    </div >

                    <div className={styles.container_social}>
                        <h3>Inicia sesión con tus redes sociales!</h3>
                        {/* <GoogleIcon sx={{ cursor: 'pointer' }} fontSize="large"  /> */}
                        <div className={styles.container_icons}>
                            <img src="https://res.cloudinary.com/dzkollux2/image/upload/v1662185791/Google_cvghaz.png" alt="Google Icon" onClick={() => dispatch(loginGoogle())} ></img>
                            <img className={styles.FacebookIcon} src="https://res.cloudinary.com/dzkollux2/image/upload/v1662185262/Facebook_Icon_if6lkc.png" alt="Facebook Icon"></img>
                        </div>
                        {/* <FacebookIcon sx={{ cursor: 'pointer' }} fontSize="large" /> */}
                    </div>
                    <div className={styles.container_register_login}>
                        <h3> ¿No tienes cuenta? </h3> <Link to="/register">Registrate aquí</Link>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className={styles.container_login_footer}>
                <Footer />
            </div>
        </div>
    )
}
export default Login