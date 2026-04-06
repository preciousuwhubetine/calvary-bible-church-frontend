import { useState } from 'react'
import styles from './styles.module.css'

function GivePage() {
  const [currentView, setCurrentView] = useState('naira')

  return (
    <div className={styles['GivePage']}>
      <section className={styles['GivePageHero']}>
        <div className={styles['GivePageHeroContent']}>
          <div className={styles['GivePageHeroCircle']}>
            <img src="/the-turning-point-circle.png" />

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                <path d="M30.545 22.9085L10.1821 38.1806H15.2728V50.9074M30.545 22.9085L50.9079 38.1806H45.8172V50.9074M30.545 22.9085V10.1816M15.2728 50.9074H7.63672M15.2728 50.9074H25.4543M45.8172 50.9074H53.4533M45.8172 50.9074H35.6357M35.6357 50.9074V43.2714C35.6357 41.9212 35.0994 40.6264 34.1447 39.6717C33.19 38.717 31.8951 38.1806 30.545 38.1806C29.1948 38.1806 27.9 38.717 26.9453 39.6717C25.9906 40.6264 25.4543 41.9212 25.4543 43.2714V50.9074M35.6357 50.9074H25.4543M25.4543 15.2724H35.6357" stroke="white" strokeWidth="3.80108" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h1>
            Give
          </h1>

          <img />
        </div>
      </section>

      <section className={styles['GivePageScripture']}>
        <svg className={styles['GivePageScriptureLine']} xmlns="http://www.w3.org/2000/svg" width="1377" height="420" viewBox="0 0 1377 420" fill="none">
          <path d="M0 2.5H1294V417.5H1540" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
        </svg>

        <div className={styles['GivePageScriptureCircle']} />

        <p>
          <b>“Honor the Lord with your wealth and with the first fruits of all your produce; then your barns will be filled with plenty, and your vats will be bursting with wine.” - Proverbs 3:9-10.</b> <br /><br />Giving is an act of worship. It reflects your gratitude, trust, and obedience to God. Whether it's your tithe, offering, or a seed of faith, every gift is a statement that God is your Source. We encourage you to give prayerfully and purposefully. As the Apostle Paul wrote, “Whoever sows generously will also reap generously” (2 Corinthians 9:6).
        </p>
      </section>

      <section className={styles['GivePageAccounts']}>
        <div className={styles['GivePageAccountsToggle']}>
          <div className={`${styles['GivePageAccountsToggleIndicator']} ${currentView === 'naira' ? styles['GivePageAccountsToggleIndicatorNaira'] : styles['GivePageAccountsToggleIndicatorDomiciliary']}`}/>

          <button className={`${ currentView === 'naira' ? styles['GivePageAccountsToggleButtonActive'] : '' } ${styles['GivePageAccountsToggleButton']}`} onClick={() => setCurrentView('naira')}>
            Naira accounts
          </button>

          <button className={`${ currentView === 'domiciliary' ? styles['GivePageAccountsToggleButtonActive'] : '' } ${styles['GivePageAccountsToggleButton']}`} onClick={() => setCurrentView('domiciliary')}>
            Domiciliary accounts
          </button>
        </div>

        {
          currentView === 'naira' && (
            <ul>
              <li>
                <img src="/gtbank.jpg" />

                <div>
                  <h3>0016453018</h3>

                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M8.94922 16.4044C8.94922 12.1872 8.94922 10.0771 10.26 8.76782C11.5693 7.45703 13.6794 7.45703 17.8966 7.45703H22.3703C26.5875 7.45703 28.6976 7.45703 30.0069 8.76782C31.3176 10.0771 31.3176 12.1872 31.3176 16.4044V23.8605C31.3176 28.0777 31.3176 30.1878 30.0069 31.4971C28.6976 32.8079 26.5875 32.8079 22.3703 32.8079H17.8966C13.6794 32.8079 11.5693 32.8079 10.26 31.4971C8.94922 30.1878 8.94922 28.0777 8.94922 23.8605V16.4044Z" stroke="black" strokeWidth="1.34211"/>
                      <path d="M8.94829 28.3333C7.7618 28.3333 6.6239 27.862 5.78492 27.023C4.94594 26.184 4.47461 25.0461 4.47461 23.8596V14.9122C4.47461 9.28883 4.47461 6.47637 6.22233 4.73014C7.97005 2.98391 10.781 2.98242 16.4044 2.98242H22.3693C23.5558 2.98242 24.6937 3.45376 25.5327 4.29273C26.3717 5.13171 26.843 6.26961 26.843 7.45611" stroke="black" strokeWidth="1.34211"/>
                    </svg>
                  </button>
                </div>
              </li>

              <li>
                <img src="/zenith.png" />

                <div>
                  <h3>1010342016</h3>

                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M8.94922 16.4044C8.94922 12.1872 8.94922 10.0771 10.26 8.76782C11.5693 7.45703 13.6794 7.45703 17.8966 7.45703H22.3703C26.5875 7.45703 28.6976 7.45703 30.0069 8.76782C31.3176 10.0771 31.3176 12.1872 31.3176 16.4044V23.8605C31.3176 28.0777 31.3176 30.1878 30.0069 31.4971C28.6976 32.8079 26.5875 32.8079 22.3703 32.8079H17.8966C13.6794 32.8079 11.5693 32.8079 10.26 31.4971C8.94922 30.1878 8.94922 28.0777 8.94922 23.8605V16.4044Z" stroke="black" strokeWidth="1.34211"/>
                      <path d="M8.94829 28.3333C7.7618 28.3333 6.6239 27.862 5.78492 27.023C4.94594 26.184 4.47461 25.0461 4.47461 23.8596V14.9122C4.47461 9.28883 4.47461 6.47637 6.22233 4.73014C7.97005 2.98391 10.781 2.98242 16.4044 2.98242H22.3693C23.5558 2.98242 24.6937 3.45376 25.5327 4.29273C26.3717 5.13171 26.843 6.26961 26.843 7.45611" stroke="black" strokeWidth="1.34211"/>
                    </svg>
                  </button>
                </div>
              </li>

              <li>
                <img src="/fbn.jpg" />

                <div>
                  <h3>2018457003</h3>

                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M8.94922 16.4044C8.94922 12.1872 8.94922 10.0771 10.26 8.76782C11.5693 7.45703 13.6794 7.45703 17.8966 7.45703H22.3703C26.5875 7.45703 28.6976 7.45703 30.0069 8.76782C31.3176 10.0771 31.3176 12.1872 31.3176 16.4044V23.8605C31.3176 28.0777 31.3176 30.1878 30.0069 31.4971C28.6976 32.8079 26.5875 32.8079 22.3703 32.8079H17.8966C13.6794 32.8079 11.5693 32.8079 10.26 31.4971C8.94922 30.1878 8.94922 28.0777 8.94922 23.8605V16.4044Z" stroke="black" strokeWidth="1.34211"/>
                      <path d="M8.94829 28.3333C7.7618 28.3333 6.6239 27.862 5.78492 27.023C4.94594 26.184 4.47461 25.0461 4.47461 23.8596V14.9122C4.47461 9.28883 4.47461 6.47637 6.22233 4.73014C7.97005 2.98391 10.781 2.98242 16.4044 2.98242H22.3693C23.5558 2.98242 24.6937 3.45376 25.5327 4.29273C26.3717 5.13171 26.843 6.26961 26.843 7.45611" stroke="black" strokeWidth="1.34211"/>
                    </svg>
                  </button>
                </div>
              </li>

              <li>
                <img src="stanbic-bank.png" />

                <div>
                  <h3>0015067615</h3>

                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M8.94922 16.4044C8.94922 12.1872 8.94922 10.0771 10.26 8.76782C11.5693 7.45703 13.6794 7.45703 17.8966 7.45703H22.3703C26.5875 7.45703 28.6976 7.45703 30.0069 8.76782C31.3176 10.0771 31.3176 12.1872 31.3176 16.4044V23.8605C31.3176 28.0777 31.3176 30.1878 30.0069 31.4971C28.6976 32.8079 26.5875 32.8079 22.3703 32.8079H17.8966C13.6794 32.8079 11.5693 32.8079 10.26 31.4971C8.94922 30.1878 8.94922 28.0777 8.94922 23.8605V16.4044Z" stroke="black" strokeWidth="1.34211"/>
                      <path d="M8.94829 28.3333C7.7618 28.3333 6.6239 27.862 5.78492 27.023C4.94594 26.184 4.47461 25.0461 4.47461 23.8596V14.9122C4.47461 9.28883 4.47461 6.47637 6.22233 4.73014C7.97005 2.98391 10.781 2.98242 16.4044 2.98242H22.3693C23.5558 2.98242 24.6937 3.45376 25.5327 4.29273C26.3717 5.13171 26.843 6.26961 26.843 7.45611" stroke="black" strokeWidth="1.34211"/>
                    </svg>
                  </button>
                </div>
              </li>

              <li>
                <div>
                  <h3>Power Partners</h3>
                  <img src="/fbn.jpg" />
                </div>

                <div>
                  <h3>0016453018</h3>

                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M8.94922 16.4044C8.94922 12.1872 8.94922 10.0771 10.26 8.76782C11.5693 7.45703 13.6794 7.45703 17.8966 7.45703H22.3703C26.5875 7.45703 28.6976 7.45703 30.0069 8.76782C31.3176 10.0771 31.3176 12.1872 31.3176 16.4044V23.8605C31.3176 28.0777 31.3176 30.1878 30.0069 31.4971C28.6976 32.8079 26.5875 32.8079 22.3703 32.8079H17.8966C13.6794 32.8079 11.5693 32.8079 10.26 31.4971C8.94922 30.1878 8.94922 28.0777 8.94922 23.8605V16.4044Z" stroke="black" strokeWidth="1.34211"/>
                      <path d="M8.94829 28.3333C7.7618 28.3333 6.6239 27.862 5.78492 27.023C4.94594 26.184 4.47461 25.0461 4.47461 23.8596V14.9122C4.47461 9.28883 4.47461 6.47637 6.22233 4.73014C7.97005 2.98391 10.781 2.98242 16.4044 2.98242H22.3693C23.5558 2.98242 24.6937 3.45376 25.5327 4.29273C26.3717 5.13171 26.843 6.26961 26.843 7.45611" stroke="black" strokeWidth="1.34211"/>
                    </svg>
                  </button>
                </div>
              </li>

              <li>
                <div>
                  <h3>Club 50</h3>
                  <img src="/fcmb.jpg" />
                </div>

                <div>
                  <h3>0016453018</h3>

                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M8.94922 16.4044C8.94922 12.1872 8.94922 10.0771 10.26 8.76782C11.5693 7.45703 13.6794 7.45703 17.8966 7.45703H22.3703C26.5875 7.45703 28.6976 7.45703 30.0069 8.76782C31.3176 10.0771 31.3176 12.1872 31.3176 16.4044V23.8605C31.3176 28.0777 31.3176 30.1878 30.0069 31.4971C28.6976 32.8079 26.5875 32.8079 22.3703 32.8079H17.8966C13.6794 32.8079 11.5693 32.8079 10.26 31.4971C8.94922 30.1878 8.94922 28.0777 8.94922 23.8605V16.4044Z" stroke="black" strokeWidth="1.34211"/>
                      <path d="M8.94829 28.3333C7.7618 28.3333 6.6239 27.862 5.78492 27.023C4.94594 26.184 4.47461 25.0461 4.47461 23.8596V14.9122C4.47461 9.28883 4.47461 6.47637 6.22233 4.73014C7.97005 2.98391 10.781 2.98242 16.4044 2.98242H22.3693C23.5558 2.98242 24.6937 3.45376 25.5327 4.29273C26.3717 5.13171 26.843 6.26961 26.843 7.45611" stroke="black" strokeWidth="1.34211"/>
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          )
        }

        {
          currentView === 'domiciliary' && (
            <ul>
              <li>
                <img src="/gtbank.jpg" />

                <div>
                  <h3>0016453118</h3>

                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M8.94922 16.4044C8.94922 12.1872 8.94922 10.0771 10.26 8.76782C11.5693 7.45703 13.6794 7.45703 17.8966 7.45703H22.3703C26.5875 7.45703 28.6976 7.45703 30.0069 8.76782C31.3176 10.0771 31.3176 12.1872 31.3176 16.4044V23.8605C31.3176 28.0777 31.3176 30.1878 30.0069 31.4971C28.6976 32.8079 26.5875 32.8079 22.3703 32.8079H17.8966C13.6794 32.8079 11.5693 32.8079 10.26 31.4971C8.94922 30.1878 8.94922 28.0777 8.94922 23.8605V16.4044Z" stroke="black" strokeWidth="1.34211"/>
                      <path d="M8.94829 28.3333C7.7618 28.3333 6.6239 27.862 5.78492 27.023C4.94594 26.184 4.47461 25.0461 4.47461 23.8596V14.9122C4.47461 9.28883 4.47461 6.47637 6.22233 4.73014C7.97005 2.98391 10.781 2.98242 16.4044 2.98242H22.3693C23.5558 2.98242 24.6937 3.45376 25.5327 4.29273C26.3717 5.13171 26.843 6.26961 26.843 7.45611" stroke="black" strokeWidth="1.34211"/>
                    </svg>
                  </button>
                </div>

                <h4>Dollars</h4>
              </li>

              <li>
                <img src="/zenith.png" />

                <div>
                  <h3>0016453132</h3>

                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M8.94922 16.4044C8.94922 12.1872 8.94922 10.0771 10.26 8.76782C11.5693 7.45703 13.6794 7.45703 17.8966 7.45703H22.3703C26.5875 7.45703 28.6976 7.45703 30.0069 8.76782C31.3176 10.0771 31.3176 12.1872 31.3176 16.4044V23.8605C31.3176 28.0777 31.3176 30.1878 30.0069 31.4971C28.6976 32.8079 26.5875 32.8079 22.3703 32.8079H17.8966C13.6794 32.8079 11.5693 32.8079 10.26 31.4971C8.94922 30.1878 8.94922 28.0777 8.94922 23.8605V16.4044Z" stroke="black" strokeWidth="1.34211"/>
                      <path d="M8.94829 28.3333C7.7618 28.3333 6.6239 27.862 5.78492 27.023C4.94594 26.184 4.47461 25.0461 4.47461 23.8596V14.9122C4.47461 9.28883 4.47461 6.47637 6.22233 4.73014C7.97005 2.98391 10.781 2.98242 16.4044 2.98242H22.3693C23.5558 2.98242 24.6937 3.45376 25.5327 4.29273C26.3717 5.13171 26.843 6.26961 26.843 7.45611" stroke="black" strokeWidth="1.34211"/>
                    </svg>
                  </button>
                </div>

                <h4>Pounds</h4>
              </li>
            </ul>
          )
        }
      </section>

      <section className={styles['GiveOnline']}>
          <div className={styles['GiveOnlineContent']}>
            <svg className={styles['GiveOnlineCircle']} xmlns="http://www.w3.org/2000/svg" width="93" height="93" viewBox="0 0 93 93" fill="none">
              <circle cx="46.5" cy="46.5" r="44" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
            </svg>

            <img className={styles['GiveOnlineHands']} src="/giving-hands.svg" />

            <div>
              <h2>Give Online</h2>

              <p>Use the button below to give via card, transfer, or mobile options. Every gift goes directly into ministry efforts as we transform lives, raise disciples, and reach the nations with the Gospel.</p>

              <button onClick={() => alert('Coming soon!')}>
                <span>Pay With</span>
                <img src="/paystack.png" />
              </button>
            </div>
          </div>
      </section>
    </div>
  )
}

export default GivePage
