import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'
import videojs from 'video.js';
import { useEffect } from 'react';

function AboutPage() {
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

    let player;

    try {
      player = videojs("welcome-video-player");
    } catch (error) {
      console.error("Error initializing video player:", error);
    }

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [location]);

  return (
    <div className={styles['AboutPage']}>
      <div className={styles['AboutPageBackground']} />

      <section className={styles['AboutPageHero']}>
        <div className={styles['AboutPageHeroContent']}>
          <div className={styles['AboutPageHeroCircle']}>
            <img src="/the-turning-point-circle.png" />

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                <path d="M30.545 22.9085L10.1821 38.1806H15.2728V50.9074M30.545 22.9085L50.9079 38.1806H45.8172V50.9074M30.545 22.9085V10.1816M15.2728 50.9074H7.63672M15.2728 50.9074H25.4543M45.8172 50.9074H53.4533M45.8172 50.9074H35.6357M35.6357 50.9074V43.2714C35.6357 41.9212 35.0994 40.6264 34.1447 39.6717C33.19 38.717 31.8951 38.1806 30.545 38.1806C29.1948 38.1806 27.9 38.717 26.9453 39.6717C25.9906 40.6264 25.4543 41.9212 25.4543 43.2714V50.9074M35.6357 50.9074H25.4543M25.4543 15.2724H35.6357" stroke="white" strokeWidth="3.80108" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h1>
            ABOUT
            <br />
            CALVARY BIBLE CHURCH
          </h1>

          <img src="/about-page-hero-image.jpg" />
        </div>
      </section>

      <section className={styles['AboutPageOverview']}>
        <h2>Overview</h2>

        <p>
          Calvary Bible church is a vibrant Bible-Centered church devoted to proclaiming Christ’s finished work at Calvary and nurturing transformative faith in everyday life. We are deeply rooted in the Word of God as brethren gather together for powerful worship, life-changing house fellowships and communion with the Holy Spirit. Our Church Shift teams carry the Gospel into prisons, hospitals and neighborhoods where it is needed most – reaching  the unreached with the light of Christ. We are a people who believe in a wholesome expression of the gospel, ensuring that faith is expressed in word and in deed. At Calvary Bible Church, every believer belongs, grows and has a testimony that endures in Christ. 
        </p>
      </section>

      <section className={styles['AboutPageWelcomeVideo']}>
        <div className={styles['AboutPageWelcomeVideoBackground']} />
        <div className={styles['AboutPageWelcomeVideoRotatedBackground']}>
          <img className={styles['AboutPageWelcomeVideoBackgroundImage']} src="/logo-dark.png" />
        </div>

        <div className={styles['AboutPageWelcomeVideoContainer']}>
          <video
            className="video-js vjs-theme-forest"
            controls
            data-setup='{}'
            id="welcome-video-player"
            preload="auto"
          >
            <source src="/videos/welcome-video.mp4" type="video/mp4" />
          </video>
        </div>

        <h2>
          Be Part of A People Walking Boldly In Power, Purpose, And Dominion.
        </h2>
      </section>

      <section className={styles['AboutPageBearBurdens']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1420" height="894" viewBox="0 0 1420 894" fill="none">
          <path d="M-118 571H849.356V891L1417 891V0" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
        </svg>

        <div className={styles['AboutPageBearBurdensText']}>
          <h2>
            Bear one another’s burdens, and so fulfill the law of Christ. 
          </h2>

          <p>
            At Calvary Bible Church, prayer is our first response and our steadfast anchor. We believe in standing in the gap for each other in love, and seeking God’s face in every need and desire. 
          </p>
        </div>

        <div className={styles['AboutPageBearBurdensImages']}>
          <img src="/about-page-bear-burdens-1.jpg" />
          <img src="/about-page-bear-burdens-2.jpg" />
        </div>
      </section>

      <section className={styles['AboutPageBranches']} id="Branches">
        <div className={styles['AboutPageBranchesHeader']}>
          <h2>Explore Our Branches and Fellowships</h2>

          <p>Join us at our branches or online as we worship, disciple, and serve together.</p>

          <div className={styles['AboutPageBranchesHeaderControls']}>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                <path d="M38.6394 23.0006C38.6394 31.6486 31.6474 38.6406 22.9994 38.6406C14.3514 38.6406 7.35938 31.6486 7.35938 23.0006C7.35938 14.3526 14.3514 7.36062 22.9994 7.36062C31.6474 7.36062 38.6394 14.3526 38.6394 23.0006ZM9.19938 23.0006C9.19938 30.6366 15.3634 36.8006 22.9994 36.8006C30.6354 36.8006 36.7994 30.6366 36.7994 23.0006C36.7994 15.3646 30.6354 9.20062 22.9994 9.20062C15.3634 9.20062 9.19938 15.3646 9.19938 23.0006Z" fill="black"/>
                <path d="M24.5636 15.3638L16.9276 22.9998L24.5636 30.6358L23.2756 31.9238L14.3516 22.9998L23.2756 14.0758L24.5636 15.3638Z" fill="black"/>
                <path d="M15.6406 23.9199V22.0799H31.2806V23.9199H15.6406Z" fill="black"/>
              </svg>
            </button>

            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                <path d="M7.36062 23.0006C7.36062 31.6486 14.3526 38.6406 23.0006 38.6406C31.6486 38.6406 38.6406 31.6486 38.6406 23.0006C38.6406 14.3526 31.6486 7.36062 23.0006 7.36062C14.3526 7.36062 7.36062 14.3526 7.36062 23.0006ZM36.8006 23.0006C36.8006 30.6366 30.6366 36.8006 23.0006 36.8006C15.3646 36.8006 9.20062 30.6366 9.20062 23.0006C9.20062 15.3646 15.3646 9.20062 23.0006 9.20062C30.6366 9.20062 36.8006 15.3646 36.8006 23.0006Z" fill="black"/>
                <path d="M21.4364 15.3638L29.0724 22.9998L21.4364 30.6358L22.7244 31.9238L31.6484 22.9998L22.7244 14.0758L21.4364 15.3638Z" fill="black"/>
                <path d="M30.3594 23.9199V22.0799H14.7194V23.9199H30.3594Z" fill="black"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles['AboutPageBranchesBackground']} />

        <ul>
          <li>
            <img />
            <h3>Branch Name</h3>
          </li>
          <li>
            <img />
            <h3>Branch Name</h3>
          </li>
          <li>
            <img />
            <h3>Branch Name</h3>
          </li>
          <li>
            <img />
            <h3>Branch Name</h3>
          </li>
          <li>
            <img />
            <h3>Branch Name</h3>
          </li>
          <li>
            <img />
            <h3>Branch Name</h3>
          </li>
          <li>
            <img />
            <h3>Branch Name</h3>
          </li>
          <li>
            <img />
            <h3>Branch Name</h3>
          </li>
        </ul>
      </section>

      <section className={styles['AboutPageVision']}>
        <svg className={styles['AboutPageVisionLine']} xmlns="http://www.w3.org/2000/svg" width="1377" height="420" viewBox="0 0 1377 420" fill="none">
          <path d="M0 2.5H1294V417.5H1540" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
        </svg>

        <div className={styles['AboutPageVisionCircle']} />

        <h2>Vision Statement</h2>

        <ul>
          <li>
            <h3>1</h3>
            <p>
              Recruitment Center: Recruiting men into God's Kingdom from the enemy's camp. (Psalm 2:8)
            </p>
          </li>

          <li>
            <h3>2</h3>
            <p>
              Teaching Center: Opening the eyes of believers to the realities of Calvary finished work. (Hosea 4:6)
            </p>
          </li>

          <li>
            <h3>3</h3>
            <p>
              Laundry Center: Preparing the saints for the second coming of Jesus Christ. (John 14:1-3)
            </p>
          </li>
        </ul>
      </section>

      <section className={styles['AboutPagePillars']}>
        <div className={styles['AboutPagePillarsHeader']}>
          <h2>7 Pillars Of Calvary</h2>

          <p>
            The brand known as Truth of Calvary Ministries, aka Calvary
            Bible Church and her network of churches globally has seven unique elements and
            distinguishing features which are revealed in the fabrics of the entire ministry as follows
          </p>
        </div>

        <ul>
          <li>
            <div>
              <h3>Love for God</h3>
              <p>
                Our love for God is evident from the leadership to the membership as the
                no compromise stand is a general knowledge in the house. If it is not Godly it is not Calvary-compliant.
              </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="117" height="108" viewBox="0 0 117 108" fill="none">
              <g filter="url(#filter0_d_3805_13887)">
                <path d="M112.762 44.6047H14.0872C9.41225 44.6047 7.4087 39.5367 11.0819 37.1273L60.4192 4.97466C61.3302 4.44137 62.3678 4.16016 63.4246 4.16016C64.4814 4.16016 65.519 4.44137 66.4299 4.97466L115.767 37.1273C119.44 39.5367 117.437 44.6047 112.762 44.6047Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M113.512 90.2988H13.3342C11.0289 90.2988 9.16016 92.159 9.16016 94.4529V106.915C9.16016 109.209 11.0289 111.069 13.3342 111.069H113.512C115.817 111.069 117.686 109.209 117.686 106.915V94.4529C117.686 92.159 115.817 90.2988 113.512 90.2988Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.6816 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49.5098 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M77.3359 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M105.164 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <filter id="filter0_d_3805_13887" x="0" y="0" width="121.846" height="119.229" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-5" dy="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.556863 0 0 0 0 0.2 0 0 0 0.37 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3805_13887"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3805_13887" result="shape"/>
                </filter>
              </defs>
            </svg>
          </li>

          <li>
            <div>
              <h3>Love for People</h3>
              <p>
                Our love for people is evident in our care and welfare structure put in place to help transform lives as a turning point. You need to identify areas of need in your location for Mission and Ministry.
              </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="117" height="108" viewBox="0 0 117 108" fill="none">
              <g filter="url(#filter0_d_3805_13887)">
                <path d="M112.762 44.6047H14.0872C9.41225 44.6047 7.4087 39.5367 11.0819 37.1273L60.4192 4.97466C61.3302 4.44137 62.3678 4.16016 63.4246 4.16016C64.4814 4.16016 65.519 4.44137 66.4299 4.97466L115.767 37.1273C119.44 39.5367 117.437 44.6047 112.762 44.6047Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M113.512 90.2988H13.3342C11.0289 90.2988 9.16016 92.159 9.16016 94.4529V106.915C9.16016 109.209 11.0289 111.069 13.3342 111.069H113.512C115.817 111.069 117.686 109.209 117.686 106.915V94.4529C117.686 92.159 115.817 90.2988 113.512 90.2988Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.6816 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49.5098 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M77.3359 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M105.164 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <filter id="filter0_d_3805_13887" x="0" y="0" width="121.846" height="119.229" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-5" dy="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.556863 0 0 0 0 0.2 0 0 0 0.37 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3805_13887"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3805_13887" result="shape"/>
                </filter>
              </defs>
            </svg>
          </li>

          <li>
            <div>
              <h3>Word-based and balanced</h3>
              <p>
                In Calvary, balance is key to our operation and the Word of God is our standard. Bible is not just our middle name as a Church but a central part of all we do. If it is not in the Word, it is not permitted in our world.
              </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="117" height="108" viewBox="0 0 117 108" fill="none">
              <g filter="url(#filter0_d_3805_13887)">
                <path d="M112.762 44.6047H14.0872C9.41225 44.6047 7.4087 39.5367 11.0819 37.1273L60.4192 4.97466C61.3302 4.44137 62.3678 4.16016 63.4246 4.16016C64.4814 4.16016 65.519 4.44137 66.4299 4.97466L115.767 37.1273C119.44 39.5367 117.437 44.6047 112.762 44.6047Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M113.512 90.2988H13.3342C11.0289 90.2988 9.16016 92.159 9.16016 94.4529V106.915C9.16016 109.209 11.0289 111.069 13.3342 111.069H113.512C115.817 111.069 117.686 109.209 117.686 106.915V94.4529C117.686 92.159 115.817 90.2988 113.512 90.2988Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.6816 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49.5098 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M77.3359 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M105.164 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <filter id="filter0_d_3805_13887" x="0" y="0" width="121.846" height="119.229" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-5" dy="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.556863 0 0 0 0 0.2 0 0 0 0.37 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3805_13887"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3805_13887" result="shape"/>
                </filter>
              </defs>
            </svg>
          </li>

          <li>
            <div>
              <h3>Wisdom, Common Sense, and Innovative Approach to Ministry</h3>
              <p>
                In Calvary we believe that the message of God does not change, but His methods do change and we are innovative and dynamic in our approach to reaching the lost and raising the saints wholly.
              </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="117" height="108" viewBox="0 0 117 108" fill="none">
              <g filter="url(#filter0_d_3805_13887)">
                <path d="M112.762 44.6047H14.0872C9.41225 44.6047 7.4087 39.5367 11.0819 37.1273L60.4192 4.97466C61.3302 4.44137 62.3678 4.16016 63.4246 4.16016C64.4814 4.16016 65.519 4.44137 66.4299 4.97466L115.767 37.1273C119.44 39.5367 117.437 44.6047 112.762 44.6047Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M113.512 90.2988H13.3342C11.0289 90.2988 9.16016 92.159 9.16016 94.4529V106.915C9.16016 109.209 11.0289 111.069 13.3342 111.069H113.512C115.817 111.069 117.686 109.209 117.686 106.915V94.4529C117.686 92.159 115.817 90.2988 113.512 90.2988Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.6816 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49.5098 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M77.3359 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M105.164 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <filter id="filter0_d_3805_13887" x="0" y="0" width="121.846" height="119.229" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-5" dy="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.556863 0 0 0 0 0.2 0 0 0 0.37 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3805_13887"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3805_13887" result="shape"/>
                </filter>
              </defs>
            </svg>
          </li>

          <li>
            <div>
              <h3>Timeliness</h3>

              <p>
                Starting any meeting late is an error among us and this is because we believe in timeliness and promptness and it has been a major distinguishing feature for us. You should never compromise this.
              </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="117" height="108" viewBox="0 0 117 108" fill="none">
              <g filter="url(#filter0_d_3805_13887)">
                <path d="M112.762 44.6047H14.0872C9.41225 44.6047 7.4087 39.5367 11.0819 37.1273L60.4192 4.97466C61.3302 4.44137 62.3678 4.16016 63.4246 4.16016C64.4814 4.16016 65.519 4.44137 66.4299 4.97466L115.767 37.1273C119.44 39.5367 117.437 44.6047 112.762 44.6047Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M113.512 90.2988H13.3342C11.0289 90.2988 9.16016 92.159 9.16016 94.4529V106.915C9.16016 109.209 11.0289 111.069 13.3342 111.069H113.512C115.817 111.069 117.686 109.209 117.686 106.915V94.4529C117.686 92.159 115.817 90.2988 113.512 90.2988Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.6816 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49.5098 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M77.3359 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M105.164 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <filter id="filter0_d_3805_13887" x="0" y="0" width="121.846" height="119.229" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-5" dy="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.556863 0 0 0 0 0.2 0 0 0 0.37 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3805_13887"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3805_13887" result="shape"/>
                </filter>
              </defs>
            </svg>
          </li>

          <li>
            <div>
              <h3>Integrity and Open-door policy</h3>
              <p>
                In Calvary there is no secret to our members and workforce, our open-door policy is clear to all and still makes us one of the few churches if any where you can openly ask question every week in our Bible Study service.
              </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="117" height="108" viewBox="0 0 117 108" fill="none">
              <g filter="url(#filter0_d_3805_13887)">
                <path d="M112.762 44.6047H14.0872C9.41225 44.6047 7.4087 39.5367 11.0819 37.1273L60.4192 4.97466C61.3302 4.44137 62.3678 4.16016 63.4246 4.16016C64.4814 4.16016 65.519 4.44137 66.4299 4.97466L115.767 37.1273C119.44 39.5367 117.437 44.6047 112.762 44.6047Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M113.512 90.2988H13.3342C11.0289 90.2988 9.16016 92.159 9.16016 94.4529V106.915C9.16016 109.209 11.0289 111.069 13.3342 111.069H113.512C115.817 111.069 117.686 109.209 117.686 106.915V94.4529C117.686 92.159 115.817 90.2988 113.512 90.2988Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.6816 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49.5098 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M77.3359 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M105.164 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <filter id="filter0_d_3805_13887" x="0" y="0" width="121.846" height="119.229" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-5" dy="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.556863 0 0 0 0 0.2 0 0 0 0.37 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3805_13887"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3805_13887" result="shape"/>
                </filter>
              </defs>
            </svg>
          </li>

          <li>
            <div>
              <h3>Prudence and Investment Mentality</h3>
              <p>
                As a Ministry, being prudent with all resources at our disposal and ensuring effective management is key. We explore investment and Kingdom business opportunities to maximize the reach of our resources.
              </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="117" height="108" viewBox="0 0 117 108" fill="none">
              <g filter="url(#filter0_d_3805_13887)">
                <path d="M112.762 44.6047H14.0872C9.41225 44.6047 7.4087 39.5367 11.0819 37.1273L60.4192 4.97466C61.3302 4.44137 62.3678 4.16016 63.4246 4.16016C64.4814 4.16016 65.519 4.44137 66.4299 4.97466L115.767 37.1273C119.44 39.5367 117.437 44.6047 112.762 44.6047Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M113.512 90.2988H13.3342C11.0289 90.2988 9.16016 92.159 9.16016 94.4529V106.915C9.16016 109.209 11.0289 111.069 13.3342 111.069H113.512C115.817 111.069 117.686 109.209 117.686 106.915V94.4529C117.686 92.159 115.817 90.2988 113.512 90.2988Z" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.6816 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49.5098 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M77.3359 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M105.164 44.6055V90.3004" stroke="#FC8E33" strokeWidth="8.32" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <filter id="filter0_d_3805_13887" x="0" y="0" width="121.846" height="119.229" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-5" dy="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.556863 0 0 0 0 0.2 0 0 0 0.37 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3805_13887"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3805_13887" result="shape"/>
                </filter>
              </defs>
            </svg>
          </li>
        </ul>
      </section>

      <section className={styles['AboutPageWorship']}>
        <img src="/about-page-section-bg-2.jpg" alt="Worship" />
        <div>
          <h2>Those who worship Him, must worship in spirit and truth.</h2>
          <p>
            Worship is a life-changing encounter, and the greatest thing a man can give to God.
            Join us as we declare His greatness with gratitude.
          </p>
        </div>
      </section>

      <section className={styles['AboutPageGathering']}>
        <img src="/about-page-section-bg-1.jpg" alt="Gathering" />
        <div>
          <h2>Where two or three are gathered, He is there.</h2>
          <p>
            Every gathering is a family united in purpose. We embrace one another, and create a community where people thrive and lives are transformed.
          </p>
        </div>
      </section>

      <section className={styles['AboutPageCoreValues']}>
        <img src="/about-page-section-bg-2.jpg" alt="Worship" />
        <div>
          <h2>Our Core Values</h2>

          <ul>
            <li>Prayer</li>
            <li>Worship</li>
            <li>Community</li>
            <li>Discipleship</li>
          </ul>
        </div>
      </section>

      <section className={styles['AboutPageWhatWeDo']}>
        <img src="/about-page-section-bg-1.jpg" alt="Gathering" />
        <div>
          <h2>What We Do</h2>
          <p>
            From small groups to community outreach, prayer gatherings, and global missions, we live out our calling to be salt and light wherever we are.
          </p>
        </div>
      </section>

      <section className={styles['AboutPagePeopleAfterGodsHeart']}>
        <div className={styles['AboutPagePeopleAfterGodsHeartCircle']}>
          <img src="/the-turning-point-circle.png" />

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
              <path d="M30.545 22.9085L10.1821 38.1806H15.2728V50.9074M30.545 22.9085L50.9079 38.1806H45.8172V50.9074M30.545 22.9085V10.1816M15.2728 50.9074H7.63672M15.2728 50.9074H25.4543M45.8172 50.9074H53.4533M45.8172 50.9074H35.6357M35.6357 50.9074V43.2714C35.6357 41.9212 35.0994 40.6264 34.1447 39.6717C33.19 38.717 31.8951 38.1806 30.545 38.1806C29.1948 38.1806 27.9 38.717 26.9453 39.6717C25.9906 40.6264 25.4543 41.9212 25.4543 43.2714V50.9074M35.6357 50.9074H25.4543M25.4543 15.2724H35.6357" stroke="white" strokeWidth="3.80108" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <img src="/about-page-people-after-gods-heart-image.jpg" alt="" />

        <div className={styles['AboutPagePeopleAfterGodsHeartContent']}>
          <h2>A People After God's Heart</h2>
          <p>We live to honor God, love others, and worship Him in spirit and truth.</p>

          <Link to="/new">
            I'm New
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
