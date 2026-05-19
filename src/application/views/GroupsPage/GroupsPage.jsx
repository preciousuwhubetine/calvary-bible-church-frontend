import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'

import {
  index as departments_index,
} from '../../services/api/v1/departments'
import Loader from '../../components/Loader/Loader';

function GroupsPage() {
  const dispatch = useDispatch();

  const {
    loading,
    departments,
  } = useSelector((state) => state.departments);

  useEffect(() => {
    dispatch(departments_index({}))
  }, [dispatch]);

  return (
    <div className={styles['GroupsPage']}>
      <section className={styles['GroupsPageHero']}>
        <div className={styles['GroupsPageHeroContent']}>
          <div className={styles['GroupsPageHeroCircle']}>
            <img fetchPriority="high" src="/the-turning-point-circle.png" />

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                <path d="M30.545 22.9085L10.1821 38.1806H15.2728V50.9074M30.545 22.9085L50.9079 38.1806H45.8172V50.9074M30.545 22.9085V10.1816M15.2728 50.9074H7.63672M15.2728 50.9074H25.4543M45.8172 50.9074H53.4533M45.8172 50.9074H35.6357M35.6357 50.9074V43.2714C35.6357 41.9212 35.0994 40.6264 34.1447 39.6717C33.19 38.717 31.8951 38.1806 30.545 38.1806C29.1948 38.1806 27.9 38.717 26.9453 39.6717C25.9906 40.6264 25.4543 41.9212 25.4543 43.2714V50.9074M35.6357 50.9074H25.4543M25.4543 15.2724H35.6357" stroke="white" strokeWidth="3.80108" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h1>
            Departments & Groups
          </h1>

          <img src="/about-page-hero-image.jpg" />
        </div>
      </section>

      <section className={styles['GroupsPageIntro']}>
        <svg className={styles['GroupsPageIntroLine']} xmlns="http://www.w3.org/2000/svg" width="1199" height="392" viewBox="0 0 1199 392" fill="none">
          <path d="M0 109.14H150.22V389H1196V0" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
        </svg>

        <div className={styles['GroupsPageIntroCircle']} />

        <p>
          At Calvary, serving is how we grow, connect, and reveal Christ. Whether you're drawn to ushering, sound, or nu Media, there's a place for your gifts. Our departments ensure excellence in worship and order, while our fellowship groups build community around shared journeys and purpose.  Through heartfelt service and deep connections, we nurture gifts, sharpen one another, and align our lives with God's will. Here, we build each other, live purposefully, and serve with joyful excellence. Find your fit, take your place, and flourish in purpose.
        </p>
      </section>

      {/* <div className={styles['GroupsPageSearch']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M24.7449 22.6076L19.048 16.9107C20.4196 15.0849 21.16 12.8624 21.1575 10.5787C21.1575 4.74566 16.4118 0 10.5787 0C4.74566 0 0 4.74566 0 10.5787C0 16.4118 4.74566 21.1575 10.5787 21.1575C12.8624 21.16 15.0849 20.4196 16.9107 19.048L22.6076 24.7449C22.896 25.0027 23.2721 25.1403 23.6587 25.1295C24.0454 25.1186 24.4132 24.9602 24.6867 24.6867C24.9602 24.4132 25.1186 24.0454 25.1295 23.6587C25.1403 23.2721 25.0027 22.896 24.7449 22.6076ZM3.0225 10.5787C3.0225 9.08426 3.46567 7.62334 4.29596 6.38072C5.12625 5.1381 6.30637 4.1696 7.6871 3.59769C9.06782 3.02577 10.5871 2.87613 12.0529 3.16769C13.5187 3.45925 14.8651 4.17891 15.9218 5.23567C16.9786 6.29243 17.6982 7.63883 17.9898 9.1046C18.2814 10.5704 18.1317 12.0897 17.5598 13.4704C16.9879 14.8511 16.0194 16.0312 14.7768 16.8615C13.5342 17.6918 12.0732 18.135 10.5787 18.135C8.57545 18.1326 6.65488 17.3357 5.23833 15.9192C3.82178 14.5026 3.0249 12.5821 3.0225 10.5787Z" fill="black"/>
        </svg>

        <input placeholder="Search departments and groups" />
      </div> */}

      <ul className={styles['GroupsPageGroups']}>
        {
          loading && (
            <div className={styles['GroupsPageLoading']}>
              <Loader />
            </div>
          )
        }
        {
          !loading && Array.from(departments).sort((a, b) => a.name.localeCompare(b.name)).map((department) => (
            <li key={department.id} className={styles['GroupsPageGroup']}>
              {/* <img loading="lazy" src={department.image_url} alt="" /> */}

              <div className={styles['GroupsPageGroupContent']}>
                <h3>{department.name}</h3>
                <p>{department.description}</p>
{/*
                <a href="">
                  Join Group

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.0508 4.91005C18.1338 3.98416 17.0418 3.25002 15.8383 2.75042C14.6348 2.25081 13.3439 1.99574 12.0408 2.00005C6.58078 2.00005 2.13078 6.45005 2.13078 11.9101C2.13078 13.6601 2.59078 15.3601 3.45078 16.8601L2.05078 22.0001L7.30078 20.6201C8.75078 21.4101 10.3808 21.8301 12.0408 21.8301C17.5008 21.8301 21.9508 17.3801 21.9508 11.9201C21.9508 9.27005 20.9208 6.78005 19.0508 4.91005ZM12.0408 20.1501C10.5608 20.1501 9.11078 19.7501 7.84078 19.0001L7.54078 18.8201L4.42078 19.6401L5.25078 16.6001L5.05078 16.2901C4.22833 14.9771 3.79171 13.4593 3.79078 11.9101C3.79078 7.37005 7.49078 3.67005 12.0308 3.67005C14.2308 3.67005 16.3008 4.53005 17.8508 6.09005C18.6184 6.85392 19.2267 7.7626 19.6404 8.76338C20.0541 9.76417 20.265 10.8371 20.2608 11.9201C20.2808 16.4601 16.5808 20.1501 12.0408 20.1501ZM16.5608 13.9901C16.3108 13.8701 15.0908 13.2701 14.8708 13.1801C14.6408 13.1001 14.4808 13.0601 14.3108 13.3001C14.1408 13.5501 13.6708 14.1101 13.5308 14.2701C13.3908 14.4401 13.2408 14.4601 12.9908 14.3301C12.7408 14.2101 11.9408 13.9401 11.0008 13.1001C10.2608 12.4401 9.77078 11.6301 9.62078 11.3801C9.48078 11.1301 9.60078 11.0001 9.73078 10.8701C9.84078 10.7601 9.98078 10.5801 10.1008 10.4401C10.2208 10.3001 10.2708 10.1901 10.3508 10.0301C10.4308 9.86005 10.3908 9.72005 10.3308 9.60005C10.2708 9.48005 9.77078 8.26005 9.57078 7.76005C9.37078 7.28005 9.16078 7.34005 9.01078 7.33005H8.53078C8.36078 7.33005 8.10078 7.39005 7.87078 7.64005C7.65078 7.89005 7.01078 8.49005 7.01078 9.71005C7.01078 10.9301 7.90078 12.1101 8.02078 12.2701C8.14078 12.4401 9.77078 14.9401 12.2508 16.0101C12.8408 16.2701 13.3008 16.4201 13.6608 16.5301C14.2508 16.7201 14.7908 16.6901 15.2208 16.6301C15.7008 16.5601 16.6908 16.0301 16.8908 15.4501C17.1008 14.8701 17.1008 14.3801 17.0308 14.2701C16.9608 14.1601 16.8108 14.1101 16.5608 13.9901Z" fill="white"/>
                  </svg>
                </a> */}
              </div>
            </li>
          ))
      }
      </ul>
    </div>
  )
}

export default GroupsPage;

