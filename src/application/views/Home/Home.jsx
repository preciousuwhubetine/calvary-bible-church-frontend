import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'

import {
  index as events_index,
} from '../../services/api/v1/events'

import {
  index as past_sermons_index,
} from '../../services/api/v1/past_sermons'

import {
  create as feedbacks_create,
} from '../../services/api/v1/feedbacks'

import PrayerRequestPopup from '../../components/Popups/PrayerRequest/PrayerRequest';
import TestimonyPopup from '../../components/Popups/Testimony/Testimony';

function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const eventsContainerRef = useRef(null);
  const sneakPeekListRef = useRef(null);

  const [showPrayerRequestPopup, setShowPrayerRequestPopup] = useState(false);
  const [showTestimonyPopup, setShowTestimonyPopup] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const container = sneakPeekListRef.current

      if (!container) return;

      const speed = 1.2;

      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      const scrollPercentage = currentScrollTop / (document.documentElement.scrollHeight - window.innerHeight);
      const maxScroll = container.scrollWidth - window.innerWidth;

      container.scrollTo({ left: scrollPercentage * maxScroll * speed, top: 0, behavior: 'smooth' });
    });

    window.addEventListener('resize', () => {
      const eventsContainer = eventsContainerRef.current;

      if (eventsContainer) {
        eventsContainer.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      }
    });
  })

  const {
    events,
  } = useSelector((state) => state.events);

  const {
    past_sermons,
  } = useSelector((state) => state.past_sermons);

  const {
    createLoading: feedbackCreateLoading,
  } = useSelector((state) => state.feedbacks);

  const [timeToNextEvent, setTimeToNextEvent] = useState({
    message: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  const handleFeedbackFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    dispatch(feedbacks_create({
      feedback: data
    })).then(() => {
      alert('Feedback submitted successfully!')

      e.target.reset();
    }).catch(() => {
      alert('Failed to submit feedback. Please try again.')
    })
  };

  useEffect(() => {
    dispatch(events_index({
      page: 1,
      per_page: 3
    }))
  }, [dispatch]);

  useEffect(() => {
    dispatch(past_sermons_index({
      page: 1,
      per_page: 1
    }))
  }, [dispatch]);

  useEffect(() => {
    if (events.length === 0) return;

    const nextEventDate = new Date(Array.from(events).sort((a, b) => new Date(a.start_date) - new Date(b.start_date))[0].start_date);

    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = nextEventDate - now;
      if (timeDifference <= 0) {
        setTimeToNextEvent({
          message: 'Event is happening now!',
          days: null,
          hours: null,
          minutes: null,
          seconds: null,
        });
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setTimeToNextEvent({
          days,
          hours,
          minutes,
          seconds,
          message: null,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [events]);

  return (
    <div className={styles['HomePage']}>
      {
        showPrayerRequestPopup && <PrayerRequestPopup close={() => setShowPrayerRequestPopup(false)} />
      }

      {
        showTestimonyPopup && <TestimonyPopup close={() => setShowTestimonyPopup(false)} />
      }

      <section className={styles['HomePageHero']}>
        <video
          autoPlay
          className={styles['HomePageHeroVideo']}
          loop
          muted
        >
          <source src="/videos/homepage-hero-section-video.mp4" type="video/mp4" />
        </video>

        <div className={styles['HomePageHeroContent']}>
          <div className={styles['HomePageHeroCircle']}>
            <img src="/the-turning-point-circle.png" />

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                <path d="M30.545 22.9085L10.1821 38.1806H15.2728V50.9074M30.545 22.9085L50.9079 38.1806H45.8172V50.9074M30.545 22.9085V10.1816M15.2728 50.9074H7.63672M15.2728 50.9074H25.4543M45.8172 50.9074H53.4533M45.8172 50.9074H35.6357M35.6357 50.9074V43.2714C35.6357 41.9212 35.0994 40.6264 34.1447 39.6717C33.19 38.717 31.8951 38.1806 30.545 38.1806C29.1948 38.1806 27.9 38.717 26.9453 39.6717C25.9906 40.6264 25.4543 41.9212 25.4543 43.2714V50.9074M35.6357 50.9074H25.4543M25.4543 15.2724H35.6357" stroke="white" strokeWidth="3.80108" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h1>
            Raising a People of Power, Purpose & Dominion
          </h1>
          <p>
            Worship and serve god with us for six months, and experience a major testimony in your life!
          </p>

          <div className={styles['HomePageHeroContentActions']}>
            <Link to="/livestream">
              Watch Live
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 2H22V4H21V18H14.414L18.414 22L17 23.414L12 18.414L7 23.414L5.586 22L9.586 18H3V4H2V2ZM5 4V16H19V4H5ZM10 6.5L14.667 10L10 13.5V6.5Z" fill="white"/>
              </svg>
            </Link>

            <Link to="/new">
              I'm new
            </Link>
          </div>
        </div>
      </section>

      <section className={styles['HomePageAbout']}>
        <div className={styles['HomePageAboutContent']}>
          <svg width="60" height="47" viewBox="0 0 60 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7901 46.2831C5.35909 46.2831 -0.000104851 40.5341 -0.000104851 32.4466C-0.000104851 17.0511 9.84134 4.48131 26.2113 -0.0009277L26.601 1.07092C11.4978 5.65059 1.36406 16.2716 1.26661 32.8364C2.53333 28.4516 6.13861 24.2616 12.3748 24.2616C18.5135 24.2616 22.9957 28.9388 22.9957 35.4672C22.9957 41.8008 18.8058 46.2831 11.7901 46.2831ZM44.9197 46.2831C38.4887 46.2831 33.1295 40.5341 33.1295 32.4466C33.1295 17.0511 42.9709 4.48131 59.3409 -0.0009277L59.7306 1.07092C44.6274 5.65059 34.4937 16.2716 34.3962 32.8364C35.6629 28.4516 39.2682 24.2616 45.5044 24.2616C51.6431 24.2616 56.1253 28.9388 56.1253 35.4672C56.1253 41.8008 51.9354 46.2831 44.9197 46.2831Z" fill="black"/>
          </svg>

          <div>
            <h2>Calvary Bible Church Is A Christ-Centered Family - Rooted In Love For God And People.</h2>
            <p>Overwhelmed by the grace we've found in Jesus, we are worshippers at heart, lovers of the local church, and carriers of a divine mission to see His Kingdom come and His will be done on earth.</p>
          </div>

          <Link to="/about">Learn More</Link>
        </div>
      </section>

      <section className={styles['HomePageGrayBackgroundSection']}>
        <div className={styles['HomePageGrayBackground']} />
        <div className={styles['HomePageGrayRotatedBackground']}>
          <img className={styles['HomePageGraybackgroundSectionImage']} src="/icon.png" />
        </div>

        <section className={styles['HomePageSellingPoints']}>
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
                <path d="M21.584 55.5V52.4167C21.584 48.3279 23.2082 44.4066 26.0994 41.5154C28.9906 38.6243 32.9119 37 37.0007 37M37.0007 37C41.0894 37 45.0107 38.6243 47.9019 41.5154C50.7931 44.4066 52.4173 48.3279 52.4173 52.4167V55.5M37.0007 37C39.4539 37 41.8067 36.0254 43.5414 34.2907C45.2761 32.556 46.2507 30.2033 46.2507 27.75C46.2507 25.2967 45.2761 22.944 43.5414 21.2093C41.8067 19.4746 39.4539 18.5 37.0007 18.5C34.5474 18.5 32.1946 19.4746 30.4599 21.2093C28.7252 22.944 27.7507 25.2967 27.7507 27.75C27.7507 30.2033 28.7252 32.556 30.4599 34.2907C32.1946 36.0254 34.5474 37 37.0007 37ZM3.08398 55.5V52.4167C3.08398 49.9634 4.05854 47.6106 5.79325 45.8759C7.52796 44.1412 9.88073 43.1667 12.334 43.1667M12.334 43.1667C13.9695 43.1667 15.538 42.517 16.6945 41.3605C17.851 40.204 18.5007 38.6355 18.5007 37C18.5007 35.3645 17.851 33.796 16.6945 32.6395C15.538 31.483 13.9695 30.8333 12.334 30.8333C10.6985 30.8333 9.12997 31.483 7.97349 32.6395C6.81702 33.796 6.16732 35.3645 6.16732 37C6.16732 38.6355 6.81702 40.204 7.97349 41.3605C9.12997 42.517 10.6985 43.1667 12.334 43.1667ZM70.9173 55.5V52.4167C70.9173 49.9634 69.9428 47.6106 68.2081 45.8759C66.4733 44.1412 64.1206 43.1667 61.6673 43.1667M61.6673 43.1667C63.3028 43.1667 64.8713 42.517 66.0278 41.3605C67.1843 40.204 67.834 38.6355 67.834 37C67.834 35.3645 67.1843 33.796 66.0278 32.6395C64.8713 31.483 63.3028 30.8333 61.6673 30.8333C60.0318 30.8333 58.4633 31.483 57.3068 32.6395C56.1504 33.796 55.5007 35.3645 55.5007 37C55.5007 38.6355 56.1504 40.204 57.3068 41.3605C58.4633 42.517 60.0318 43.1667 61.6673 43.1667Z" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
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
                <path d="M70 17.5V52.5M70 17.5L59.5 3.5M70 17.5L80.5 3.5M3.5 77L20.608 91.252C23.1239 93.3467 26.2943 94.4935 29.568 94.493H74.662C77.882 94.493 80.5 91.882 80.5 88.662C80.5 82.222 75.278 76.993 68.831 76.993H37.478M94.5 17.5H45.5V52.5H94.5V17.5Z" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24.5 70L29.75 75.25C31.1424 76.6424 33.0309 77.4246 35 77.4246C36.9691 77.4246 38.8576 76.6424 40.25 75.25C41.6424 73.8576 42.4246 71.9691 42.4246 70C42.4246 68.0309 41.6424 66.1424 40.25 64.75L32.102 56.595C30.8 55.2945 29.2545 54.2634 27.5537 53.5608C25.8529 52.8581 24.0302 52.4976 22.19 52.5H3.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
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

        {
          past_sermons.length > 0 && (
            <section className={styles['HomePageLatestSermon']}>
              <h2>LATEST SERMON</h2>

              <div>
                <img src={past_sermons[0].cover_image} alt="Latest Sermon" />

                <ul>
                  <li>
                    <h4>
                      SERMON TITLE
                    </h4>
                    <h3>
                      {past_sermons[0].series_title}
                    </h3>
                  </li>

                  <li>
                    <h4>
                      PREACHER
                    </h4>
                    <h3>
                      {past_sermons[0].minister}
                    </h3>
                  </li>

                  <li>
                    <Link to={past_sermons[0].video_url} target="_blank" rel="noopener noreferrer">
                      Watch Now
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2 2H22V4H21V18H14.414L18.414 22L17 23.414L12 18.414L7 23.414L5.586 22L9.586 18H3V4H2V2ZM5 4V16H19V4H5ZM10 6.5L14.667 10L10 13.5V6.5Z" fill="white"/>
                      </svg>
                    </Link>

                    <Link to="/past-sermons">
                      All Sermons
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          )
        }
      </section>

      <section className={styles['HomePageServiceTimes']}>
        <h2>WORSHIP WITH US</h2>

        <svg xmlns="http://www.w3.org/2000/svg" width="1219" height="915" viewBox="0 0 1219 915" fill="none">
          <path d="M-39 644.5H751.901L751.901 912L1216 912V0" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
        </svg>

        <div className={styles['HomePageServiceTimesSunday1']}>
          <h3>Success, Business & Leadership Service</h3>

          <div>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="35" viewBox="0 0 39 35" fill="none">
                <path d="M19.1146 0C29.6716 0 38.2292 7.83475 38.2292 17.5C38.2292 27.1652 29.6716 35 19.1146 35C8.5576 35 0 27.1652 0 17.5C0 7.83475 8.5576 0 19.1146 0ZM19.1146 3.5C15.059 3.5 11.1695 4.975 8.30174 7.60051C5.434 10.226 3.82292 13.787 3.82292 17.5C3.82292 21.213 5.434 24.774 8.30174 27.3995C11.1695 30.025 15.059 31.5 19.1146 31.5C23.1702 31.5 27.0597 30.025 29.9274 27.3995C32.7952 24.774 34.4062 21.213 34.4062 17.5C34.4062 13.787 32.7952 10.226 29.9274 7.60051C27.0597 4.975 23.1702 3.5 19.1146 3.5ZM19.1146 7C19.5828 7.00006 20.0346 7.15742 20.3845 7.44225C20.7344 7.72708 20.9579 8.11956 21.0127 8.54525L21.026 8.75V16.7755L26.2004 21.5128C26.5432 21.8277 26.7422 22.2503 26.757 22.6947C26.7719 23.1391 26.6014 23.572 26.2802 23.9055C25.959 24.239 25.5112 24.448 25.0277 24.4902C24.5443 24.5324 24.0614 24.4045 23.6772 24.1325L23.4976 23.9872L17.7632 18.7372C17.4661 18.465 17.2753 18.1108 17.2203 17.7292L17.2031 17.5V8.75C17.2031 8.28587 17.4045 7.84075 17.763 7.51256C18.1214 7.18437 18.6076 7 19.1146 7Z" fill="black"/>
              </svg>

              8AM
            </h4>

            <h5>Sundays</h5>
          </div>
        </div>

        <div className={styles['HomePageServiceTimesWednesday']}>
          <h3>
            School of the {' '}
            <br />
            Spirit
          </h3>

          <div>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="35" viewBox="0 0 39 35" fill="none">
                <path d="M19.1146 0C29.6716 0 38.2292 7.83475 38.2292 17.5C38.2292 27.1652 29.6716 35 19.1146 35C8.5576 35 0 27.1652 0 17.5C0 7.83475 8.5576 0 19.1146 0ZM19.1146 3.5C15.059 3.5 11.1695 4.975 8.30174 7.60051C5.434 10.226 3.82292 13.787 3.82292 17.5C3.82292 21.213 5.434 24.774 8.30174 27.3995C11.1695 30.025 15.059 31.5 19.1146 31.5C23.1702 31.5 27.0597 30.025 29.9274 27.3995C32.7952 24.774 34.4062 21.213 34.4062 17.5C34.4062 13.787 32.7952 10.226 29.9274 7.60051C27.0597 4.975 23.1702 3.5 19.1146 3.5ZM19.1146 7C19.5828 7.00006 20.0346 7.15742 20.3845 7.44225C20.7344 7.72708 20.9579 8.11956 21.0127 8.54525L21.026 8.75V16.7755L26.2004 21.5128C26.5432 21.8277 26.7422 22.2503 26.757 22.6947C26.7719 23.1391 26.6014 23.572 26.2802 23.9055C25.959 24.239 25.5112 24.448 25.0277 24.4902C24.5443 24.5324 24.0614 24.4045 23.6772 24.1325L23.4976 23.9872L17.7632 18.7372C17.4661 18.465 17.2753 18.1108 17.2203 17.7292L17.2031 17.5V8.75C17.2031 8.28587 17.4045 7.84075 17.763 7.51256C18.1214 7.18437 18.6076 7 19.1146 7Z" fill="black"/>
              </svg>

              6PM
            </h4>

            <h5>Wednesdays</h5>
          </div>
        </div>

        <div className={styles['HomePageServiceTimesSunday2']}>
          <h3>Celebration & Prophetic Service</h3>

          <div>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="35" viewBox="0 0 39 35" fill="none">
                <path d="M19.1146 0C29.6716 0 38.2292 7.83475 38.2292 17.5C38.2292 27.1652 29.6716 35 19.1146 35C8.5576 35 0 27.1652 0 17.5C0 7.83475 8.5576 0 19.1146 0ZM19.1146 3.5C15.059 3.5 11.1695 4.975 8.30174 7.60051C5.434 10.226 3.82292 13.787 3.82292 17.5C3.82292 21.213 5.434 24.774 8.30174 27.3995C11.1695 30.025 15.059 31.5 19.1146 31.5C23.1702 31.5 27.0597 30.025 29.9274 27.3995C32.7952 24.774 34.4062 21.213 34.4062 17.5C34.4062 13.787 32.7952 10.226 29.9274 7.60051C27.0597 4.975 23.1702 3.5 19.1146 3.5ZM19.1146 7C19.5828 7.00006 20.0346 7.15742 20.3845 7.44225C20.7344 7.72708 20.9579 8.11956 21.0127 8.54525L21.026 8.75V16.7755L26.2004 21.5128C26.5432 21.8277 26.7422 22.2503 26.757 22.6947C26.7719 23.1391 26.6014 23.572 26.2802 23.9055C25.959 24.239 25.5112 24.448 25.0277 24.4902C24.5443 24.5324 24.0614 24.4045 23.6772 24.1325L23.4976 23.9872L17.7632 18.7372C17.4661 18.465 17.2753 18.1108 17.2203 17.7292L17.2031 17.5V8.75C17.2031 8.28587 17.4045 7.84075 17.763 7.51256C18.1214 7.18437 18.6076 7 19.1146 7Z" fill="black"/>
              </svg>

              10AM
            </h4>

            <h5>Sundays</h5>
          </div>
        </div>
      </section>

      <section className={styles['HomePageAddress']}>
        <div>
          <h2>
            Rehoboth Multi-Purpose Hall, Calvary Bus Stop, Ikotun, 257 Ikotun - Idimu Rd, Ikotun, Lagos
          </h2>

          <a href="https://maps.app.goo.gl/NpgPGhLSRfodkWmb9" target="_blank">
            Find us on Google Maps

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12L20.5 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 5L21 12L14 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <img src="/homepage-address-section-map-image.png" alt="" />
        </div>
      </section>

      <section className={styles['HomePageEvents']}>
        <div className={styles['HomePageEventsHeader']}>
          <h2>UPCOMING EVENTS</h2>

          <Link to="/events">
            View All Events

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12L20.5 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 5L21 12L14 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {
          events.length === 0 ? (
            <div className={styles['HomePageEventsNoEvents']}>
              <h3>
                No upcoming events at the moment. Check back later!
              </h3>
            </div>
          ) : (
            <>
              <svg className={styles['HomePageEventsLine']} xmlns="http://www.w3.org/2000/svg" width="1439" height="420" viewBox="0 0 1439 420" fill="none">
                <path d="M-40 2.5H1166.5V417.5H1438.5" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
              </svg>

              <svg className={styles['HomePageEventsCircle']} xmlns="http://www.w3.org/2000/svg" width="71" height="225" viewBox="0 0 71 225" fill="none">
                <circle cx="112.5" cy="112.5" r="110" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
              </svg>

              <div className={styles['HomePageEventsContent']}>
                <button onClick={() => {
                  const currentChild = parseInt(eventsContainerRef.current.dataset.currentChild) || 0;
                  if (eventsContainerRef.current) {
                    const nextChild = Math.max(currentChild - 1, 0);
                    eventsContainerRef.current.children[nextChild].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    eventsContainerRef.current.dataset.currentChild = nextChild;
                  }
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.4006 17.2798L8.64062 11.5198L14.4006 5.75977" stroke="black" strokeWidth="1.28" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <ul data-current-child={0} ref={eventsContainerRef}>
                  {
                    Array.from(events).sort((a, b) => new Date(a.start_date) - new Date(b.start_date)).map((event, index) => (
                      <li key={index}>
                        <img src={event.cover_image} />

                        <div>
                          <h3>{event.title}</h3>

                          <hr />

                          <div className={styles['HomePageEventsDate']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z" fill="#000000"/>
                            </svg>

                            {(new Date(event.start_date)).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>

                          <div className={styles['HomePageEventsTime']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM10 4C10.2449 4.00003 10.4813 4.08996 10.6644 4.25272C10.8474 4.41547 10.9643 4.63975 10.993 4.883L11 5V9.586L13.707 12.293C13.8863 12.473 13.9905 12.7144 13.9982 12.9684C14.006 13.2223 13.9168 13.4697 13.7488 13.6603C13.5807 13.8508 13.3464 13.9703 13.0935 13.9944C12.8406 14.0185 12.588 13.9454 12.387 13.79L12.293 13.707L9.293 10.707C9.13758 10.5514 9.03776 10.349 9.009 10.131L9 10V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4Z" fill="#000000"/>
                            </svg>

                            {event.time}
                          </div>

                          <hr />

                          <p>
                            {event.description}
                          </p>
                        </div>
                      </li>
                    ))
                  }
                </ul>

                <button onClick={() => {
                  let currentChild = parseInt(eventsContainerRef.current.dataset.currentChild) || 0;

                  if (eventsContainerRef.current) {
                    const nextChild = Math.min(currentChild + 1, eventsContainerRef.current.children.length - 1);
                    eventsContainerRef.current.children[nextChild].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    eventsContainerRef.current.dataset.currentChild = nextChild;
                  }
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8.63937 17.2798L14.3994 11.5198L8.63937 5.75977" stroke="black" strokeWidth="1.28" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

              </div>

              {
                timeToNextEvent.seconds === null ? null : (
                  <div className={styles['HomePageEventsCountdown']}>
                    <div className={styles['HomePageEventsCountdownTimer']}>
                      <div className={styles['HomePageEventsCountdownTimerItem']}>
                        <div>
                          {
                            timeToNextEvent.days.toString().padStart(2, '0').split('').map((digit, index) => (
                              <h3 key={index}>{digit}</h3>
                            ))
                          }
                        </div>

                        <h4>DAYS</h4>
                      </div>

                      <div className={styles['HomePageEventsCountdownTimerItem']}>
                        <div>
                          {
                            timeToNextEvent.hours.toString().padStart(2, '0').split('').map((digit, index) => (
                              <h3 key={index}>{digit}</h3>
                            ))
                          }
                        </div>

                        <h4>HOURS</h4>
                      </div>

                      <div className={styles['HomePageEventsCountdownTimerItem']}>
                        <div>
                          {
                            timeToNextEvent.minutes.toString().padStart(2, '0').split('').map((digit, index) => (
                              <h3 key={index}>{digit}</h3>
                            ))
                          }
                        </div>

                        <h4>MINUTES</h4>
                      </div>

                      <div className={styles['HomePageEventsCountdownTimerItem']}>
                        <div>
                          {
                            timeToNextEvent.seconds.toString().padStart(2, '0').split('').map((digit, index) => (
                              <h3 key={index}>{digit}</h3>
                            ))
                          }
                        </div>

                        <h4>SECONDS</h4>
                      </div>
                    </div>

                    <h4>Till {events[0]?.title}</h4>
                  </div>
                )
              }
            </>
          )
        }

        <Link className={styles['HomePageEventsMobileLink']} to="/events">
          View All Events

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12L20.5 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 5L21 12L14 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </section>

      <section className={styles['HomePagePrayers']} id="prayer-requests">
        <div className={styles['HomePagePrayersContent']}>
          <svg className={styles['HomePagePrayersCircle']} xmlns="http://www.w3.org/2000/svg" width="93" height="93" viewBox="0 0 93 93" fill="none">
            <circle cx="46.5" cy="46.5" r="44" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
          </svg>

          <svg className={styles['HomePagePrayersHands']} xmlns="http://www.w3.org/2000/svg" width="291" height="401" viewBox="0 0 291 401" fill="none">
            <path d="M70.1011 0.885651C73.0199 2.29102 76.1549 5.64221 78.5331 9.96634C80.8574 14.2364 83.5599 17.8038 84.3707 17.8038C84.695 17.8038 86.2085 16.939 87.776 15.912C91.3434 13.5878 94.5324 12.8311 97.7755 13.5337C101.721 14.3985 104.37 16.3984 108.64 21.4252C121.828 37.2083 129.125 44.7215 139.774 53.7481C146.746 59.6938 148.314 61.4234 150.368 65.7475C151.232 67.4772 152.692 70.45 153.611 72.3959L155.34 75.9092L160.475 76.2336C163.286 76.4498 166.313 76.8822 167.178 77.2065C169.286 78.0713 170.313 77.6389 174.15 74.1796C178.366 70.396 181.447 68.9366 184.582 69.315C188.636 69.7474 190.798 71.2608 192.636 74.8282C194.203 77.9091 194.258 78.3416 194.149 84.2872C194.095 87.6925 193.501 93.1517 192.906 96.3948C192.312 99.6919 191.825 103.746 191.825 105.421C191.825 109.043 193.825 115.853 196.42 121.042C197.338 122.988 199.933 129.907 202.095 136.447C204.744 144.339 207.23 150.554 209.446 154.825C213.176 162.176 215.932 169.256 217.013 174.499C218.473 181.526 217.716 190.715 214.959 199.417C212.473 207.2 212.635 210.011 215.932 216.605C218.797 222.281 218.851 222.551 218.256 233.47C218.04 238.064 218.743 239.685 222.364 243.199C223.608 244.442 224.364 245.739 224.58 247.091C224.959 249.415 225.175 249.631 228.58 251.036C229.932 251.631 232.04 252.766 233.229 253.577C234.472 254.442 235.661 255.09 235.877 255.09C236.526 255.09 245.228 260.441 249.714 263.576C253.822 266.441 255.552 268.711 254.849 270.495C254.255 272.116 251.552 271.143 246.688 267.468C243.661 265.198 229.878 258.009 224.959 256.171C222.472 255.252 221.013 255.036 218.04 255.198C212.797 255.577 210.311 256.982 204.527 262.874C200.257 267.306 199.176 268.063 195.879 269.36C193.825 270.117 190.42 271.684 188.312 272.819C183.663 275.36 180.853 278.981 179.934 283.683C178.853 289.035 177.61 292.872 176.745 293.683C173.826 296.223 171.286 294.602 171.286 290.062C171.286 288.548 171.069 286.927 170.799 286.494C169.88 285.035 167.34 286.44 163.07 290.926C152.908 301.466 145.233 311.736 140.584 320.871C135.017 331.843 133.666 337.195 133.179 350.005C132.801 360.437 132.639 360.22 139.125 359.139C141.828 358.707 145.773 358.329 147.935 358.329C152.259 358.329 153.989 357.734 153.989 356.221C153.989 355.68 153.286 352.491 152.422 349.086C149.773 338.762 149.773 330.006 152.368 328.6C153.665 327.898 153.773 327.898 154.746 328.925C155.394 329.519 155.611 330.87 155.611 334.06C155.611 338.924 157.178 346.924 159.178 352.275C161.502 358.383 160.151 358.004 176.691 357.518C185.771 357.302 191.501 356.923 192.366 356.545C193.555 355.95 193.771 355.41 194.041 352.383C194.42 348.329 197.176 341.627 204.257 327.519C209.987 316.06 211.77 313.088 216.311 307.628C224.148 298.277 232.418 292.007 245.282 285.683C251.282 282.765 252.417 282.386 255.93 282.224C259.282 282.008 260.255 282.224 262.741 283.413C264.308 284.17 266.849 285.791 268.308 286.981C271.227 289.305 275.497 291.575 280.74 293.575C286.199 295.629 290.199 300.602 290.199 305.412C290.199 311.088 287.172 314.223 276.578 319.79C272.038 322.168 267.173 324.925 265.768 325.844C261.93 328.438 256.471 334.762 248.633 345.789C240.526 357.14 236.688 362.166 234.31 364.707C232.256 366.923 225.77 371.896 223.175 373.193C219.716 374.977 209.932 378.22 204.581 379.355C197.771 380.814 192.582 383.355 187.609 387.733C182.69 392.057 181.015 392.868 179.123 391.624C178.366 391.138 177.772 390.489 177.772 390.219C177.772 389.246 181.664 385.354 186.096 381.895C194.636 375.301 194.96 375.139 207.5 372.328C215.878 370.436 218.419 369.463 222.635 366.328C228.959 361.626 233.607 356.059 247.552 336.762C254.201 327.519 256.687 324.655 261.173 321.141C265.227 317.952 268.849 315.952 275.497 313.196C281.443 310.655 283.929 308.439 283.929 305.628C283.929 302.818 282.199 300.98 277.983 299.196C269.93 295.845 266.416 293.899 263.227 291.034C258.741 287.035 256.903 286.981 249.985 290.71C238.742 296.71 230.094 302.764 223.716 309.142C219.5 313.358 217.824 315.574 214.419 321.411C212.095 325.303 210.203 328.654 210.203 328.817C210.203 328.979 209.5 330.33 208.581 331.735C206.906 334.492 204.311 340.6 201.176 349.14C200.149 351.951 198.96 354.815 198.528 355.464C198.095 356.113 197.771 357.626 197.771 358.761C197.771 362.274 197.068 362.707 190.69 363.193C187.555 363.464 175.718 363.68 164.421 363.734C144.422 363.734 143.719 363.788 138.53 365.085C135.612 365.842 131.72 367.193 129.882 368.058C123.828 371.031 118.91 377.247 117.991 383.084C117.666 384.976 117.937 385.949 119.288 388.76C121.126 392.489 122.855 394.003 126.639 395.3C130.747 396.705 134.855 396.435 141.719 394.219C153.286 390.489 158.151 387.246 172.367 373.787C177.285 369.139 181.88 365.193 182.582 364.977C184.312 364.545 185.555 365.409 185.771 367.139C185.934 368.328 184.744 369.734 178.474 376.004C166.583 387.895 156.638 394.705 145.071 398.921C140.638 400.489 139.665 400.651 133.45 400.705L126.693 400.759L122.909 398.651C115.504 394.489 113.126 390.435 113.559 382.436C113.991 374.814 116.748 370.815 126.585 363.734C129.071 361.95 129.179 361.734 128.855 359.95C127.99 355.086 127.936 341.248 128.801 336.492C129.234 333.843 129.504 331.465 129.342 331.249C128.747 330.222 126.315 330.87 121.504 333.249C116.91 335.519 115.829 336.384 110.37 342.059C107.018 345.518 103.235 349.518 101.992 351.032C99.2889 354.275 93.9919 358.869 88.911 362.437C85.2355 364.977 71.1821 372.382 69.993 372.382C69.6687 372.382 67.4526 372.977 65.1283 373.733C57.8854 376.058 53.7235 375.355 50.8587 371.355C49.9939 370.166 48.9669 368.058 48.6426 366.707C48.1021 364.653 47.7237 364.166 46.0481 363.464C44.9131 362.977 40.9673 360.761 37.2377 358.545C29.5084 353.95 25.6166 350.437 19.2926 342.383C16.9143 339.411 12.32 334.546 8.96878 331.573C1.99612 325.303 0.374573 322.709 0.0502625 317.52C-0.111893 314.871 0.104317 313.574 1.02319 311.52C2.915 307.25 6.80671 296.494 9.18498 288.872C13.2929 275.792 16.4279 270.495 24.968 262.279C30.4272 257.036 32.4812 255.793 34.319 256.658C35.0216 256.982 35.6162 257.685 35.6162 258.171C35.6162 258.712 32.3191 262.603 28.3192 266.819C24.3194 271.089 20.2115 275.846 19.1845 277.413C17.0765 280.657 15.5631 285.197 14.3199 292.007C13.2388 297.521 11.1849 303.466 8.10395 309.628C5.18517 315.358 5.23922 318.817 8.158 321.952C10.5903 324.546 12.374 322.547 12.374 317.195C12.374 313.844 14.1037 309.25 16.536 306.061C21.6168 299.412 22.7519 296.872 23.7249 289.953C24.5356 284.656 27.7787 278.008 31.0759 275.143C33.9946 272.603 35.6702 272.008 37.5621 272.873C39.562 273.738 39.1836 275.36 36.2108 278.495C32.0488 282.981 30.211 286.332 29.8327 290.386C29.6705 292.278 29.6705 294.764 29.8867 295.899L30.2651 297.899L31.6164 296.656C32.3731 295.953 33.8325 293.629 34.8054 291.467C36.8053 287.197 38.7512 284.819 40.4268 284.819C43.4537 284.819 43.9942 288.926 41.8321 294.98C37.8864 305.953 37.8864 322.006 41.8321 324.6C43.2915 325.573 48.7507 325.303 53.9937 324.006C55.6153 323.574 59.0205 322.871 61.5609 322.438C74.1009 320.114 74.7495 319.952 76.6954 318.331C81.8303 313.952 87.4516 309.898 93.2352 306.385C96.8026 304.277 100.1 302.169 100.694 301.629C102.1 300.385 103.991 297.359 104.748 294.98C106.099 290.818 109.829 288.872 111.559 291.467C112.315 292.602 112.261 292.98 110.856 296.223C107.397 304.223 106.262 305.628 101.505 307.736C97.5593 309.466 88.7489 315.466 84.2626 319.412C78.9655 324.06 76.3711 325.195 66.2094 327.249C62.9122 327.952 57.2909 329.141 53.7235 329.952C48.5345 331.087 46.3184 331.357 42.6969 331.141C39.5079 330.925 37.2918 331.141 35.4 331.681C33.4001 332.276 31.4002 332.438 27.9409 332.168C20.3196 331.681 20.1574 332.114 24.5897 339.194C30.3191 348.275 32.1028 349.897 41.2916 354.167C44.2645 355.518 47.6156 357.41 48.6967 358.329C51.129 360.329 51.5614 360.166 55.3991 356.004C56.8585 354.437 59.7232 351.842 61.7771 350.329C64.6959 348.167 65.6689 347.681 66.4256 348.059C66.9661 348.329 67.5066 348.924 67.6688 349.356C68.0471 350.383 67.0742 353.464 66.3715 353.464C65.4527 353.464 55.0748 364.274 54.7504 365.572C54.264 367.68 54.6964 368.815 56.372 369.625C57.7233 370.22 58.3719 370.22 61.5069 369.409C66.4796 368.058 76.6413 363.41 83.5599 359.356C88.2624 356.653 90.5326 354.815 95.0189 350.275C98.1539 347.086 102.208 342.708 104.045 340.438C105.937 338.167 108.532 335.465 109.775 334.438C113.505 331.357 120.423 327.033 122.639 326.384C124.963 325.682 128.152 326.114 129.125 327.249C129.99 328.33 131.071 327.735 131.882 325.736C133.287 322.114 137.99 313.088 140.098 309.953C144.314 303.737 149.341 297.521 157.178 288.981C165.989 279.359 168.637 277.413 172.421 278.062C174.367 278.386 174.637 278.278 176.312 276.332C180.366 271.522 182.961 269.522 189.501 266.333C195.285 263.468 196.636 262.495 200.852 258.387C206.095 253.252 209.878 250.928 214.419 250.009C218.527 249.199 219.013 248.226 216.797 245.253C213.554 240.983 213.284 239.848 213.338 231.848C213.446 224.011 212.959 221.632 210.311 216.822C209.122 214.66 208.851 213.47 208.689 209.146C208.527 204.714 208.743 203.093 210.203 197.525C213.878 183.634 212.743 172.067 206.527 161.04C202.419 153.635 199.501 146.555 197.447 138.609C196.636 135.582 195.717 133.312 188.96 117.799C185.393 109.529 185.069 105.53 187.231 95.3138C189.177 86.2871 189.393 79.1523 187.717 76.9362C186.258 74.9363 184.15 74.2336 182.042 75.1525C181.123 75.4768 178.691 77.747 176.691 80.0712C173.556 83.6927 172.907 84.7737 172.637 86.8817C172.475 88.287 171.934 91.0977 171.394 93.2057C170.259 97.9082 170.096 113.529 171.178 117.097C171.556 118.34 173.718 122.123 175.934 125.42C183.663 136.771 185.177 140.122 187.771 151.419C189.393 158.716 189.393 160.716 187.663 160.932C185.609 161.257 184.474 158.716 182.096 148.609C180.366 141.366 178.096 136.825 172.529 129.691C167.178 122.826 165.07 119.421 161.286 111.908C157.124 103.53 154.205 95.8002 152.151 87.4763C151.07 83.0981 149.449 77.5848 148.584 75.1525C145.341 66.3961 143.449 63.6395 135.882 57.2074C128.585 51.0455 116.531 39.0461 107.289 28.7222C100.208 20.8307 97.6674 18.8849 94.4783 18.8849C91.2352 18.8849 88.0462 22.6144 88.8029 25.4791C89.2353 27.3169 94.2621 34.6139 102.532 45.6404C110.37 56.0183 111.721 57.7479 118.802 65.8557C129.071 77.6389 130.639 80.5036 133.179 92.6652C135.341 103.151 141.828 120.448 146.314 127.907C147.557 129.907 148.8 132.339 149.124 133.312C150.26 136.555 147.719 138.609 145.503 136.231C144.963 135.636 142.8 131.799 140.638 127.691C135.179 117.205 129.45 101.259 128.044 92.7733C127.288 87.9627 124.639 81.8009 121.666 78.0173C120.261 76.1795 115.829 70.8284 111.829 66.0719C98.316 50.1266 89.8299 38.3974 73.7766 13.4797C69.2363 6.45297 66.1553 4.39902 62.7501 6.12866C59.7232 7.69617 59.3989 8.6691 59.3989 16.4525C59.3989 24.1278 59.1827 24.8305 56.5882 24.8305C54.6423 24.8305 54.2099 23.8576 53.8856 18.9929C53.5613 14.9391 52.5884 12.9391 51.2912 13.7499C49.1291 15.1012 46.5887 27.9655 47.2913 34.0193C47.7778 38.1272 48.4805 38.7758 51.9938 38.5056C56.8044 38.1272 57.1287 37.965 58.5341 35.2084C60.1015 32.1815 61.7231 30.56 64.3716 29.4249C66.912 28.3979 68.7498 28.3979 72.1551 29.4249C77.5062 30.9924 80.1547 34.5598 84.3167 45.7484C87.6678 54.721 90.6407 60.4505 97.4512 71.0446C114.64 97.8542 115.775 100.395 117.721 116.502C118.91 126.285 120.207 131.312 124.261 141.798C125.72 145.636 126.369 148.122 126.153 148.987C125.828 150.284 123.99 151.365 122.855 150.933C122.261 150.717 119.396 144.933 119.396 144.068C119.396 143.852 118.531 141.474 117.45 138.717C114.477 131.15 113.396 126.772 112.856 119.745C112.261 111.367 111.559 107.8 109.667 102.665C107.505 96.7191 105.775 93.476 101.667 87.5303C94.3162 76.8281 90.4245 70.9365 88.9651 68.5042C86.2625 63.8557 81.7762 54.3967 78.8574 47.2619C75.8306 39.6947 74.2631 37.2083 71.6145 35.5868C69.3444 34.2355 67.3445 34.2896 65.5608 35.8571C64.2635 36.9381 64.0473 37.5867 63.8311 40.6136C63.723 42.5594 63.8852 46.5592 64.2095 49.478C65.0743 57.5317 63.9392 60.1803 60.4799 58.3425C59.2367 57.6939 58.48 55.0994 58.0476 50.1266C57.8314 48.1267 57.453 46.343 57.1828 46.1268C56.2639 45.5863 54.8045 46.4511 53.291 48.5051C49.6155 53.3698 46.1562 58.1803 45.2374 59.7478C44.1023 61.6396 43.3996 67.4232 44.2104 68.5582C44.4807 68.9906 46.1022 69.5312 47.8318 69.7474C49.9939 70.0176 51.7236 70.7203 53.3451 71.8553C56.5882 74.1255 57.399 73.8553 57.8314 70.5041C58.2097 67.5853 60.2097 63.2612 62.2636 60.991C63.8852 59.2073 67.885 58.5046 71.2902 59.4235C74.1009 60.1802 77.6683 63.3693 79.5601 66.8826C81.8843 71.1527 84.8031 79.2604 86.1544 85.098C89.9921 101.746 91.992 108.556 95.0729 115.367C97.3971 120.556 98.5322 123.853 99.343 128.069C99.9375 131.204 101.505 136.717 102.91 140.339C104.262 143.96 105.721 148.555 106.208 150.609C106.64 152.608 107.343 155.527 107.721 157.095C108.478 160.176 108.099 161.581 106.424 161.581C104.478 161.581 103.343 159.689 102.1 154.5C101.451 151.69 99.8295 146.879 98.5322 143.798C96.6945 139.474 95.8837 136.609 95.0189 131.366C93.9378 124.448 93.3433 122.826 88.9651 114.826C87.6138 112.448 86.6949 109.421 85.3977 103.205C81.7222 85.7466 77.6143 73.0985 73.8847 68.0177C69.8308 62.3963 64.3176 64.2341 63.4527 71.477C63.1284 74.3958 64.2095 85.6926 65.5608 93.5841C66.858 101.043 67.9931 105.259 70.6416 112.935L73.182 120.232L73.0199 128.339C72.9118 132.771 72.8037 138.447 72.7496 140.825L72.6415 145.203L76.8575 153.419C81.1276 161.797 82.6411 166.283 82.6411 171.04C82.6411 174.607 81.9384 177.094 79.2358 182.931C77.0737 187.58 76.9656 188.012 77.0197 192.931C77.0197 198.282 77.7224 201.309 80.479 208.336C81.56 211.038 82.2086 213.903 82.6411 218.335C83.8302 230.443 85.5058 235.523 91.992 246.442C97.7755 256.171 101.397 261.576 107.235 269.414C117.829 283.683 121.612 289.683 130.477 306.331C131.396 308.007 130.909 309.628 129.396 310.007C126.693 310.655 126.261 310.115 122.099 301.791C116.694 290.98 113.667 286.116 104.478 273.954C97.0728 264.063 88.7489 251.469 85.1274 244.712C80.1006 235.145 78.5331 230.389 77.7764 222.119C77.0737 214.281 76.9116 213.47 74.2631 205.957C70.8578 196.066 70.8038 190.066 74.155 181.31C76.5873 174.932 77.5061 169.743 76.6954 166.175C76.3711 164.662 74.155 159.527 71.6686 154.662L67.2364 145.798L67.5066 139.798C67.6147 136.447 67.7228 130.934 67.7228 127.528C67.6688 122.069 67.5066 120.826 66.1553 117.529C64.0473 112.178 59.3989 94.0706 59.3989 91.2058C59.3989 90.1248 58.3179 89.314 57.8314 90.1248C57.6692 90.4491 57.0747 92.7193 56.5341 95.2057C55.5072 99.8541 52.5343 108.448 49.8858 114.556C48.4805 117.799 48.3724 118.61 48.3724 124.826V131.582L51.9398 140.501C57.7773 154.879 58.1557 162.608 53.3992 172.662C52.8586 173.851 52.0479 175.742 51.6154 176.878C50.9128 178.661 50.5885 178.932 49.2912 178.769C48.3724 178.661 47.5075 178.067 47.0211 177.202C46.1562 175.634 46.4806 174.391 49.4534 167.527C50.8047 164.5 51.0209 163.365 50.9668 159.149C50.9668 153.095 49.8858 149.095 46.4806 141.852C42.6429 133.853 41.9402 130.718 42.2645 123.475C42.5889 117.151 42.8051 116.178 46.967 105.367C50.9128 95.0435 51.9398 90.2329 51.7236 83.2062C51.6155 78.3956 51.3992 77.1524 50.5344 76.2336C48.3724 73.8012 44.2645 75.6389 42.4807 79.8009C41.9943 80.936 40.2646 85.4763 38.535 89.9626C36.8594 94.3949 34.6433 100.232 33.6163 102.935C27.076 119.745 24.2113 129.474 23.887 135.906C23.6708 140.555 23.7248 141.041 25.8329 146.825C28.8597 155.203 29.6165 158.878 30.4813 168.878C31.238 177.742 31.7245 179.85 35.9405 192.12C40.1565 204.444 40.5889 207.038 41.0213 222.119C41.2916 230.929 41.724 237.091 42.2645 239.145C43.9401 246.118 44.859 249.199 46.4265 252.982C47.7237 256.171 48.048 257.793 48.048 260.928C48.048 265.955 48.8588 267.792 53.183 272.603C57.1828 277.089 61.4529 279.954 67.0742 281.9C72.4253 283.792 74.9117 285.143 75.9927 286.764C76.8575 288.116 76.8575 288.224 75.9387 288.926C74.6955 289.845 73.128 289.521 65.4527 286.927C57.8314 284.386 55.0748 282.602 49.8318 277.035C44.6428 271.468 42.8051 267.792 42.3726 261.847C42.1564 259.468 41.4538 255.685 40.697 253.469C39.9944 251.253 39.1836 247.847 38.8593 245.901C38.535 243.956 37.9404 240.821 37.4539 238.875C36.9675 236.767 36.481 230.172 36.1567 222.443C35.5081 207.146 35.2919 205.741 31.8326 195.309C27.9949 183.688 25.995 175.472 25.3464 169.094C24.6437 161.851 23.4005 155.797 21.7249 151.041C17.2387 138.447 17.617 131.961 23.5087 116.772C24.8599 113.421 27.2382 106.773 28.9138 102.016C30.5353 97.3137 32.6974 91.4221 33.6703 88.9897C34.6973 86.5574 35.8324 83.3143 36.2108 81.8549C36.5351 80.3415 37.508 77.801 38.3188 76.1254C39.7241 73.2066 39.8322 72.7743 39.562 67.4772C39.1836 60.4505 40.2106 57.0993 44.6428 50.505L47.6697 45.9106L45.3455 42.6135C43.2915 39.6947 43.0213 38.8299 42.5348 34.9381C41.8862 29.4249 42.2645 24.29 43.778 18.3443C46.0482 9.53391 48.3183 5.91248 51.7236 5.91248C53.183 5.91248 54.1559 5.42599 55.9936 3.69635C57.2909 2.50723 59.1286 1.15591 60.1015 0.777527C62.5339 -0.303497 67.7228 -0.24942 70.1011 0.885651ZM240.255 270.927C243.12 273.414 240.688 275.63 235.066 275.63C230.796 275.63 229.932 276.008 225.391 280.224C223.013 282.44 220.148 284.44 218.094 285.305C215.23 286.602 214.581 287.197 213.446 289.467C212.04 292.224 210.905 292.818 208.257 292.17C206.527 291.737 206.149 289.791 207.23 287.197C208.419 284.332 210.365 282.386 214.257 280.224C216.04 279.197 218.959 276.981 220.743 275.36C225.499 270.873 228.31 269.684 234.094 269.684C238.201 269.684 238.958 269.846 240.255 270.927Z" fill="#FC8E33"/>
          </svg>

          <div>
            <h2>God Answers Prayers</h2>

            <p>Prayer is not our last resort—it is our first response. “Call to Me and I will answer you” (Jeremiah 33:3). When we pray, God answers in love, in power, and in time.</p>

            <button onClick={() => setShowPrayerRequestPopup(true)}>
              Submit Prayer Request
            </button>
          </div>
        </div>
      </section>

      <section className={styles['HomePageSneakPeek']}>
        <h2>SNEAK PEEK</h2>

        <ul ref={sneakPeekListRef}>
          <li>
            <img src="/sneak-peek-image-1.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-2.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-3.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-4.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-5.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-6.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-7.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-8.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-9.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-10.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-11.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-12.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-13.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-14.jpg" />
          </li>
          <li>
            <img src="/sneak-peek-image-15.jpg" />
          </li>
        </ul>
      </section>

      <section className={styles['HomePageLeadership']}>
        <h2>OUR LEADERSHIP</h2>

        <div className={styles['HomePageLeadershipContent']}>
          <div className={styles['HomePageLeadershipContentMain']}>
            <h3>Pastor Olumide Emmanuel</h3>

            <p>
              Pastor Olumide Emmanuel has been the heart and soul of Calvary Bible Church for over 35 years. As the founding Overseer, he has transformed a small gathering into a vibrant, Bible-centered community where members are inspired to live out their faith as true value creators. He is a prolific author with more than 100 books to his name, and an esteemed speaker in demand globally. His teachings emphasize practical applications of faith, encouraging people to become resilient, purpose-driven leaders who address real-world challenges with integrity and hope. Under his leadership, Calvary Bible Church thrives as a beacon of light in the city. Pastor Emmanuel continues to foster a culture of empowerment and growth, equipping each member to fulfill their God-given purpose and make a meaningful impact in their communities.
            </p>

            <Link to="/leadership">
              See All Our Leaders
            </Link>
          </div>

          <img src="/homepage-leadership-overseers-image.jpg" />
        </div>
      </section>

      <section className={styles['HomePageTestimonies']} id="testimonies">
        <div className={styles['HomePageTestimoniesHeader']}>
          <h2>SEE WHAT THE LORD IS DOING!</h2>
        </div>

        <ul>
          <li>
            <svg width="60" height="47" viewBox="0 0 60 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7901 46.2831C5.35909 46.2831 -0.000104851 40.5341 -0.000104851 32.4466C-0.000104851 17.0511 9.84134 4.48131 26.2113 -0.0009277L26.601 1.07092C11.4978 5.65059 1.36406 16.2716 1.26661 32.8364C2.53333 28.4516 6.13861 24.2616 12.3748 24.2616C18.5135 24.2616 22.9957 28.9388 22.9957 35.4672C22.9957 41.8008 18.8058 46.2831 11.7901 46.2831ZM44.9197 46.2831C38.4887 46.2831 33.1295 40.5341 33.1295 32.4466C33.1295 17.0511 42.9709 4.48131 59.3409 -0.0009277L59.7306 1.07092C44.6274 5.65059 34.4937 16.2716 34.3962 32.8364C35.6629 28.4516 39.2682 24.2616 45.5044 24.2616C51.6431 24.2616 56.1253 28.9388 56.1253 35.4672C56.1253 41.8008 51.9354 46.2831 44.9197 46.2831Z" fill="black"/>
            </svg>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In porro illum debitis natus tempore necessitatibus sequi similique dolore, tenetur quo iusto eius amet quia, quisquam, omnis sapiente cupiditate laboriosam delectus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In porro illum debitis natus tempore necessitatibus sequi similique dolore, tenetur quo iusto eius amet quia, quisquam, omnis sapiente cupiditate laboriosam delectus.
            </p>

            <div>
              <img />
              <h4>John Doe</h4>
            </div>
          </li>

          <li>
            <svg width="60" height="47" viewBox="0 0 60 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7901 46.2831C5.35909 46.2831 -0.000104851 40.5341 -0.000104851 32.4466C-0.000104851 17.0511 9.84134 4.48131 26.2113 -0.0009277L26.601 1.07092C11.4978 5.65059 1.36406 16.2716 1.26661 32.8364C2.53333 28.4516 6.13861 24.2616 12.3748 24.2616C18.5135 24.2616 22.9957 28.9388 22.9957 35.4672C22.9957 41.8008 18.8058 46.2831 11.7901 46.2831ZM44.9197 46.2831C38.4887 46.2831 33.1295 40.5341 33.1295 32.4466C33.1295 17.0511 42.9709 4.48131 59.3409 -0.0009277L59.7306 1.07092C44.6274 5.65059 34.4937 16.2716 34.3962 32.8364C35.6629 28.4516 39.2682 24.2616 45.5044 24.2616C51.6431 24.2616 56.1253 28.9388 56.1253 35.4672C56.1253 41.8008 51.9354 46.2831 44.9197 46.2831Z" fill="black"/>
            </svg>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In porro illum debitis natus tempore necessitatibus sequi similique dolore, tenetur quo iusto eius amet quia, quisquam, omnis sapiente cupiditate laboriosam delectus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In porro illum debitis natus tempore necessitatibus sequi similique dolore, tenetur quo iusto eius amet quia, quisquam, omnis sapiente cupiditate laboriosam delectus.
            </p>

            <div>
              <img />
              <h4>John Doe</h4>
            </div>
          </li>
        </ul>

        <button onClick={() => setShowTestimonyPopup(true)}>
          Share Your Testimony
        </button>
      </section>

      <section className={styles['HomePageFeedback']}>
        <img src="/homepage-feedback-section-bg.jpg" />

        <div className={styles['HomePageFeedbackText']}>
          <h2>
            We
            <br />
            Would Love To
            <br />
            Hear From You!
          </h2>
        </div>

        <form onSubmit={handleFeedbackFormSubmit}>
          <div>
            <h3>FEEDBACK FORM</h3>
            <p>Share your feedback</p>
          </div>

          <label>
            Name
            <input name="name" type="text" placeholder="Name" required />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" required />
          </label>

          <label>
            Feedback
            <textarea name="comments" required rows={10} />
          </label>

          <button disabled={feedbackCreateLoading} type="submit">
            {feedbackCreateLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>
    </div>
  )
}

export default HomePage
