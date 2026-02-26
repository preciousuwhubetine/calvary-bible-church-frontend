import styles from './styles.module.css'

function PastSermonsPage() {
  return (
    <div className={styles['PastSermonsPage']}>
      <div className={styles['PastSermonsPageBackground']}>
        <div>
          <h2>
           PAST SERMONS
          </h2>

          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
              <path d="M0 0H20V2H19V16H12.414L16.414 20L15 21.414L10 16.414L5 21.414L3.586 20L7.586 16H1V2H0V0ZM3 2V14H17V2H3ZM8 4.5L12.667 8L8 11.5V4.5Z" fill="#FC8E33"/>
            </svg>
          </span>

        </div>
      </div>

      <section className={styles['PastSermonsPageContent']}>
        <div className={styles['PastSermonsPageSearch']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M27.6512 25.5138L21.9543 19.817C23.3259 17.9911 24.0663 15.7686 24.0637 13.485C24.0637 7.65191 19.3181 2.90625 13.485 2.90625C7.65191 2.90625 2.90625 7.65191 2.90625 13.485C2.90625 19.3181 7.65191 24.0637 13.485 24.0637C15.7686 24.0663 17.9911 23.3259 19.817 21.9543L25.5138 27.6512C25.8022 27.9089 26.1783 28.0465 26.565 28.0357C26.9516 28.0249 27.3195 27.8665 27.593 27.593C27.8665 27.3195 28.0249 26.9516 28.0357 26.565C28.0465 26.1783 27.9089 25.8022 27.6512 25.5138ZM5.92875 13.485C5.92875 11.9905 6.37192 10.5296 7.20221 9.28697C8.0325 8.04435 9.21262 7.07585 10.5933 6.50394C11.9741 5.93202 13.4934 5.78238 14.9592 6.07394C16.4249 6.3655 17.7713 7.08516 18.8281 8.14192C19.8848 9.19868 20.6045 10.5451 20.8961 12.0108C21.1876 13.4766 21.038 14.9959 20.4661 16.3766C19.8941 17.7574 18.9256 18.9375 17.683 19.7678C16.4404 20.5981 14.9795 21.0412 13.485 21.0412C11.4817 21.0388 9.56113 20.242 8.14458 18.8254C6.72803 17.4089 5.93115 15.4883 5.92875 13.485Z" fill="black"/>
          </svg>

          <input type="text" placeholder='Search for a sermon...' />
        </div>

        <ul className={styles['PastSermonsPageSermonList']}>
          <li>
            <div className={styles['PastSermonsPageSermonListThumbnail']}>
              <img />

              <button className={styles['PastSermonsPageSermonListThumbnailPlayButton']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="8 5 19 12 8 19"/>
                </svg>
              </button>
            </div>

            <div className={styles['PastSermonsPageSermonListDetails']}>
              <h3>Sermon Title</h3>

              <ul>
                <li>
                  <span>Series:</span>
                  <p>Series Name</p>
                </li>

                <li>
                  <p>Date</p>
                  <p>Preacher</p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles['PastSermonsPageSermonListThumbnail']}>
              <img />

              <button className={styles['PastSermonsPageSermonListThumbnailPlayButton']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="8 5 19 12 8 19"/>
                </svg>
              </button>
            </div>

            <div className={styles['PastSermonsPageSermonListDetails']}>
              <h3>Sermon Title</h3>

              <ul>
                <li>
                  <span>Series:</span>
                  <p>Series Name</p>
                </li>

                <li>
                  <p>Date</p>
                  <p>Preacher</p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles['PastSermonsPageSermonListThumbnail']}>
              <img />

              <button className={styles['PastSermonsPageSermonListThumbnailPlayButton']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="8 5 19 12 8 19"/>
                </svg>
              </button>
            </div>

            <div className={styles['PastSermonsPageSermonListDetails']}>
              <h3>Sermon Title</h3>

              <ul>
                <li>
                  <span>Series:</span>
                  <p>Series Name</p>
                </li>

                <li>
                  <p>Date</p>
                  <p>Preacher</p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles['PastSermonsPageSermonListThumbnail']}>
              <img />

              <button className={styles['PastSermonsPageSermonListThumbnailPlayButton']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="8 5 19 12 8 19"/>
                </svg>
              </button>
            </div>

            <div className={styles['PastSermonsPageSermonListDetails']}>
              <h3>Sermon Title</h3>

              <ul>
                <li>
                  <span>Series:</span>
                  <p>Series Name</p>
                </li>

                <li>
                  <p>Date</p>
                  <p>Preacher</p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles['PastSermonsPageSermonListThumbnail']}>
              <img />

              <button className={styles['PastSermonsPageSermonListThumbnailPlayButton']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="8 5 19 12 8 19"/>
                </svg>
              </button>
            </div>

            <div className={styles['PastSermonsPageSermonListDetails']}>
              <h3>Sermon Title</h3>

              <ul>
                <li>
                  <span>Series:</span>
                  <p>Series Name</p>
                </li>

                <li>
                  <p>Date</p>
                  <p>Preacher</p>
                </li>
              </ul>
            </div>
          </li>

        </ul>
      </section>
    </div>
  )
}

export default PastSermonsPage
