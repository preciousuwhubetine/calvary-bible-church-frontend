import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function NewBreedCreedPage() {
  return (
    <div className={styles['NewBreedCreedPage']}>
      <div className={styles['NewBreedCreedPageBackground']} />

      <section className={styles['NewBreedCreedPageHero']}>
        <div className={styles['NewBreedCreedPageHeroContent']}>
          <div className={styles['NewBreedCreedPageHeroCircle']}>
            <img src="/the-turning-point-circle.png" />

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                <path d="M30.545 22.9085L10.1821 38.1806H15.2728V50.9074M30.545 22.9085L50.9079 38.1806H45.8172V50.9074M30.545 22.9085V10.1816M15.2728 50.9074H7.63672M15.2728 50.9074H25.4543M45.8172 50.9074H53.4533M45.8172 50.9074H35.6357M35.6357 50.9074V43.2714C35.6357 41.9212 35.0994 40.6264 34.1447 39.6717C33.19 38.717 31.8951 38.1806 30.545 38.1806C29.1948 38.1806 27.9 38.717 26.9453 39.6717C25.9906 40.6264 25.4543 41.9212 25.4543 43.2714V50.9074M35.6357 50.9074H25.4543M25.4543 15.2724H35.6357" stroke="white" strokeWidth="3.80108" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h2>NEW BREED</h2>

          <div className={styles['NewBreedCreedPageHeroText']}>
            <p>Raised · Empowered · Released</p>
            <h1>
              Creed for the New Breed
            </h1>
          </div>
        </div>
      </section>

      <section className={styles['NewBreedCreedPageOverview']}>
        <h2>Overview</h2>

        <div className={styles['NewBreedCreedPageOverviewText']}>
          <p>
            The Creed for the New Breed is our declaration of who we are and what we are called to be — a people being raised, empowered and released as world changers and history makers, ready to show up in every sphere of life.
          </p>

          <div className={styles['NewBreedCreedPageOverviewNote']}>
            <span>
              <svg data-dc-tpl="30" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB91E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path data-dc-tpl="31" d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"></path><path data-dc-tpl="32" d="M19 11a7 7 0 0 1-14 0"></path><path data-dc-tpl="33" d="M12 18v3"></path></svg>
            </span>
            <p>Recited together at the end of every service</p>
          </div>
        </div>
      </section>

      <section className={styles['NewBreedCreedPageDeclaration']}>
        <div className={styles['NewBreedCreedPageDeclarationContent']}>
          <div className={styles['NewBreedCreedPageDeclarationContentHeading']}>
            <p>Declare it with us</p>
            <h2>Creed for the New Breed</h2>
          </div>

          <hr />

          <div className={styles['NewBreedCreedPageDeclarationContentSection']}>
            <h3>I am a new breed</h3>

            <p>
              A new breed without greed
              <br />
              I am being raised, empowered, and released
              <br />
              I am a world changer and a history maker
            </p>
          </div>

          <hr />

          <div className={styles['NewBreedCreedPageDeclarationContentSection']}>
            <h3>I am a new breed</h3>

            <p>
              The media world is waiting
              <br />
              The entertainment world is waiting
              <br />
              The sports world is waiting
              <br />
              The political world is waiting
              <br />
              The world of education is waiting
              <br />
              The financial sector is waiting
              <br />
              The social and spiritual world is waiting
              <br />
              The world of science and technology is waiting
              <br />
              <b>I am a new breed and I am ready to show up</b>
            </p>
          </div>

          <hr />

          <div className={styles['NewBreedCreedPageDeclarationContentSection']}>
            <h3>I am a new breed</h3>

            <p>
              I make positive impact wherever I go
              <br />
              I am a role model at all times
              <br />
              I am a solution and not a problem
              <br />
              I am the best in all I do
              <br />
              I do the right things at all times
              <br />
              I have great value for time
              <br />
              I care for and respect people
              <br />
              I am establishing a positive legacy
              <br />
              I am a person of honour and integrity
              <br />
              I make my family and Nation proud
              <br />
              <b>I am a new breed without greed</b>
            </p>
          </div>

          <div className={styles['NewBreedCreedPageDeclarationContentFinal']}>
            <h3>We are the new breed</h3>
            <h3>We are without greed</h3>
            <p>
              All the spheres of human endeavors are waiting for us
            </p>
            <br />
            <p>
              <b>So help me God.</b>
            </p>
          </div>
        </div>
      </section>

      <section className={styles['NewBreedCreedPageLiveItOut']}>
        <div className={styles['NewBreedCreedPageLiveItOutContent']}>
          <div className={styles['NewBreedCreedPageLiveItOutHeader']}>
            <h2>Live it out</h2>
            <p>Take your next step in becoming the people this creed describes.</p>
          </div>

          <ul>
            <li>
              <Link to="/membership-class">
                <div>
                  <h3>Membership class</h3>
                  <p>Begin your journey as part of the Calvary family.</p>
                </div>

                <span>
                  <svg data-dc-tpl="98" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path data-dc-tpl="99" d="M5 12h14"></path><path data-dc-tpl="100" d="M13 6l6 6-6 6"></path></svg>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/house-fellowship">
                <div>
                  <h3>House fellowship</h3>
                  <p>Find a fellowship near you and grow in community.</p>
                </div>

                <span>
                  <svg data-dc-tpl="98" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path data-dc-tpl="99" d="M5 12h14"></path><path data-dc-tpl="100" d="M13 6l6 6-6 6"></path></svg>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/new-member">
                <div>
                  <h3>New members corner</h3>
                  <p>New here? Start with everything you need to know.</p>
                </div>

                <span>
                  <svg data-dc-tpl="98" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path data-dc-tpl="99" d="M5 12h14"></path><path data-dc-tpl="100" d="M13 6l6 6-6 6"></path></svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default NewBreedCreedPage
