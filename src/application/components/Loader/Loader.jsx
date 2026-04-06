import React from 'react'
import styles from './styles.module.css'

function Loader({
  size = 48,
}) {
  return (
    <div className={styles['Loader']} style={{ scale: (size / 50) }}>

    </div>
  )
}

export default Loader
