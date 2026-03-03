import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'
import { useEffect, useRef, useState } from 'react'

function Header() {
  const header = useRef(null);
  const location = useLocation();

  const [filled, setFilled] = useState(false);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname])

  return (
    <header className={`${styles['Header']} ${filled ? styles['HeaderFilled'] : ''}`} ref={header}>
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
            <li>
              <Link to="/store" className={location.pathname.indexOf('/store') === 0 ? styles['HeaderLinkActive'] : ''}>
                <div />
                Store
                <span />
              </Link>
            </li>
          </ul>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M2 4.78208C2 4.57466 2.08429 4.37574 2.23431 4.22907C2.38434 4.0824 2.58783 4 2.8 4H17.2C17.4122 4 17.6157 4.0824 17.7657 4.22907C17.9157 4.37574 18 4.57466 18 4.78208C18 4.9895 17.9157 5.18843 17.7657 5.3351C17.6157 5.48177 17.4122 5.56417 17.2 5.56417H2.8C2.58783 5.56417 2.38434 5.48177 2.23431 5.3351C2.08429 5.18843 2 4.9895 2 4.78208ZM2 9.49961C2 9.29219 2.08429 9.09326 2.23431 8.94659C2.38434 8.79992 2.58783 8.71753 2.8 8.71753H17.2C17.4122 8.71753 17.6157 8.79992 17.7657 8.94659C17.9157 9.09326 18 9.29219 18 9.49961C18 9.70703 17.9157 9.90596 17.7657 10.0526C17.6157 10.1993 17.4122 10.2817 17.2 10.2817H2.8C2.58783 10.2817 2.38434 10.1993 2.23431 10.0526C2.08429 9.90596 2 9.70703 2 9.49961ZM2.8 13.4358C2.58783 13.4358 2.38434 13.5182 2.23431 13.6649C2.08429 13.8116 2 14.0105 2 14.2179C2 14.4253 2.08429 14.6243 2.23431 14.7709C2.38434 14.9176 2.58783 15 2.8 15H17.2C17.4122 15 17.6157 14.9176 17.7657 14.7709C17.9157 14.6243 18 14.4253 18 14.2179C18 14.0105 17.9157 13.8116 17.7657 13.6649C17.6157 13.5182 17.4122 13.4358 17.2 13.4358H2.8Z" fill="white"/>
            </svg>
            Menu
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
