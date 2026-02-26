import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css'

function StudyPage() {
  const location = useLocation();

  const [currentBiblePassage, setCurrentBiblePassage] = useState('');
  const [currentTab, setCurrentTab] = useState(location.hash?.substring(1).toLowerCase() === 'bible' ? 'bible' : 'devotional');

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1).toLowerCase();

      if (hash === 'devotional' || hash === 'bible') {
        setCurrentTab(hash);
      }
    }

    setCurrentBiblePassage('123');
  }, [location]);

  useEffect(() => {
    document.querySelector(`.${styles['StudyPageContent']}`)?.scrollIntoView({ behavior: 'smooth' });
  }, [currentTab]);

  return (
    <div className={styles['StudyPage']}>
      <section className={styles['StudyPageHero']}>
        <div className={styles['StudyPageHeroContent']}>
          <h1>
            Study
          </h1>

          <img />
        </div>
      </section>

      <section className={styles['StudyPageContent']}>
        <div className={styles['StudyPageContentHeader']}>
          <select defaultValue={`${new Date().getMonth()}-${new Date().getDate()}`}>
            {
              Array.from({ length: (new Date(new Date().getFullYear()) % 4 === 0 ? 366 : 365) }, (_, i) => {
                const date = new Date();
                date.setDate(i + 1);
                date.setMonth(date.getMonth() - 1);
                return (
                  <option key={i} value={`${date.getMonth()}-${date.getDate()}`}>
                    {`${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`}
                  </option>
                )
              })
            }
          </select>

          <div className={styles['StudyPageContentToggle']}>
            <div
              className={styles['StudyPageContentToggleIndicator']}
              style={{
                left: currentTab === 'devotional' ? '12px' : 'calc(50% + 4px)'
              }}
            />

            <button
              className={`${styles['StudyPageContentToggleButton']} ${currentTab === 'devotional' ? styles['StudyPageContentToggleButtonActive'] : ''}`}
              onClick={() => {setCurrentTab('devotional'); window.location.hash = 'devotional'}}
            >
              Daily Devotional
            </button>

            <button
              className={`${styles['StudyPageContentToggleButton']} ${currentTab === 'bible' ? styles['StudyPageContentToggleButtonActive'] : ''}`}
              onClick={() => {setCurrentTab('bible'); window.location.hash = 'bible'}}
            >
              Bible In One Year
            </button>
          </div>
        </div>

        {
          currentTab === 'devotional' && (
            <div className={styles['StudyPageContentDevotional']}>
              <div className={styles['StudyPageContentDevotionalMain']}>
                <div className={styles['StudyPageContentDevotionalMain']}>
                  <div className={styles['StudyPageContentDevotionalMainHeader']}>
                    <p>Title</p>

                    <h2>
                      Devotional Title
                    </h2>
                  </div>

                  <div className={styles['StudyPageContentDevotionalMainBody']}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, voluptate alias illo cumque sunt quisquam, fuga earum neque esse consectetur harum quaerat ullam nesciunt ducimus eos odit nemo quibusdam magnam.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, corrupti eius nulla reprehenderit ea temporibus optio, vel minus unde ratione cum! Velit iste voluptate obcaecati consequatur commodi itaque quas laboriosam!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum in dicta labore, nobis, modi molestias recusandae consequatur architecto facilis reiciendis, enim fugit. Fugiat et vitae, at ad placeat sapiente sit.
                  </div>
                </div>
              </div>

              <div className={styles['StudyPageContentFooter']}>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 6 9 12 15 18"/>
                  </svg>
                  Previous
                </button>

                <button>
                  Next

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 6 15 12 9 18"/>
                  </svg>
                </button>
              </div>
            </div>
          )
        }

        {
          currentTab === 'bible' && (
            <div className={styles['StudyPageContentBible']}>
              <ul className={styles['StudyPageContentBibleChaptersList']}>
                <li>
                  <button
                    className={currentBiblePassage === '123' ? styles['StudyPageContentBibleChaptersListButtonActive'] : ''}
                    onClick={() => setCurrentBiblePassage('123')}
                  >
                    Chapters 1-3
                  </button>
                </li>
                <li>
                  <button
                    className={currentBiblePassage === '456' ? styles['StudyPageContentBibleChaptersListButtonActive'] : ''}
                    onClick={() => setCurrentBiblePassage('456')}
                  >
                    Chapters 4-6
                  </button>
                </li>
                <li>
                  <button
                    className={currentBiblePassage === '789' ? styles['StudyPageContentBibleChaptersListButtonActive'] : ''}
                    onClick={() => setCurrentBiblePassage('789')}
                  >
                    Chapters 7-9
                  </button>
                </li>
              </ul>

              <div className={styles['StudyPageContentBibleMain']}>
                <div className={styles['StudyPageContentBibleMainHeader']}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                    <path d="M3.46875 32.4823H33.5312M18.5 28.5171V4.51953M11.1516 10.9521H25.8484M14.1949 28.8671L6.59448 24.5512M22.8051 28.8671L30.4055 24.5512M16.1721 31.1719L3.81794 30.5645L4.292 27.0633L16.1721 31.1719ZM20.8279 31.1719L33.1828 30.5645L32.7088 27.0633L20.8279 31.1719Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  <p>NIV</p>
                </div>

                <div>
                  {currentBiblePassage}
                </div>
              </div>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default StudyPage
