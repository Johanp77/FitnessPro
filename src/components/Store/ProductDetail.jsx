import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import AppAppBar from '../global/AppBar';
import styles from '../styles/productDetail.module.css'
import SliderProductDetail from './SliderProductDetail';
import Footer from '../global/Footer';

const ProductDetail = () => {

  let item = 0
  const [detalle, setDetalle] = useState([])
  const [url, setUrl] = useState(0)
  const [images, setImages] = useState()

  const params = useParams()

  const { up } = useSelector(store => store.firebaseReducers);

  useEffect(() => {
    item = 0;
    console.log('pre forEach', parseInt(params.id, 0));
    up.forEach(producto => {
      producto.products.forEach((producto2 => {
        if (parseInt(producto2.id) === parseInt(params.id)) {
          console.log('post render', params.id, producto2.id);
          setDetalle(producto2)
          setUrl(0)
          setImages(producto2.images)
          // producto2.images.forEach((image) => {

          // })
        }
      }))
    })
  }, []);

  // useEffect(() => {
  //   console.log(params.id);
  //   item = 0;
  //   up.map(producto => {
  //     console.log(producto.id);
  //     if (producto.id === parseInt(params.id)) {
  //       console.log(producto);
  //       up.map(producto => {
  //         return (
  //           producto.products.map((producto2 => {
  //             return setDetalle(producto2)
  //           }
  //           ))
  //         )
  //       })
  //       setDetalle(producto)
  //       console.log(producto);
  //       setUrl(0)
  //     }
  //   })
  // }, [params.id, up]);

  return (
    console.log(images),

    <div>
      <AppAppBar />
      <h1 className={styles.title_detail}>Detalle del producto</h1>
      {
        <div>
          <div className={styles.container_info_detail}>
            {/* {
              images && images.map((image) => {
                return (
                  <img className={styles.img_reference} src={image} alt="Imagen de referencia e información nutricional" />
                )
              })
            } */}

            <div className='SlideSize'>
              <SliderProductDetail images={images} />
            </div>

            <div>
              <h2 className={styles.title_product_detail} >{detalle.name}</h2>
              <p>Precio: ${detalle.price}</p>
              <p>Peso: {detalle.size}</p>
              <div className={styles.container_button_add_to_cart}>
                <button className={styles.button_add_to_cart}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

          <div className={styles.container_product_description}>
            <p>{detalle.description}</p>
          </div>
        </div>
      }
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ProductDetail