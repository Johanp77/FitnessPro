import React from 'react'
import styles from "../styles/logo.module.css"

const Logo = (props) => {
  return (
    <div styles={{width: "10px"}}>
        <span className={styles.diagonal_lines}>//</span><span className={styles.body_name}>FITNESSPRO</span>
    </div>
  )
}

export default Logo