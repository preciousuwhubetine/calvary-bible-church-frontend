import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

import {
  show as bible_reading_show,
} from '../../../services/api/v1/bible_readings'
import Loader from '../../Loader/Loader.jsx';

function BibleInOneYear({
  date,
}) {
  const dispatch = useDispatch();
  const [currentBiblePassage, setCurrentBiblePassage] = useState('');

  const {
    bible_reading,

    showLoading,
  } = useSelector((state) => state.bible_readings);

  useEffect(() => {
    dispatch(bible_reading_show(date));
  }, [date, dispatch]);

  return (
    <div className={styles['BibleInOneYear']}>
      <ul className={styles['BibleInOneYearChaptersList']}>
        {
          showLoading ? (
            <Loader />
          ) : (
            bible_reading?.passages?.map((passage, index) => (
              <li key={index}>
                <button
                  className={currentBiblePassage === passage.content ? styles['BibleInOneYearChaptersListButtonActive'] : ''}
                  onClick={() => setCurrentBiblePassage(passage.content)}
                >
                  {passage.content}
                </button>
              </li>
            ))
          )
        }
      </ul>

      <div className={styles['BibleInOneYearMain']}>
        <div className={styles['BibleInOneYearMainHeader']}>
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

export default BibleInOneYear
