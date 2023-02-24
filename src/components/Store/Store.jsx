import React, { useState } from 'react'
import styles from  '../styles/store.module.css'
import Chip from '@mui/material/Chip';

import AppAppBar from '../global/AppBar';
import Footer from '../global/Footer';
import SliderComponent from '../Slider';
import { AlertSucessfullAddToCart, AlertWarningAddToCart } from '../Alerts';




const handleClick = () => {
  console.info('You clicked the Chip.');
};

const Store = () => {

  const [buttonClicked, setButtonClicked] = useState(false);

const handleButtonClick = () => {
      setButtonClicked(true)
      console.log('button clicked')
  }


  const [pulsado, setPulsado] = useState(false);
  
  return (
    <div id='storeComponent'>

      <div>
        <AppAppBar />
      </div>

      <div className={styles.title}>
        <h1>Bienvenido a la tienda de FitnessPro</h1>
        <h2>Explora tus categorías favoritas aquí!</h2>
      </div>

      <div className={styles.container_categories}>
        <div className={styles.category}>
          <Chip label="Proteínas" onClick={handleClick} />
          <Chip label="Quemadores de grasa" onClick={handleClick} />
          <Chip label="Ganadores de peso" onClick={handleClick} />
          <Chip label="Multivitamínicos" onClick={handleClick} />
          <Chip label="Todos" onClick={handleClick} />
        </div>
      </div>

      <div className={styles.container_products}>
        <div className={styles.product_proteina}>
        </div>
      </div>

      <SliderComponent  />
      {/*TODO: reparar la importación */}
      {/* <Slider2 /> */}
      <div id="alert1">
        {/* <button onClick={() => <AlertWarningAddToCart handleClick={true} />}> hola</button> */}
        {/* <button onClick={handleButtonClick}> hola</button> */}
        {
          buttonClicked ? <AlertSucessfullAddToCart handleClick={true} /> : null
        }
        {/* <button
        Style=" margin: 20px"
        onClick = {() => setPulsado(!pulsado)}
        >
          Agendar Hora a Paciente
      </button>
      {pulsado ? (
        <AlertSucessfullAddToCart />
      ) : (
        <AlertSucessfullAddToCart />

      )} */}
      </div>
      <br/>
      <div>
        <Footer />
      </div>
    </div>


  )
}

export default Store