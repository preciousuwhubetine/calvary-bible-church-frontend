import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function StorePage() {
  return (
    <div className={styles['StorePage']}>
      <section className={styles['StorePageHero']}>
        <div className={styles['StorePageHeroContent']}>
          <h1>
            Shop
          </h1>

          <div className={styles['StorePageHeroSearchCart']}>
            <div className={styles['StorePageHeroSearch']}>
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                <path d="M27.6512 25.5138L21.9543 19.817C23.3259 17.9911 24.0663 15.7686 24.0637 13.485C24.0637 7.65191 19.3181 2.90625 13.485 2.90625C7.65191 2.90625 2.90625 7.65191 2.90625 13.485C2.90625 19.3181 7.65191 24.0637 13.485 24.0637C15.7686 24.0663 17.9911 23.3259 19.817 21.9543L25.5138 27.6512C25.8022 27.9089 26.1783 28.0465 26.565 28.0357C26.9516 28.0249 27.3195 27.8665 27.593 27.593C27.8665 27.3195 28.0249 26.9516 28.0357 26.565C28.0465 26.1783 27.9089 25.8022 27.6512 25.5138ZM5.92875 13.485C5.92875 11.9905 6.37192 10.5296 7.20221 9.28697C8.0325 8.04435 9.21262 7.07585 10.5933 6.50394C11.9741 5.93202 13.4934 5.78238 14.9592 6.07394C16.4249 6.3655 17.7713 7.08516 18.8281 8.14192C19.8848 9.19868 20.6045 10.5451 20.8961 12.0108C21.1876 13.4766 21.038 14.9959 20.4661 16.3766C19.8941 17.7574 18.9256 18.9375 17.683 19.7678C16.4404 20.5981 14.9795 21.0412 13.485 21.0412C11.4817 21.0388 9.56113 20.242 8.14458 18.8254C6.72803 17.4089 5.93115 15.4883 5.92875 13.485Z" fill="white"/>
              </svg>

              <input placeholder="Search for an item" />
            </div>

            <button className={styles['StorePageHeroCart']}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clip-path="url(#clip0_745_5739)">
                  <g filter="url(#filter0_d_745_5739)">
                    <path d="M4.6375 6.75H23.655C25.3775 6.75 26.6213 8.3375 26.1488 9.935L24.0812 16.935C23.7625 18.01 22.745 18.75 21.5875 18.75H10.14C8.98125 18.75 7.9625 18.0088 7.645 16.935L4.6375 6.75ZM4.6375 6.75L3.75 3.75M20.625 26.25C21.1223 26.25 21.5992 26.0525 21.9508 25.7008C22.3025 25.3492 22.5 24.8723 22.5 24.375C22.5 23.8777 22.3025 23.4008 21.9508 23.0492C21.5992 22.6975 21.1223 22.5 20.625 22.5C20.1277 22.5 19.6508 22.6975 19.2992 23.0492C18.9475 23.4008 18.75 23.8777 18.75 24.375C18.75 24.8723 18.9475 25.3492 19.2992 25.7008C19.6508 26.0525 20.1277 26.25 20.625 26.25ZM10.625 26.25C11.1223 26.25 11.5992 26.0525 11.9508 25.7008C12.3025 25.3492 12.5 24.8723 12.5 24.375C12.5 23.8777 12.3025 23.4008 11.9508 23.0492C11.5992 22.6975 11.1223 22.5 10.625 22.5C10.1277 22.5 9.65081 22.6975 9.29917 23.0492C8.94754 23.4008 8.75 23.8777 8.75 24.375C8.75 24.8723 8.94754 25.3492 9.29917 25.7008C9.65081 26.0525 10.1277 26.25 10.625 26.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
                  </g>
                </g>
                <defs>
                  <filter id="filter0_d_745_5739" x="-1.25" y="2.75" width="32.502" height="32.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_745_5739"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_745_5739" result="shape"/>
                  </filter>
                  <clipPath id="clip0_745_5739">
                    <rect width="30" height="30" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <span>
                0
              </span>
            </button>
          </div>

          <img src="/store-hero-section-bg.jpg" />
        </div>
      </section>

      <section className={styles['StorePageContent']}>
        <div className={styles['StorePageContentHeader']}>
          <h2>Categories</h2>

          <div>
            <svg className={styles['StorePageContentLine']} xmlns="http://www.w3.org/2000/svg" width="994" height="5" viewBox="0 0 994 5" fill="none">
              <path d="M0 2.5H993.5" stroke="#FD9F2B" stroke-width="5" stroke-dasharray="10 10"/>
            </svg>

            <svg className={styles['StorePageContentCircle']} xmlns="http://www.w3.org/2000/svg" width="94" height="185" viewBox="0 0 94 185" fill="none">
              <circle cx="92.5" cy="92.5" r="90" stroke="#FD9F2B" stroke-width="5" stroke-dasharray="10 10"/>
            </svg>
          </div>
        </div>

        <ul>
          <li className={styles['StorePageContentBackground']} />

          <li>
            <Link to="/store">
              <h3>Category Name</h3>
            </Link>
          </li>
          <li>
            <Link to="/store">
              <h3>Category Name</h3>
            </Link>
          </li>
          <li>
            <Link to="/store">
              <h3>Category Name</h3>
            </Link>
          </li>
          <li>
            <Link to="/store">
              <h3>Category Name</h3>
            </Link>
          </li>
          <li>
            <Link to="/store">
              <h3>Category Name</h3>
            </Link>
          </li>
          <li>
            <Link to="/store">
              <h3>Category Name</h3>
            </Link>
          </li>
          <li>
            <Link to="/store">
              <h3>Category Name</h3>
            </Link>
          </li>
          <li>
            <Link to="/store">
              <h3>Category Name</h3>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default StorePage
