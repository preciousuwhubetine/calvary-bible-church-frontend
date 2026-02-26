import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css'

import {
  show as store_item_categories_show,
} from '../../../services/api/v1/store_item_categories'

import {
  index as store_items_index,
} from '../../../services/api/v1/store_items'

import { capitalizeFirstLetter } from '../../../libraries/string';

function StorePageCategory() {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('all');

  const {
    store_item_category,
  } = useSelector((state) => state.store_item_categories);

  const {
    store_items,
  } = useSelector((state) => state.store_items);

  const {
    categoryId,
    categoryName,
  } = useParams();

  useEffect(() => {
    dispatch(store_item_categories_show({
      id: categoryId,
    }))

    dispatch(store_items_index({
      page: 1,
      per_page: 8,
      store_item_category_id: categoryId,
    }))
  }, [categoryId, dispatch]);

  return (
    <div className={styles['StorePageCategory']}>
      <div className={styles['StorePageCategoryHeader']}>
        <h2>{capitalizeFirstLetter(categoryName)}</h2>

        <nav>
          <ul>
            <li>
              <button className={filter === 'all' ? styles['StorePageCategoryHeaderButtonActive'] : ''} onClick={() => setFilter('all')}>
                All
              </button>
            </li>
            <li>
              <button className={filter === 'audio' ? styles['StorePageCategoryHeaderButtonActive'] : ''} onClick={() => setFilter('audio')}>
                Audios
              </button>
            </li>
            <li>
              <button className={filter === 'book' ? styles['StorePageCategoryHeaderButtonActive'] : ''} onClick={() => setFilter('book')}>
                Books
              </button>
            </li>
            <li>
              <button className={filter === 'liked' ? styles['StorePageCategoryHeaderButtonActive'] : ''} onClick={() => setFilter('liked')}>
                Liked
              </button>
            </li>
          </ul>
        </nav>

        <div />
      </div>

      <ul className={styles['StorePageCategoryItems']}>
        {
          store_items.filter((store_item) => {
            if (filter === 'all') return true;
            return store_item.item_type === filter;
          }).map((store_item) => (
            <li key={store_item.id}>
              <img src={store_item.cover_image} />
              <h5>{capitalizeFirstLetter(store_item.item_type)}</h5>
              <h3>{store_item.title}</h3>
              <h4>{store_item.price}</h4>
              <div>
                <button>Add to cart</button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M8.12533 4.33399C4.8347 4.33399 2.16699 7.00169 2.16699 10.2923C2.16699 16.2507 9.20866 21.6673 13.0003 22.9272C16.792 21.6673 23.8337 16.2507 23.8337 10.2923C23.8337 7.00169 21.1659 4.33399 17.8753 4.33399C15.8603 4.33399 14.0782 5.33444 13.0003 6.86574C12.4508 6.08324 11.7209 5.44462 10.8723 5.00393C10.0237 4.56324 9.0815 4.33345 8.12533 4.33399Z" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p>{store_item.description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default StorePageCategory
