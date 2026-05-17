import { useState } from 'react'
import styles from './styles.module.css'

function LivestreamPage() {
  const [chatVisible, setChatVisible] = useState(true)
  const [giveVisible, setGiveVisible] = useState(false)
  const [shareVisible, setShareVisible] = useState(false)

  const toggleChat = () => {
    if (!chatVisible) {
      setGiveVisible(false)
      setShareVisible(false)
    }

    setChatVisible(!chatVisible)
  }

  const toggleGive = () => {
    if (!giveVisible) {
      setChatVisible(false)
      setShareVisible(false)
    }

    setGiveVisible(!giveVisible)
  }

  const toggleShare = () => {
    if (!shareVisible) {
      setChatVisible(false)
      setGiveVisible(false)
    }

    setShareVisible(!shareVisible)
  }

  return (
    <div className={styles['LivestreamPage']}>
      <div className={styles['LivestreamPageBackground']}>
        <div>
          <h2>
            WATCH LIVE
          </h2>
        </div>
      </div>

      <section className={styles['LivestreamPageContent']}>
        <div className={styles['LivestreamPageVideo']}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/SZvLTS7hAlU?autoplay=1&mute=1"
            allowFullScreen={true}
            allow={`autoplay; encrypted-media; picture-in-picture`}
            title="Livestream Video"
            style={{ border: 'none' }}
          />
        </div>

        <div className={styles['LivestreamPageSidebar']}>
          <ul className={styles['LivestreamPageSidebarControls']}>
            <li>
              <button onClick={toggleChat}>
                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                  <path d="M10.1685 48.2891L7.80471 47.3486C7.63581 47.7736 7.5847 48.2363 7.65675 48.6878C7.7288 49.1394 7.92135 49.5632 8.21411 49.9145C8.50686 50.2658 8.88897 50.5316 9.32015 50.6839C9.75134 50.8362 10.2156 50.8694 10.6641 50.7799L10.1685 48.2891ZM22.1295 45.9101L23.3343 43.6709L22.5286 43.2388L21.6339 43.4167L22.1295 45.9101ZM14.2961 37.9114L16.6599 38.8519L17.0742 37.7996L16.576 36.7855L14.2961 37.9114ZM48.2935 30.4974C48.2935 38.7476 41.0421 45.7474 31.6964 45.7474V50.8307C43.4922 50.8307 53.3768 41.8993 53.3768 30.4974H48.2935ZM15.1018 30.4974C15.1018 22.2471 22.3557 15.2474 31.6989 15.2474V10.1641C19.903 10.1641 10.016 19.0955 10.016 30.4974H15.1018ZM31.6989 15.2474C41.0421 15.2474 48.2935 22.2471 48.2935 30.4974H53.3768C53.3768 19.0955 43.4948 10.1641 31.6989 10.1641V15.2474ZM31.6964 45.7474C28.6337 45.7474 25.7819 44.9849 23.3343 43.6709L20.9248 48.1467C24.2374 49.9226 27.9378 50.8451 31.6964 50.8307V45.7474ZM10.6641 50.7799L22.6252 48.4009L21.6339 43.4167L9.67283 45.7957L10.6641 50.7824V50.7799ZM16.576 36.7855C15.6084 34.8303 15.1057 32.6789 15.1018 30.4974H10.016C10.016 33.5474 10.7327 36.4398 12.0137 39.0374L16.576 36.7855ZM11.9349 36.971L7.80471 47.3512L12.5271 49.2269L16.6548 38.8493L11.9324 36.971H11.9349Z" fill="#FC8E33"/>
                  <path d="M22.8776 33.0398C24.2813 33.0398 25.4193 31.9019 25.4193 30.4982C25.4193 29.0945 24.2813 27.9565 22.8776 27.9565C21.4739 27.9565 20.3359 29.0945 20.3359 30.4982C20.3359 31.9019 21.4739 33.0398 22.8776 33.0398Z" fill="#FC8E33"/>
                  <path d="M31.7682 33.0398C33.172 33.0398 34.3099 31.9019 34.3099 30.4982C34.3099 29.0945 33.172 27.9565 31.7682 27.9565C30.3645 27.9565 29.2266 29.0945 29.2266 30.4982C29.2266 31.9019 30.3645 33.0398 31.7682 33.0398Z" fill="#FC8E33"/>
                  <path d="M40.6667 33.0398C42.0704 33.0398 43.2083 31.9019 43.2083 30.4982C43.2083 29.0945 42.0704 27.9565 40.6667 27.9565C39.2629 27.9565 38.125 29.0945 38.125 30.4982C38.125 31.9019 39.2629 33.0398 40.6667 33.0398Z" fill="#FC8E33"/>
                </svg>
              </button>

              LIVE CHAT
            </li>

            <li>
              <button onClick={toggleGive}>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <path d="M4 14V34H34V14H4Z" stroke="#FC8E33" stroke-width="2.71429" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 8H36V14H2V8Z" stroke="#FC8E33" stroke-width="2.71429" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19 8V34" stroke="#FC8E33" stroke-width="2.71429" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19 8C19 8 14 2 11 4C8 6 11 8 19 8Z" stroke="#FC8E33" stroke-width="2.71429" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                  <path d="M19 8C19 8 24 2 27 4C30 6 27 8 19 8Z" stroke="#FC8E33" stroke-width="2.71429" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                </svg>
              </button>

              GIVE
            </li>

            <li>
              <button onClick={toggleShare}>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.8743 3.9375C28.0422 3.93722 27.2201 4.11954 26.4661 4.47158C25.7122 4.82363 25.0446 5.33683 24.5106 5.97498C23.9766 6.61314 23.5891 7.3607 23.3755 8.16493C23.1619 8.96916 23.1273 9.81046 23.2743 10.6295L14.9968 16.4255L14.8778 16.5183C14.038 15.8618 13.0307 15.4545 11.9706 15.3429C10.9106 15.2313 9.84053 15.4198 8.88245 15.8869C7.92436 16.354 7.11683 17.081 6.55193 17.9849C5.98703 18.8888 5.6875 19.9332 5.6875 20.9991C5.6875 22.065 5.98703 23.1095 6.55193 24.0134C7.11683 24.9173 7.92436 25.6442 8.88245 26.1113C9.84053 26.5785 10.9106 26.767 11.9706 26.6553C13.0307 26.5437 14.038 26.1365 14.8778 25.48L14.9968 25.5745L23.2743 31.3705C23.2159 31.6972 23.1868 32.032 23.1868 32.375C23.187 33.7233 23.6662 35.0277 24.539 36.0555C25.4118 37.0833 26.6213 37.7675 27.9518 37.9862C29.2823 38.2049 30.6472 37.9438 31.803 37.2495C32.9588 36.5552 33.8304 35.4729 34.2622 34.1955C34.694 32.9182 34.658 31.529 34.1606 30.2758C33.6631 29.0226 32.7366 27.9868 31.5464 27.3533C30.3561 26.7199 28.9795 26.5299 27.6621 26.8172C26.3448 27.1046 25.1723 27.8506 24.354 28.9223L16.5158 23.4325C16.8658 22.694 17.0618 21.8697 17.0618 20.9982C17.0618 20.1267 16.8658 19.3007 16.5158 18.564L24.3558 13.076C24.9428 13.8451 25.7164 14.4517 26.6033 14.8384C27.4901 15.2251 28.461 15.3792 29.4241 15.2861C30.3871 15.193 31.3104 14.8557 32.1068 14.3062C32.9031 13.7567 33.5461 13.0132 33.975 12.1459C34.4038 11.2786 34.6043 10.3162 34.5575 9.34979C34.5107 8.3834 34.2181 7.44492 33.7074 6.62313C33.1968 5.80135 32.4849 5.12342 31.6392 4.65347C30.7934 4.18352 29.8418 3.9371 28.8743 3.9375ZM25.8118 9.625C25.8118 8.81278 26.1344 8.03382 26.7088 7.45949C27.2831 6.88516 28.062 6.5625 28.8743 6.5625C29.6865 6.5625 30.4655 6.88516 31.0398 7.45949C31.6141 8.03382 31.9368 8.81278 31.9368 9.625C31.9368 10.4372 31.6141 11.2162 31.0398 11.7905C30.4655 12.3648 29.6865 12.6875 28.8743 12.6875C28.062 12.6875 27.2831 12.3648 26.7088 11.7905C26.1344 11.2162 25.8118 10.4372 25.8118 9.625ZM11.3743 17.9375C10.562 17.9375 9.78309 18.2602 9.20876 18.8345C8.63443 19.4088 8.31177 20.1878 8.31177 21C8.31177 21.8122 8.63443 22.5912 9.20876 23.1655C9.78309 23.7398 10.562 24.0625 11.3743 24.0625C12.1865 24.0625 12.9655 23.7398 13.5398 23.1655C14.1141 22.5912 14.4368 21.8122 14.4368 21C14.4368 20.1878 14.1141 19.4088 13.5398 18.8345C12.9655 18.2602 12.1865 17.9375 11.3743 17.9375ZM28.8743 29.3125C28.062 29.3125 27.2831 29.6352 26.7088 30.2095C26.1344 30.7838 25.8118 31.5628 25.8118 32.375C25.8118 33.1872 26.1344 33.9662 26.7088 34.5405C27.2831 35.1148 28.062 35.4375 28.8743 35.4375C29.6865 35.4375 30.4655 35.1148 31.0398 34.5405C31.6141 33.9662 31.9368 33.1872 31.9368 32.375C31.9368 31.5628 31.6141 30.7838 31.0398 30.2095C30.4655 29.6352 29.6865 29.3125 28.8743 29.3125Z" fill="#FC8E33"/>
                </svg>
              </button>

              SHARE
            </li>
          </ul>

          {
            chatVisible && (
              <div className={styles['LivestreamPageChat']}>
                <h3>
                  Live chat
                </h3>

                <ul className={styles['LivestreamPageChatMessages']}>
                </ul>
              </div>
            )
          }

          {
            giveVisible && (
              <div className={styles['LivestreamPageGive']}>
                <h3>
                  Support the ministry
                </h3>
              </div>
            )
          }

          {
            shareVisible && (
              <div className={styles['LivestreamPageShare']}>
                <h3>
                  Share this livestream
                </h3>
              </div>
            )
          }
        </div>
      </section>

    </div>
  )
}

export default LivestreamPage
