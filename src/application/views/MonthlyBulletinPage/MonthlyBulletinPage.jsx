import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function MonthlyBulletinPage() {
  return (
    <div className={styles['MonthlyBulletinPage']}>
      <div className={styles['MonthlyBulletinPageBackground']} />

      <section className={styles['MonthlyBulletinPageHero']}>
        <div className={styles['MonthlyBulletinPageHeroContent']}>
          <div className={styles['MonthlyBulletinPageHeroCircle']}>
            <img src="/the-turning-point-circle.png" />

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                <path d="M30.545 22.9085L10.1821 38.1806H15.2728V50.9074M30.545 22.9085L50.9079 38.1806H45.8172V50.9074M30.545 22.9085V10.1816M15.2728 50.9074H7.63672M15.2728 50.9074H25.4543M45.8172 50.9074H53.4533M45.8172 50.9074H35.6357M35.6357 50.9074V43.2714C35.6357 41.9212 35.0994 40.6264 34.1447 39.6717C33.19 38.717 31.8951 38.1806 30.545 38.1806C29.1948 38.1806 27.9 38.717 26.9453 39.6717C25.9906 40.6264 25.4543 41.9212 25.4543 43.2714V50.9074M35.6357 50.9074H25.4543M25.4543 15.2724H35.6357" stroke="white" strokeWidth="3.80108" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h2>BULLETIN</h2>

          <div className={styles['MonthlyBulletinPageHeroText']}>
            <p>2026: Our Year of New Beginning</p>
            <h1>
              Monthly Bulletin
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MonthlyBulletinPage
