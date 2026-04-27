import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css'
import Devotional from '../../components/StudyPage/Devotional/Devotional';
import BibleInOneYear from '../../components/StudyPage/BibleInOneYear/BibleInOneYear';

function StudyPage() {
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState(location.hash?.substring(1).toLowerCase() === 'bible' ? 'bible' : 'devotional');
  const [selectedDate, setSelectedDate] = useState(`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`);

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1).toLowerCase();

      if (hash === 'devotional' || hash === 'bible') {
        setCurrentTab(hash);
      }
    }
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
          <select defaultValue={`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`} onChange={(e) => setSelectedDate(e.target.value)}>
            {
              Array.from({ length: new Date(new Date().getFullYear(), 2, 0).getDate() === 29 ? 366 : 365 }, (_, i) => {
                const start = new Date(new Date().getFullYear(), 0, 1);
                start.setDate(start.getDate() + i);
                return (
                  <option key={i} value={`${start.getFullYear()}-${(start.getMonth() + 1).toString().padStart(2, '0')}-${start.getDate().toString().padStart(2, '0')}`}>
                    {start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                  </option>
                );
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
            <Devotional date={selectedDate} />
          )
        }

        {
          currentTab === 'bible' && (
            <BibleInOneYear date={selectedDate} />
          )
        }
      </section>
    </div>
  )
}

export default StudyPage
