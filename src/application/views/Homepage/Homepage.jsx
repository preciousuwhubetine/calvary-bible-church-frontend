import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function Homepage() {
  return (
    <div className={styles['Homepage']}>
      <section className={styles['HomepageHero']}>
        <video
          autoPlay
          className={styles['HomepageHeroVideo']}
          loop
          muted
        >
          <source src="/videos/homepage-hero-section-video.mp4" type="video/mp4" />
        </video>

        <div className={styles['HomepageHeroContent']}>
          <h1>
            Raising a People of Power, Purpose & Dominion
          </h1>
          <p>
            Worship and serve god with us for six months, and experience a major testimony in your life!
          </p>

          <div className={styles['HomepageHeroContentActions']}>
            <Link to="/">
              Watch Live
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 2H22V4H21V18H14.414L18.414 22L17 23.414L12 18.414L7 23.414L5.586 22L9.586 18H3V4H2V2ZM5 4V16H19V4H5ZM10 6.5L14.667 10L10 13.5V6.5Z" fill="white"/>
              </svg>
            </Link>

            <Link to="/">
              I'm new
            </Link>
          </div>
        </div>
      </section>

      <section className={styles['HomepageAbout']}>
        <div className={styles['HomepageAboutContent']}>
          <svg width="60" height="47" viewBox="0 0 60 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7901 46.2831C5.35909 46.2831 -0.000104851 40.5341 -0.000104851 32.4466C-0.000104851 17.0511 9.84134 4.48131 26.2113 -0.0009277L26.601 1.07092C11.4978 5.65059 1.36406 16.2716 1.26661 32.8364C2.53333 28.4516 6.13861 24.2616 12.3748 24.2616C18.5135 24.2616 22.9957 28.9388 22.9957 35.4672C22.9957 41.8008 18.8058 46.2831 11.7901 46.2831ZM44.9197 46.2831C38.4887 46.2831 33.1295 40.5341 33.1295 32.4466C33.1295 17.0511 42.9709 4.48131 59.3409 -0.0009277L59.7306 1.07092C44.6274 5.65059 34.4937 16.2716 34.3962 32.8364C35.6629 28.4516 39.2682 24.2616 45.5044 24.2616C51.6431 24.2616 56.1253 28.9388 56.1253 35.4672C56.1253 41.8008 51.9354 46.2831 44.9197 46.2831Z" fill="black"/>
          </svg>

          <div>
            <h2>Calvary Bible Church Is A Christ-Centered Family - Rooted In Love For God And People.</h2>
            <p>Overwhelmed by the grace we've found in Jesus, we are worshippers at heart, lovers of the local church, and carriers of a divine mission to see His Kingdom, come and His will be done on earth.</p>
          </div>

          <Link to="/">I'm New</Link>
        </div>
      </section>

      <section className={styles['HomepageSellingPoints']}>
        <ul>
          <li>
            <img alt="" src="/homepage-bible-centered-teaching.jpg" />
            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98" fill="none">
              <path d="M24.5 89.8327H85.75V81.666H24.549C22.6625 81.617 20.4167 80.8698 20.4167 77.5827C20.4167 74.2956 22.6625 73.5483 24.549 73.4993H85.75V16.3327C85.75 11.8288 82.0872 8.16602 77.5833 8.16602H24.5C19.5755 8.16602 12.25 11.4286 12.25 20.416V77.5827C12.25 86.5701 19.5755 89.8327 24.5 89.8327ZM20.4167 32.666V20.416C20.4167 17.1289 22.6625 16.3817 24.5 16.3327H77.5833V65.3327H20.4167V32.666Z" fill="white"/>
              <path d="M44.9167 57.1667H53.0833V40.8333H61.25V32.6667H53.0833V24.5H44.9167V32.6667H36.75V40.8333H44.9167V57.1667Z" fill="white"/>
            </svg>

            <div>
              <h3>Bible Centered Teaching</h3>

              <p>
                Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for authentic worship, are passionate about the local church.
              </p>
            </div>
          </li>

          <li>
            <img alt="" src="/homepage-loving-community.jpg" />
            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
              <path d="M21.584 55.5V52.4167C21.584 48.3279 23.2082 44.4066 26.0994 41.5154C28.9906 38.6243 32.9119 37 37.0007 37M37.0007 37C41.0894 37 45.0107 38.6243 47.9019 41.5154C50.7931 44.4066 52.4173 48.3279 52.4173 52.4167V55.5M37.0007 37C39.4539 37 41.8067 36.0254 43.5414 34.2907C45.2761 32.556 46.2507 30.2033 46.2507 27.75C46.2507 25.2967 45.2761 22.944 43.5414 21.2093C41.8067 19.4746 39.4539 18.5 37.0007 18.5C34.5474 18.5 32.1946 19.4746 30.4599 21.2093C28.7252 22.944 27.7507 25.2967 27.7507 27.75C27.7507 30.2033 28.7252 32.556 30.4599 34.2907C32.1946 36.0254 34.5474 37 37.0007 37ZM3.08398 55.5V52.4167C3.08398 49.9634 4.05854 47.6106 5.79325 45.8759C7.52796 44.1412 9.88073 43.1667 12.334 43.1667M12.334 43.1667C13.9695 43.1667 15.538 42.517 16.6945 41.3605C17.851 40.204 18.5007 38.6355 18.5007 37C18.5007 35.3645 17.851 33.796 16.6945 32.6395C15.538 31.483 13.9695 30.8333 12.334 30.8333C10.6985 30.8333 9.12997 31.483 7.97349 32.6395C6.81702 33.796 6.16732 35.3645 6.16732 37C6.16732 38.6355 6.81702 40.204 7.97349 41.3605C9.12997 42.517 10.6985 43.1667 12.334 43.1667ZM70.9173 55.5V52.4167C70.9173 49.9634 69.9428 47.6106 68.2081 45.8759C66.4733 44.1412 64.1206 43.1667 61.6673 43.1667M61.6673 43.1667C63.3028 43.1667 64.8713 42.517 66.0278 41.3605C67.1843 40.204 67.834 38.6355 67.834 37C67.834 35.3645 67.1843 33.796 66.0278 32.6395C64.8713 31.483 63.3028 30.8333 61.6673 30.8333C60.0318 30.8333 58.4633 31.483 57.3068 32.6395C56.1504 33.796 55.5007 35.3645 55.5007 37C55.5007 38.6355 56.1504 40.204 57.3068 41.3605C58.4633 42.517 60.0318 43.1667 61.6673 43.1667Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div>
              <h3>
                Loving
                <br />
                Community
              </h3>

              <p>
                Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for authentic worship, are passionate about the local church.
              </p>
            </div>
          </li>

          <li>
            <img alt="" src="/homepage-impactful-outreach.jpg" />
            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98" fill="none">
              <path d="M70 17.5V52.5M70 17.5L59.5 3.5M70 17.5L80.5 3.5M3.5 77L20.608 91.252C23.1239 93.3467 26.2943 94.4935 29.568 94.493H74.662C77.882 94.493 80.5 91.882 80.5 88.662C80.5 82.222 75.278 76.993 68.831 76.993H37.478M94.5 17.5H45.5V52.5H94.5V17.5Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.5 70L29.75 75.25C31.1424 76.6424 33.0309 77.4246 35 77.4246C36.9691 77.4246 38.8576 76.6424 40.25 75.25C41.6424 73.8576 42.4246 71.9691 42.4246 70C42.4246 68.0309 41.6424 66.1424 40.25 64.75L32.102 56.595C30.8 55.2945 29.2545 54.2634 27.5537 53.5608C25.8529 52.8581 24.0302 52.4976 22.19 52.5H3.5" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div>
              <h3>
                Impactful
                <br />
                Outreach
              </h3>

              <p>
                Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for authentic worship, are passionate about the local church.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className={styles['HomepageLatestSermon']}>
        
      </section>
    </div>
  )
}

export default Homepage
