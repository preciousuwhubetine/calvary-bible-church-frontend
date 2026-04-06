import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'

import {
  create as testimonies_create,
} from '../../../services/api/v1/testimonies'

function TestimonyPopup({
  close
}) {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    dispatch(testimonies_create({
      testimony: data
    })).then(() => {
      alert('Testimony submitted successfully!')
      close()
    }).catch(() => {
      alert('Failed to submit testimony. Please try again.')
    })
  }

  const {
    createLoading,
  } = useSelector((store) => store.testimonies)

  return (
    <div className={styles['TestimonyPopup']} onClick={close}>
      <div className={styles['TestimonyPopupContent']} onClick={(e) => e.stopPropagation()}>
        <div className={styles['TestimonyPopupHeader']}>
          <div>
            <h2>Submit Testimony</h2>
            <p>Share your testimony</p>
          </div>

          <button onClick={close}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <form className={styles['TestimonyPopupForm']} onSubmit={handleSubmit}>
          <label htmlFor="testifier_first_name">First Name</label>
          <input type="text" id="testifier_first_name" name="testifier_first_name" required placeholder="Your first name" />

          <label htmlFor="testifier_last_name">Last Name</label>
          <input type="text" id="testifier_last_name" name="testifier_last_name" required placeholder="Your last name" />

          <label htmlFor="testifier_email">Email</label>
          <input type="email" id="testifier_email" name="testifier_email" required placeholder="Your email" />

          <label htmlFor="body">Testimony</label>
          <textarea id="body" name="body" required placeholder="Your testimony" rows={6}></textarea>

          <button type="submit" disabled={createLoading}>
            {createLoading ? 'Submitting...' : 'Submit Testimony'}
          </button>
        </form>
      </div>

    </div>
  )
}

export default TestimonyPopup
