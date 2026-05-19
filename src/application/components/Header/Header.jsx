import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'
import { useEffect, useRef, useState } from 'react'

function Header() {
  const header = useRef(null);
  const location = useLocation();

  const [filled, setFilled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setFilled(true);
      } else {
        setFilled(false);
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      setFilled(false);
    } else {
      header.current.classList.add(styles['HeaderFilled']);
      setFilled(true);
    }

    closeMenu();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname])

  return (
    <header className={`${styles['Header']} ${filled ? styles['HeaderFilled'] : ''} ${menuOpen ? styles['HeaderDark'] : ''}`} ref={header}>
      <div className={styles['HeaderContent']}>
        <Link className={styles['HeaderLogoLink']} to="/">
          <img className={`${styles['HeaderLogo']} ${styles['HeaderLogoDark']}`} src="/logo-dark.png" />
          <img className={`${styles['HeaderLogo']} ${styles['HeaderLogoWhite']}`} src="/logo-white.png" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? styles['HeaderLinkActive'] : ''}>
                <div />
                Home
                <span />
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? styles['HeaderLinkActive'] : ''}>
                <div />
                About
                <span />
              </Link>
            </li>
            <li>
              <Link to="/events" className={location.pathname === '/events' ? styles['HeaderLinkActive'] : ''}>
                <div />
                Events
                <span />
              </Link>
            </li>
            <li>
              <Link to="/give" className={location.pathname === '/give' ? styles['HeaderLinkActive'] : ''}>
                <div />
                Give
                <span />
              </Link>
            </li>
            {/* <li>
              <Link to="/store" className={location.pathname.indexOf('/store') === 0 ? styles['HeaderLinkActive'] : ''}>
                <div />
                Store
                <span />
              </Link>
            </li> */}
          </ul>

          {
            false && (
              <button className={styles['HeaderCart']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <g clipPath="url(#clip0_745_5739)">
                    <g filter="url(#filter0_d_745_5739)">
                      <path d="M4.6375 6.75H23.655C25.3775 6.75 26.6213 8.3375 26.1488 9.935L24.0812 16.935C23.7625 18.01 22.745 18.75 21.5875 18.75H10.14C8.98125 18.75 7.9625 18.0088 7.645 16.935L4.6375 6.75ZM4.6375 6.75L3.75 3.75M20.625 26.25C21.1223 26.25 21.5992 26.0525 21.9508 25.7008C22.3025 25.3492 22.5 24.8723 22.5 24.375C22.5 23.8777 22.3025 23.4008 21.9508 23.0492C21.5992 22.6975 21.1223 22.5 20.625 22.5C20.1277 22.5 19.6508 22.6975 19.2992 23.0492C18.9475 23.4008 18.75 23.8777 18.75 24.375C18.75 24.8723 18.9475 25.3492 19.2992 25.7008C19.6508 26.0525 20.1277 26.25 20.625 26.25ZM10.625 26.25C11.1223 26.25 11.5992 26.0525 11.9508 25.7008C12.3025 25.3492 12.5 24.8723 12.5 24.375C12.5 23.8777 12.3025 23.4008 11.9508 23.0492C11.5992 22.6975 11.1223 22.5 10.625 22.5C10.1277 22.5 9.65081 22.6975 9.29917 23.0492C8.94754 23.4008 8.75 23.8777 8.75 24.375C8.75 24.8723 8.94754 25.3492 9.29917 25.7008C9.65081 26.0525 10.1277 26.25 10.625 26.25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"/>
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_d_745_5739" x="-1.25" y="2.75" width="32.502" height="32.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
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
            )
          }

          <button className={styles['HeaderMenuToggle']} onClick={() => setMenuOpen(!menuOpen)}>
            {
              menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M2 4.78208C2 4.57466 2.08429 4.37574 2.23431 4.22907C2.38434 4.0824 2.58783 4 2.8 4H17.2C17.4122 4 17.6157 4.0824 17.7657 4.22907C17.9157 4.37574 18 4.57466 18 4.78208C18 4.9895 17.9157 5.18843 17.7657 5.3351C17.6157 5.48177 17.4122 5.56417 17.2 5.56417H2.8C2.58783 5.56417 2.38434 5.48177 2.23431 5.3351C2.08429 5.18843 2 4.9895 2 4.78208ZM2 9.49961C2 9.29219 2.08429 9.09326 2.23431 8.94659C2.38434 8.79992 2.58783 8.71753 2.8 8.71753H17.2C17.4122 8.71753 17.6157 8.79992 17.7657 8.94659C17.9157 9.09326 18 9.29219 18 9.49961C18 9.70703 17.9157 9.90596 17.7657 10.0526C17.6157 10.1993 17.4122 10.2817 17.2 10.2817H2.8C2.58783 10.2817 2.38434 10.1993 2.23431 10.0526C2.08429 9.90596 2 9.70703 2 9.49961ZM2.8 13.4358C2.58783 13.4358 2.38434 13.5182 2.23431 13.6649C2.08429 13.8116 2 14.0105 2 14.2179C2 14.4253 2.08429 14.6243 2.23431 14.7709C2.38434 14.9176 2.58783 15 2.8 15H17.2C17.4122 15 17.6157 14.9176 17.7657 14.7709C17.9157 14.6243 18 14.4253 18 14.2179C18 14.0105 17.9157 13.8116 17.7657 13.6649C17.6157 13.5182 17.4122 13.4358 17.2 13.4358H2.8Z" fill="white"/>
              </svg>
              )
            }

            {
              menuOpen ? 'Close' : 'Menu'
            }
          </button>
        </nav>
      </div>

      {
        menuOpen && (
          <div className={styles['HeaderMenu']}>
            <div className={styles['HeaderMenuLinks']}>
              <div>
                <h3>ABOUT</h3>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/leadership">Leadership</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/give">Give</Link>
                  </li>
                  {/* <li>
                    <Link to="/store">Store</Link>
                  </li> */}
                </ul>
              </div>

              <div>
                <h3>WATCH & LISTEN</h3>
                <ul>
                  <li>
                    <Link to="/livestream">Live service</Link>
                  </li>
                  {/* <li>
                    <Link to="/past-sermons">Past sermons</Link>
                  </li>
                  <li>
                    <Link to="/study#devotional">Daily devotional</Link>
                  </li>
                  <li>
                    <Link to="/study#bible">Bible in one year</Link>
                  </li> */}
                  <li>
                    <Link to="/house-fellowship">House fellowship</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3>COMMUNITY</h3>
                <ul>
                  <li>
                    <Link to="/#prayer-requests">Prayer requests</Link>
                  </li>
                  <li>
                    <Link to="/#testimonies">Testimonies</Link>
                  </li>
                  <li>
                    <Link to="/groups">Departments & groups</Link>
                  </li>
                  <li>
                    <Link to="/new-member">New members corner</Link>
                  </li>
                  {/* <li>
                    <Link to="/counselling">Counselling</Link>
                  </li> */}
                </ul>
              </div>

              <div>
                <h3>LEARNING</h3>
                <ul>
                  <li>
                    <Link to="/membership-class">Membership class</Link>
                  </li>
                  <li>
                    <Link to="/maturity-class">Maturity class</Link>
                  </li>
                  <li>
                    <Link to="/ministerial-class">Ministerial class</Link>
                  </li>
                  <li>
                    <Link to="/missions">Missions</Link>
                  </li>
                  <li>
                    <Link to="/marriage-class">Marriage class</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3>REGISTRATIONS</h3>
                <ul>
                  <li>
                    <Link to="/marriage-registration">Marriage</Link>
                  </li>
                  <li>
                    <Link to="/special-thanksgiving-registration">Special Thanksgiving</Link>
                  </li>
                  <li>
                    <Link to="/baby-dedication-registration">Baby Dedication</Link>
                  </li>
                  <li>
                    <Link to="/naming-ceremony-registration">Naming Ceremony</Link>
                  </li>
                  <li>
                    <Link to="/deliverance-registration">Deliverance</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles['HeaderMenuSlogan']}>
              <h3>CALVARY BIBLE CHURCH</h3>

              <p>Raising an army for Christ</p>
            </div>

            <div className={styles['HeaderMenuSocials']}>
              <ul>
                <li>
                  <a href="https://www.instagram.com/cbcnigeria" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="white" strokeWidth="1.5"/>
                      <path d="M17.507 6.5H17.498" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/cbcnigeria/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/CBCNigeria" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <path d="M11.0645 8.04531L17.9856 0H16.3453L10.336 6.98547L5.53613 0H0L7.2583 10.5634L0 19H1.64023L7.98653 11.6231L13.0554 19H18.5915L11.0641 8.04531H11.0645ZM8.81808 10.6563L8.08257 9.6045L2.23116 1.2347H4.75045L9.47239 7.9895L10.2077 9.04133L16.3461 17.8214H13.8271L8.81808 10.6568V10.6563Z" fill="white"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@cbcnigeria6960" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.386 8.35696C10.2722 8.28865 10.1423 8.25176 10.0096 8.25006C9.87686 8.24837 9.74607 8.28192 9.63056 8.3473C9.51505 8.41268 9.41896 8.50755 9.3521 8.62221C9.28524 8.73687 9.25001 8.86723 9.25 8.99996V15C9.25001 15.1327 9.28524 15.263 9.3521 15.3777C9.41896 15.4924 9.51505 15.5872 9.63056 15.6526C9.74607 15.718 9.87686 15.7515 10.0096 15.7499C10.1423 15.7482 10.2722 15.7113 10.386 15.643L15.386 12.643C15.497 12.5763 15.5889 12.4821 15.6526 12.3694C15.7164 12.2567 15.7499 12.1294 15.7499 12C15.7499 11.8705 15.7164 11.7432 15.6526 11.6305C15.5889 11.5179 15.497 11.4236 15.386 11.357L10.386 8.35696ZM13.542 12L10.75 13.675V10.325L13.542 12Z" fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.0309 4.64174C13.6827 4.37984 10.3191 4.37984 6.97088 4.64174L4.72988 4.81774C4.06772 4.86936 3.44187 5.14107 2.95202 5.5896C2.46217 6.03813 2.1365 6.63768 2.02688 7.29274C1.50666 10.4099 1.50666 13.5916 2.02688 16.7087C2.1365 17.3638 2.46217 17.9634 2.95202 18.4119C3.44187 18.8604 4.06772 19.1321 4.72988 19.1837L6.96988 19.3597C10.3189 19.6217 13.6829 19.6217 17.0319 19.3597L19.2719 19.1837C19.9341 19.1321 20.5599 18.8604 21.0498 18.4119C21.5396 17.9634 21.8653 17.3638 21.9749 16.7087C22.4949 13.5917 22.4949 10.4097 21.9749 7.29274C21.8653 6.63768 21.5396 6.03813 21.0498 5.5896C20.5599 5.14107 19.9341 4.86936 19.2719 4.81774L17.0309 4.64174ZM7.08788 6.13774C10.3589 5.88182 13.6449 5.88182 16.9159 6.13774L19.1559 6.31274C19.8319 6.36574 20.3849 6.87274 20.4959 7.54074C20.9904 10.4935 20.9904 13.508 20.4959 16.4607C20.4417 16.7857 20.2804 17.0831 20.0375 17.3057C19.7947 17.5282 19.4843 17.6631 19.1559 17.6887L16.9159 17.8637C13.6449 18.1197 10.3589 18.1197 7.08788 17.8637L4.84788 17.6887C4.51948 17.6631 4.20912 17.5282 3.96626 17.3057C3.72341 17.0831 3.56204 16.7857 3.50788 16.4607C3.01334 13.508 3.01334 10.4935 3.50788 7.54074C3.56204 7.21582 3.72341 6.91838 3.96626 6.69582C4.20912 6.47327 4.51948 6.33841 4.84788 6.31274L7.08788 6.13774Z" fill="white"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    </header>
  )
}

export default Header
