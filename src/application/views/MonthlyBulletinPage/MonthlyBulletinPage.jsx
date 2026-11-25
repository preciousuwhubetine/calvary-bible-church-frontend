import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css'
import { toast } from 'sonner'
import { useEffect } from 'react';

import {
  show as bulletins_show,
  index as bulletins_index,
} from '../../services/api/v1/bulletins';

import {
  create as bulletin_subscriptions_create,
} from '../../services/api/v1/bulletin_subscriptions';

import Loader from '../../components/Loader/Loader';

function MonthlyBulletinPage() {
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    dispatch(bulletin_subscriptions_create({
      bulletin_subscription: data
    })).then(() => {
      toast.success('Subscription created successfully!')
      e.target.reset()
      close()
    }).catch(() => {
      toast.error('An error occured. Please try again.')
    })
  }

  const {
    createLoading: bulletin_subscriptions_create_loading,
  } = useSelector((state) => state.bulletin_subscriptions);

  const {
    bulletin,
    bulletins,

    loading: bulletins_loading,
    showLoading: bulletins_show_loading,
  } = useSelector((state) => state.bulletins);

  useEffect(() => {
    const date = new Date();
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    const release =  `${months[date.getMonth()]}-${date.getFullYear()}`
    dispatch(bulletins_show(release))
    dispatch(bulletins_index({
      page: 1,
      per_page: 8,
    }))
  }, [dispatch]);

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

      {
        (bulletins_loading || bulletins_show_loading) ? (
          <section className={styles['MonthlyBulletinPageLoader']}>
            <Loader />
          </section>
        ) : (
          bulletin && (
            <section className={styles['MonthlyBulletinPageContent']}>
              <div className={styles['MonthlyBulletinPageContentIntro']}>
                <div className={styles['MonthlyBulletinPageContentIntroImage']}>
                  <img src={bulletin.cover_image_link} />
                </div>
                <div className={styles['MonthlyBulletinPageContentIntroText']}>
                  <div className={styles['MonthlyBulletinPageContentIntroTextHeader']}>
                    <div className={styles['MonthlyBulletinPageContentBadge']}>
                      <span />
                      Current Issue
                    </div>

                    <p>{bulletin.month} {bulletin.year} · Monthly Newsletter</p>
                  </div>

                  <div className={styles['MonthlyBulletinPageContentIntroTextTitle']}>
                    <h5>{bulletin.month}</h5>
                    <h1>{bulletin.month_title}</h1>
                  </div>

                  <h4>Focus Scripture: {bulletin.focus_scripture}</h4>

                  <a href={bulletin.pdf_link}>
                    <svg data-dc-tpl="49" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path data-dc-tpl="50" d="M12 4v11"></path><path data-dc-tpl="51" d="M7 10l5 5 5-5"></path><path data-dc-tpl="52" d="M5 20h14"></path></svg>
                    Download PDF
                  </a>
                </div>
              </div>

              <div className={styles['MonthlyBulletinPageContentMain']}>
                <div dangerouslySetInnerHTML={{ __html: bulletin.content }} />
              </div>
            </section>
          )
        )
      }

      <section className={styles['MonthlyBulletinPagePastEditions']}>
        <div className={styles['MonthlyBulletinPagePastEditionsContent']}>
          <div className={styles['MonthlyBulletinPagePastEditionsHeader']}>
            <h2>Past Editions</h2>
            <p>Download any edition you missed as a PDF.</p>
          </div>

          <ul>
            {
              bulletins.map((bulletin) => (
                <li key={bulletin.id}>
                  <div className={styles['MonthlyBulletinPagePastEditionsItem']}>
                    <img src={bulletin.cover_image_link} />
                    <span>PDF</span>
                    <p>{bulletin.year}</p>
                    <h2>{bulletin.month}</h2>
                  </div>

                  <div className={styles['MonthlyBulletinPagePastEditionsItemDownload']}>
                    <a href={bulletin.pdf_link}>
                      <svg data-dc-tpl="49" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path data-dc-tpl="50" d="M12 4v11"></path><path data-dc-tpl="51" d="M7 10l5 5 5-5"></path><path data-dc-tpl="52" d="M5 20h14"></path></svg>
                      Download
                    </a>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </section>

      <section className={styles['MonthlyBulletinPageFooter']}>
        <div className={styles['MonthlyBulletinPageFooterContent']}>
          <div className={styles['MonthlyBulletinPageFooterHeader']}>
            <h2>Get the bulletin in your inbox</h2>
            <p>Be the first to read each new edition when it is released.</p>
          </div>

          <form onSubmit={submitForm}>
            <label>
              Email address
              <input type="email" required placeholder="Enter your email address" />
            </label>

            <button type="submit">
              {
                bulletin_subscriptions_create_loading ? <Loader size={16} /> : 'Subscribe'
              }
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default MonthlyBulletinPage
