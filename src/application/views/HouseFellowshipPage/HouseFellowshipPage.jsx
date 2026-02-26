import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'

import {
  index as house_fellowship_centres_index,
} from '../../services/api/v1/house_fellowship_centres'
import { useEffect } from 'react';

function HouseFelllowshipPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(house_fellowship_centres_index({}));
  }, [dispatch]);

  const {
    house_fellowship_centres,
  } = useSelector((state) => state.house_fellowship_centres);

  return (
    <div className={styles['HouseFelllowshipPage']}>
      <section className={styles['HouseFelllowshipPageHero']}>
        <div className={styles['HouseFelllowshipPageHeroContent']}>
          <div className={styles['HouseFelllowshipPageHeroCircle']}>
            <img src="/the-turning-point-circle.png" />

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                <path d="M30.545 22.9085L10.1821 38.1806H15.2728V50.9074M30.545 22.9085L50.9079 38.1806H45.8172V50.9074M30.545 22.9085V10.1816M15.2728 50.9074H7.63672M15.2728 50.9074H25.4543M45.8172 50.9074H53.4533M45.8172 50.9074H35.6357M35.6357 50.9074V43.2714C35.6357 41.9212 35.0994 40.6264 34.1447 39.6717C33.19 38.717 31.8951 38.1806 30.545 38.1806C29.1948 38.1806 27.9 38.717 26.9453 39.6717C25.9906 40.6264 25.4543 41.9212 25.4543 43.2714V50.9074M35.6357 50.9074H25.4543M25.4543 15.2724H35.6357" stroke="white" strokeWidth="3.80108" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h1>
            House Fellowship
          </h1>

          <img />
        </div>
      </section>

      <section className={styles['HouseFelllowshipPageContent']}>
        <ul>
          {
            house_fellowship_centres.map((house_fellowship_centre) => (
              <li key={house_fellowship_centre.id}>
                <h3>{house_fellowship_centre.name}</h3>

                <div className={styles['HouseFelllowshipPageContentCoordinator']}>
                  <h4>Coordinator</h4>
                  <div>
                    <span>
                      <img src={house_fellowship_centre.coordinator_image} />
                      {house_fellowship_centre.coordinator_name}
                    </span>

                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.48303 1.2933C7.70003 0.0832966 9.70403 0.298297 10.723 1.6603L11.985 3.3443C12.815 4.4523 12.741 6.0003 11.756 6.9793L11.518 7.2173C11.491 7.31721 11.4883 7.42211 11.51 7.5233C11.573 7.9313 11.914 8.7953 13.342 10.2153C14.77 11.6353 15.64 11.9753 16.054 12.0393C16.1583 12.0603 16.2661 12.0572 16.369 12.0303L16.777 11.6243C17.653 10.7543 18.997 10.5913 20.081 11.1803L21.991 12.2203C23.628 13.1083 24.041 15.3323 22.701 16.6653L21.28 18.0773C20.832 18.5223 20.23 18.8933 19.496 18.9623C17.686 19.1313 13.469 18.9153 9.03603 14.5083C4.89903 10.3943 4.10503 6.8063 4.00403 5.0383C3.95403 4.1443 4.37603 3.3883 4.91403 2.8543L6.48303 1.2933ZM9.52303 2.5593C9.01603 1.8823 8.07203 1.8283 7.54003 2.3573L5.97003 3.9173C5.64003 4.2453 5.48203 4.6073 5.50203 4.9533C5.58203 6.3583 6.22203 9.5953 10.094 13.4453C14.156 17.4833 17.907 17.6043 19.357 17.4683C19.653 17.4413 19.947 17.2873 20.222 17.0143L21.642 15.6013C22.22 15.0273 22.093 13.9813 21.275 13.5373L19.365 12.4983C18.837 12.2123 18.219 12.3063 17.835 12.6883L17.38 13.1413L16.85 12.6093C17.38 13.1413 17.378 13.1423 17.378 13.1423L17.377 13.1443L17.374 13.1473L17.367 13.1533L17.352 13.1673C17.3098 13.2065 17.2643 13.2419 17.216 13.2733C17.136 13.3263 17.03 13.3853 16.897 13.4343C16.627 13.5353 16.269 13.5893 15.827 13.5213C14.96 13.3883 13.811 12.7973 12.284 11.2793C10.758 9.7613 10.162 8.6193 10.028 7.7533C9.95903 7.3113 10.014 6.9533 10.116 6.6833C10.1722 6.53137 10.2525 6.38953 10.354 6.2633L10.386 6.2283L10.4 6.2133L10.406 6.2073L10.409 6.2043L10.411 6.2023L10.699 5.9163C11.127 5.4893 11.187 4.7823 10.784 4.2433L9.52303 2.5593Z" fill="#777777"/>
                      </svg>

                      {house_fellowship_centre.coordinator_phone}
                    </span>
                  </div>
                </div>

                <div className={styles['HouseFelllowshipPageContentLocation']}>
                  <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C7.6 2 4 5.6 4 10C4 15.4 11 21.5 11.3 21.8C11.5 21.9 11.8 22 12 22C12.2 22 12.5 21.9 12.7 21.8C13 21.5 20 15.4 20 10C20 5.6 16.4 2 12 2ZM12 19.7C9.9 17.7 6 13.4 6 10C6 6.7 8.7 4 12 4C15.3 4 18 6.7 18 10C18 13.3 14.1 17.7 12 19.7ZM12 6C9.8 6 8 7.8 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 7.8 14.2 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill="#777777"/>
                    </svg>

                    Location
                  </h4>

                  <div>
                    {
                      house_fellowship_centre.locations.map((location) => (
                        <p key={location.id}>{location.address}</p>
                      ))
                    }
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}

export default HouseFelllowshipPage
