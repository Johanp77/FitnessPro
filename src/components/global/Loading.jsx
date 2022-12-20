import React from 'react'
import styles from '../styles/loading.module.css'


const Loading = () => {
  return (
    <div>
        <div className={styles.index_father_circle}>
          <div className={styles.index_loading_circle}>
          </div>
        <span className={styles.span_styles}>FitnessPro</span>

        </div>
    </div>
  )
}

export default Loading