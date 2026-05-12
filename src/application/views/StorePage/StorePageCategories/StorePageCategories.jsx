import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'

import {
  index as store_item_categories_index,
} from '../../../services/api/v1/store_item_categories'
import Loader from '../../../components/Loader/Loader';

function StorePageCategories() {
  const dispatch = useDispatch();

  const {
    loading: store_item_categories_loading,
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
        </div>
      </div>

      {
        store_item_categories_loading && (
          <div className={styles['StorePageCategoriesLoader']}>
            <Loader size={40} />
          </div>
        )
      }

      <ul>
        <li className={styles['StorePageCategoriesBackground']} />

        {
          store_item_categories.map((store_item_category) => (
            <li key={store_item_category.id}>
              <Link to={`/store/category/${store_item_category.id}/${store_item_category.name}`}>
                <img draggable="false" loading="lazy" src={store_item_category.cover_image} />
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
