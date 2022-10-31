import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ResponsiveAppBar from './NavBar'
import styles from "../styles/index.module.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import SetMealIcon from '@mui/icons-material/SetMeal';
import ScaleIcon from '@mui/icons-material/Scale';
import Footer from '../global/Footer';
import Logo from '../global/Logo';
import AppAppBar from '../global/AppBar';
import { Link } from 'react-router-dom';


const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};


const Index = () => {
    return (
        <div>
            <AppAppBar />
            <section id="hero">
                <div className={styles.promo}>
                    <h1 className={styles.title_promo}>Suplementos de nutrición deportiva</h1>
                    <h2>Todo al alcance de un clic</h2>
                    <p>¡Empieza ya!</p>
                    <div className="buttons">
                        {/* <button className={styles.btn_index}>iniciar Sesión</button> */}
                        <button className={styles.btn_index} onClick={() => window.location.href = '/Store'}>COMPRAR AHORA!</button>
                    </div>
                </div>
                <div className={styles.video_container}>
                    <video muted autoPlay loop>
                        <source src='https://res.cloudinary.com/dzkollux2/video/upload/v1654316862/Demo-day/FondoFitnessPro_cvbcqp.mp4'
                            type="video/mp4" />
                    </video>
                </div>
                <div className={styles.arrow_down}>
                    <ArrowDownwardIcon sx={{ color: 'white', fontSize: 'large', animation: 'arrow 1s ease-in-out infinite', }} />
                </div>
                <div className="cap"></div>
            </section>
            <div className={styles.container_info_1}>
                <div className={styles.info_1}>
                    <h1>¿Suplementos?</h1>
                    <p>Tal como lo dice su nombre, los “suplementos” acompañan o complementan la dieta y entrenamiento que tenemos actualmente,
                        para ayudarnos a entregarle al cuerpo los nutrientes que necesita, evitar las lesiones musculares,
                        mantener nuestra energía alta y aumentar nuestro rendimiento y masa muscular.
                    </p>
                </div>
                <div className={styles.images_container_2}>
                    <div className={styles.images_container_2_img_1}>
                        {/* <div className={styles.images_container_2_info_1}>
                            <p className={styles.images_container_2_p_1}> pruebas de hover</p>
                        </div> */}
                        <img src='https://res.cloudinary.com/dzkollux2/image/upload/v1654525082/Demo-day/Suplementos-deportivos-Conoce-los-mitos-y-verdades_jdowmb.png' alt="suplementos deportivos" />
                    </div>
                    <div className={styles.images_container_2_img_2}>
                        {/* <div className={styles.images_container_2_info_2}>
                            <p className={styles.images_container_2_p_2}> pruebas de hover</p>
                        </div> */}
                        <img src='https://res.cloudinary.com/dzkollux2/image/upload/v1654525080/Demo-day/suplementos-deportistas-1-k8hD--620x349_abc_xtf9m9.jpg' alt="deportista con suplementos" />
                    </div>
                </div>
            </div>
            <div className={styles.container_3}>
                <Box
                    component="section"
                    sx={{ display: 'flex', bgcolor: '#d1cfca' }}
                >
                    <Container sx={{ mt: 5, mb: 10, display: 'flex', position: 'relative' }}>
                        {/* <Box
                                component="img"
                                src="/static/themes/onepirate/productCurvyLines.png"
                                alt="curvy lines"
                                sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
                            /> */}
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={12}>
                                <Box sx={item}>
                                    <SetMealIcon sx={{ fontSize: '100px' }} />
                                    {/* <Box
                                        component="img"
                                        src="/static/themes/onepirate/productValues1.svg"
                                        alt="suitcase"
                                        sx={{ height: 55 }}
                                    /> */}
                                    <Typography variant="h4" sx={{ my: 5 }}>
                                        Proteínas
                                    </Typography>
                                    <Typography variant="h6" sx={{fontSize: '1.3rem'}}>
                                        {
                                            'Los suplementos proteicos son los más conocidos y usados por los distintos tipos de deportistas, '
                                        }

                                        {
                                            'las proteínas nos ayudan a evitar la pérdida de masa muscular, nos ayudan en la recuperación post-entreno y a aumentar el tamaño de nuestros músculos'
                                        }
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={item}>
                                    <LocalFireDepartmentIcon sx={{ fontSize: '100px' }} />
                                    {/* <Box
                                        component="img"
                                        src="/static/themes/onepirate/productValues2.svg"
                                        alt="graph"
                                        sx={{ height: 55 }}
                                    /> */}
                                    <Typography variant="h4" sx={{ my: 5 }}>
                                        Quemadores de grasa
                                    </Typography>
                                    <Typography variant="h6">
                                        {
                                            'son suplementos deportivos que nos ayudan en la difícil tarea de disminuir los niveles de lípidos en nuestro organismo y conseguir músculos magros.'
                                        }

                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={item}>
                                    <ScaleIcon sx={{ fontSize: '100px' }} />
                                    {/* <Box
                                        component="img"
                                        src="/static/themes/onepirate/productValues3.svg"
                                        alt="clock"
                                        sx={{ height: 55 }}
                                    /> */}
                                    <Typography variant="h4" sx={{ my: 5 }}>
                                        Ganadores de peso
                                    </Typography>
                                    <Typography variant="h6">
                                        {' suplementos con altos niveles de calorías,  '}
                                        {'normalmente contienen proteínas y una dosis elevada de hidratos de carbono. '}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={item}>
                                    <EmojiFoodBeverageIcon sx={{ fontSize: '100px' }} />
                                    {/* <Box
                                        component="img"
                                        src="/static/themes/onepirate/productValues3.svg"
                                        alt="clock"
                                        sx={{ height: 55 }}
                                    /> */}
                                    <Typography variant="h4" sx={{ my: 7 }}>
                                        Multivitamínicos
                                    </Typography>
                                    <Typography variant="h6">
                                        {'Gracias a ellos nuestro cuerpo puede cumplir todas las funciones básicas,'}
                                        {'además de ayudarnos a mejorar  nuestro sistema inmune y aumentar nuestros niveles de energía.'}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>

            <div className={styles.container_4}>
                <div className={styles.container_4_promo}>
                    <Link style={{ textDecoration: 'none' }} to="/store">Explora Nuestro Catálogo aquí!</Link>
                </div>
                <div className={styles.container_4_infoStore}>
                    <p>Se te redirigirá a nuestra página de compras, echa un vistazo a nuestras ofertas y promociones, te sorprenderán!</p>
                </div>
                <div className={styles.container_4_footer}>
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default Index