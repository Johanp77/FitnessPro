import React from 'react'
import Slider from 'react-slick';
import styles from '../styles/productDetail.module.css'

// src={`https://www.billin.net/blog/wp-content/uploads/2021/06/Im%C3%A1genes-sin-derechos-de-autor-1140x760.jpeg`}

const SliderProductDetail = (props) => {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    {
                        props.images.map((image, index) => {
                            return (
                                console.log(image),
                                // <a href={i}>
                                    <img className={styles.mini_reproductor_img} src={image} alt='visualización previa' />
                                // </a>
                            )
                        })
                    }
                </a>
            )
        },
        dots: true,
        arrows: true,
        dotsClass: "slick-dots slick-thumb",
        className: "slides",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
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
        <div className={styles.container_map_slider_product_detail}>
            <Slider {...settings}>
                {
                    props.images && props.images.map((image) => {
                        return (
                            <div className={styles.container_img_reference}>
                                <img className={styles.img_reference} src={image} alt="miniatura slider de información nutricional" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );

}

export default SliderProductDetail