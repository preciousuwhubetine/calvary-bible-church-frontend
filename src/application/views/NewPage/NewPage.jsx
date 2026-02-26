import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'
import { useEffect } from 'react';

function NewPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className={styles['NewPage']}>
      <div className={styles['NewPageBackground']} />

      <section className={styles['NewPageHero']}>
        <div className={styles['NewPageHeroContent']}>
          <h1>
            YOU'RE NEW?
          </h1>

          <img src="/new-page-hero-image.jpg" />
        </div>
      </section>

      <section className={styles['NewPageLinks']}>
        <ul>
          <li>
            <Link to="/new-member">
              <div>
                ?
              </div>

              <h3>New Member</h3>

              <span>
                Click here

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12L20.5 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 5L21 12L14 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/new-convert">
              <div>
                ?
              </div>

              <h3>New Convert</h3>

              <span>
                Click here

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12L20.5 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 5L21 12L14 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default NewPage
