import React from 'react'
import styles from './styles/store.module.css'
import Chip from '@mui/material/Chip';
import SliderComponent from './Slider';
import Slider2 from './Slider2';
import AppAppBar from './global/AppBar';



// export function ClickableChips() {
const handleClick = () => {
  console.info('You clicked the Chip.');
};
// }

const Store = () => {
  return (
    <div>

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
          {/* <h3>Proteínas</h3> */}
        </div>
      </div>

      <SliderComponent  />
      <Slider2 />
      
    </div>


  )
}

export default Store