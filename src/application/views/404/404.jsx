import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

function _404() {
  return (
    <div className={styles['_404']}>
      <h1>Not Found!</h1>
      <p>The page you are looking for does not exist.</p>

      <Link to="/">
        Go back to Home

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2.0013 8H13.668" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.33333 3.33332L14 7.99999L9.33333 12.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  )
}

export default _404
