import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'

import {
  index as store_item_categories_index,
} from '../../../services/api/v1/store_item_categories'

function StorePageCategories() {
  const dispatch = useDispatch();

  const {
    store_item_categories,
  } = useSelector((state) => state.store_item_categories);

  useEffect(() => {
    dispatch(store_item_categories_index({}))
  }, [dispatch]);

  return (
    <section className={styles['StorePageCategories']}>
      <div className={styles['StorePageCategoriesHeader']}>
        <h2>Categories</h2>

        <div>
          <svg className={styles['StorePageCategoriesLine']} xmlns="http://www.w3.org/2000/svg" width="994" height="5" viewBox="0 0 994 5" fill="none">
            <path d="M0 2.5H993.5" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
          </svg>

          <svg className={styles['StorePageCategoriesCircle']} xmlns="http://www.w3.org/2000/svg" width="94" height="185" viewBox="0 0 94 185" fill="none">
            <circle cx="92.5" cy="92.5" r="90" stroke="#FD9F2B" strokeWidth="5" strokeDasharray="10 10"/>
          </svg>
        </div>
      </div>

      <ul>
        <li className={styles['StorePageCategoriesBackground']} />

        {
          store_item_categories.map((store_item_category) => (
            <li key={store_item_category.id}>
              <Link to={`/store/category/${store_item_category.id}/${store_item_category.name}`}>
                <img src={store_item_category.cover_image} />
                <h3>{store_item_category.name}</h3>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default StorePageCategories
