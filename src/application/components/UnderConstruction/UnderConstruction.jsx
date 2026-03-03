import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

function UnderConstruction({
  pageName = 'page'
}) {
  return (
    <div className={styles['UnderConstruction']}>
      <h1>Coming Soon!</h1>
      <p>This {pageName} is currently being work on, please check back at a later date</p>

      <Link to="/">
        Go back to Home

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2.0013 8H13.668" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.33333 3.33332L14 7.99999L9.33333 12.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>

      <img alt="" className={styles['UnderConstructionImage']} src="/under-construction.png" />
    </div>
  )
}

export default UnderConstruction
