import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import videojs from 'video.js';
import styles from './styles.module.css'

function NewConvertPage() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const questions = [
    {
      question: "What does it mean to be a new convert?",
      answer: "Becoming a new convert means you have embraced Jesus Christ as your Lord and Savior, received the Holy Spirit, and begun a lifelong journey of faith and obedience."
    },
    {
      question: "How can I grow spiritually at CBC?",
      answer: "To join, simply attend our next Membership class - held monthly on the first Sunday after service. You will meet our leadership team, learn CBC’s vision and values, and connect with a mentor who will guide your first steps."
    },
    {
      question: "How do I get baptized?",
      answer: "To join, simply attend our next Membership class - held monthly on the first Sunday after service. You will meet our leadership team, learn CBC’s vision and values, and connect with a mentor who will guide your first steps."
    },
    {
      question: "How can I connect with a believers' group?",
      answer: "To join, simply attend our next Membership class - held monthly on the first Sunday after service. You will meet our leadership team, learn CBC’s vision and values, and connect with a mentor who will guide your first steps."
    },
    {
      question: "Who can I meet for prayer and guidance?",
      answer: "To join, simply attend our next Membership class - held monthly on the first Sunday after service. You will meet our leadership team, learn CBC’s vision and values, and connect with a mentor who will guide your first steps."
    },
  ]

  useEffect(() => {
    let player;

    try {
      player = videojs("welcome-video-player");
    } catch (error) {
      console.error("Error initializing video player:", error);
    }

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div className={styles['NewConvertPage']}>
      <div className={styles['NewConvertPageBackground']}>
        <div>
          <h2>
            NEW CONVERT
          </h2>

          <span>
            ?
          </span>

        </div>
      </div>

      <section className={styles['NewConvertPageVideoSection']}>
        <div className={styles['NewConvertPageVideoSectionBackground']} />
        <div className={styles['NewConvertPageVideoSectionRotatedBackground']}>
          <img fetchPriority="high" className={styles['NewConvertPageVideoSectionBackgroundImage']} src="/logo-dark.png" />
        </div>

        <h1>
          WELCOME TO THE BODY OF CHRIST
        </h1>

        <div className={styles['NewConvertPageVideo']}>
          <video
            className="video-js vjs-theme-forest"
            controls
            data-setup='{}'
            id="welcome-video-player"
            preload="auto"
          >
            <source src="/videos/new-convert-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className={styles['NewConvertPageCommunity']}>
        <div className={styles['NewConvertPageCommunityText']}>
          <h2>Begin Your Journey In Christ</h2>
          <p>
            We celebrate your decision to follow Jesus and stand ready to nurture your faith.
          </p>
        </div>

        <div className={styles['NewConvertPageBeginJourneyLinks']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="438" height="214" viewBox="0 0 438 214" fill="none">
            <path d="M1.67578 0V87C1.67578 106.054 17.122 121.5 36.1758 121.5H401.676C420.73 121.5 436.176 136.946 436.176 156V213.5" stroke="#FD9F2B" strokeWidth="3.34951" strokeDasharray="6.7 6.7"/>
          </svg>

          <div className={styles['NewConvertPageBeginJourneyLinksNumberOne']}>1</div>
          <div className={styles['NewConvertPageBeginJourneyLinksNumberTwo']}>2</div>

          <a href="/">
            <img loading="lazy" src="/new-page-fill-form-link-bg.jpg" />

            <span>
              Fill This Form

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12L20.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 5L21 12L14 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          <Link to="/membership-class">
            <img loading="lazy" src="/new-page-membership-class-link-bg.jpg" />

            <span>
              Register For Membership Class

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12L20.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 5L21 12L14 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <section className={styles['NewConvertPageFAQ']}>
        <h2>FAQ</h2>

        <ul>
          {
            questions.map((question, index) => (
              <li key={index}>
                <div
                  onClick={() => (currentQuestion === index) ? setCurrentQuestion(null) : setCurrentQuestion(index)}
                >
                  <h3>{question.question}</h3>

                  <span>
                    <svg
                      height="40"
                      style={{ transform: currentQuestion === index ? 'rotate(0deg)' : 'rotate(180deg)' }}
                      viewBox="0 0 40 40"
                      width="40"
                    >
                      <g clip-path="url(#clip0_4072_12493)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1343 13.7905C20.8224 13.4787 20.3995 13.3036 19.9585 13.3036C19.5175 13.3036 19.0946 13.4787 18.7827 13.7905L9.3749 23.1983C9.21606 23.3517 9.08936 23.5352 9.0022 23.7381C8.91505 23.941 8.86917 24.1593 8.86725 24.3801C8.86533 24.6009 8.90741 24.8199 8.99103 25.0243C9.07465 25.2287 9.19813 25.4143 9.35428 25.5705C9.51043 25.7266 9.69611 25.8501 9.90049 25.9337C10.1049 26.0174 10.3239 26.0594 10.5447 26.0575C10.7655 26.0556 10.9837 26.0097 11.1866 25.9226C11.3895 25.8354 11.573 25.7087 11.7264 25.5499L19.9585 17.3178L28.1906 25.5499C28.5042 25.8528 28.9243 26.0204 29.3604 26.0166C29.7964 26.0129 30.2135 25.838 30.5219 25.5296C30.8302 25.2213 31.0051 24.8042 31.0089 24.3681C31.0127 23.9321 30.845 23.512 30.5421 23.1983L21.1343 13.7905Z" fill="#FC8E33"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_4072_12493">
                          <rect width="39.913" height="39.913" fill="white" transform="matrix(1 0 0 -1 0 39.913)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>

                <div
                  style={{
                    gridTemplateRows: currentQuestion === index ? '1fr' : '0fr',
                    paddingTop: currentQuestion === index ? '24px' : '',
                  }}
                >
                  <p>
                    {question.answer}
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}

export default NewConvertPage
