import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import styles from './styles/store.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { readProteinDocAsync, readProteinsAsync } from "../redux/actions/firebaseActions";
import { doc, getDoc } from "firebase/firestore";
import { DB } from "../firebase/firebaseConfig";


const SliderComponent = () => {

    const dispatch = useDispatch();
    const [productos, setProductos] = useState();


    const { up } = useSelector(store => store.firebaseReducers);
    useEffect(() => {
        dispatch(readProteinDocAsync())
        const datos = up[0]
        setProductos(datos)
        console.log(datos);
    }, [useSelector, dispatch]);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        className: "slides",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    autoplaySpeed: 5000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 5000,
                }
            }
        ]
    };
    return (
        // console.log(datos),
        // console.log(proteins[0]['products'] ),
        <div className="SlideSize">
            <h2>Proteínas</h2>
            <Slider {...settings}>
                {up.map((protein, index) => {
                    return (
                        protein.products.map((product, index2) => {
                            return (
                                <div key={index2}>
                                    {<Card className={styles.card} >
                                        <CardMedia
                                            component="img"
                                            width="10"
                                            height="270"
                                            className={styles.media}
                                            image={product.images[0]}
                                            title={product.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="h5">
                                                {product.name}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="h2">
                                                {product.size}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                ${product.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="secondary">
                                                Ver más
                                            </Button>
                                            <Button size="small" color="secondary">Add to cart</Button>
                                        </CardActions>
                                    </Card>
                                    }
                                </div>
                            )
                        }
                        )
                    )
                }
                )}
            </Slider>
        </div>
    );

}

//// added.


export default SliderComponent;