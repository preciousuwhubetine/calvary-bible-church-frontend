import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

import {
  show as devotional_show,
} from '../../../services/api/v1/devotionals.js'
import Loader from '../../Loader/Loader.jsx';

function Devotional({
  date,
}) {
  const dispatch = useDispatch();

  const {
    devotional,

    showLoading,
  } = useSelector((state) => state.devotionals);

  useEffect(() => {
    dispatch(devotional_show(date));
  }, [date, dispatch]);

  return (
    <div className={styles['Devotional']}>
      <div className={styles['DevotionalMain']}>
        <div className={styles['DevotionalMain']}>
          <div className={styles['DevotionalMainHeader']}>
            <p>Title</p>

            <h2>
              {!showLoading && devotional?.title}
            </h2>
          </div>

          {
            showLoading && (
              <div className={styles['DevotionalMainLoader']}>
                <Loader />
              </div>
            )
          }

          <div className={styles['DevotionalMainBody']}>
            {!showLoading && devotional?.body}
          </div>
        </div>
      </div>

      <div className={styles['DevotionalFooter']}>
        <Link to="#bible">
          Bible In One Year

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Devotional
