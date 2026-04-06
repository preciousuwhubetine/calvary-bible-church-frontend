import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'

import {
  create as prayer_requests_create,
} from '../../../services/api/v1/prayer_requests'

function PrayerRequestPopup({
  close
}) {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    dispatch(prayer_requests_create({
      prayer_request: data
    })).then(() => {
      alert('Prayer request submitted successfully!')
      close()
    }).catch(() => {
      alert('Failed to submit prayer request. Please try again.')
    })
  }

  const {
    createLoading,
  } = useSelector((store) => store.prayer_requests )

  return (
    <div className={styles['PrayerRequestPopup']} onClick={close}>
      <div className={styles['PrayerRequestPopupContent']} onClick={(e) => e.stopPropagation()}>
        <div className={styles['PrayerRequestPopupHeader']}>
          <div>
            <h2>Submit Prayer Request</h2>
            <p>Share your prayer requests</p>
          </div>

          <button onClick={close}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <form className={styles['PrayerRequestPopupForm']} onSubmit={handleSubmit}>
          <label htmlFor="requester_first_name">First Name</label>
          <input type="text" id="requester_first_name" name="requester_first_name" required placeholder="Your first name" />

          <label htmlFor="requester_last_name">Last Name</label>
          <input type="text" id="requester_last_name" name="requester_last_name" required placeholder="Your last name" />

          <label htmlFor="requester_email">Email</label>
          <input type="email" id="requester_email" name="requester_email" required placeholder="Your email" />

          <label htmlFor="body">Prayer Request</label>
          <textarea id="body" name="body" required placeholder="Your prayer request" rows={6}></textarea>

          <button type="submit" disabled={createLoading}>
            {createLoading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>

    </div>
  )
}

export default PrayerRequestPopup
