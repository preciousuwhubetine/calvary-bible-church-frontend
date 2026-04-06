import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import videojs from 'video.js';
import styles from './styles.module.css'

function NewMemberPage() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const questions = [
    {
      question: "How do I become a member at CBC?",
      answer: "To join, simply attend our next Membership class - held monthly on the first Sunday after service. You will meet our leadership team, learn CBC’s vision and values, and connect with a mentor who will guide your first steps."
    },
    {
      question: "What should I expect on my first Sunday?",
      answer: "To join, simply attend our next Membership class - held monthly on the first Sunday after service. You will meet our leadership team, learn CBC’s vision and values, and connect with a mentor who will guide your first steps."
    },
    {
      question: "Where can I connect with other members?",
      answer: "To join, simply attend our next Membership class - held monthly on the first Sunday after service. You will meet our leadership team, learn CBC’s vision and values, and connect with a mentor who will guide your first steps."
    },
    {
      question: "How can I serve on a ministry team?",
      answer: "To join, simply attend our next Membership class - held monthly on the first Sunday after service. You will meet our leadership team, learn CBC’s vision and values, and connect with a mentor who will guide your first steps."
    },
    {
      question: "Who can I contact for pastoral care?",
      answer: "To join, simply attend our next Membership class - held monthly on the first Sunday after service. You will meet our leadership team, learn CBC’s vision and values, and connect with a mentor who will guide your first steps."
    },
  ]

  useEffect(() => {
    let player;

    try {
      player = videojs("new-member-video-player");
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
    <div className={styles['NewMemberPage']}>
      <div className={styles['NewMemberPageBackground']}>
        <div>
          <h2>
            NEW MEMBER
          </h2>

          <span>
            ?
          </span>

        </div>
      </div>

      <section className={styles['NewMemberPageVideoSection']}>
        <div className={styles['NewMemberPageVideoSectionBackground']} />
        <div className={styles['NewMemberPageVideoSectionRotatedBackground']}>
          <img fetchPriority="high" className={styles['NewMemberPageVideoSectionBackgroundImage']} src="/logo-dark.png" />
        </div>

        <h1>
          FIND YOUR CHURCH HOME AT CALVARY BIBLE CHURCH
        </h1>

        <div className={styles['NewMemberPageVideo']}>
          <video
            className="video-js vjs-theme-forest"
            controls
            data-setup='{}'
            id="new-member-video-player"
            preload="auto"
          >
            <source src="/videos/welcome-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className={styles['NewMemberPageCommunity']}>
        <div className={styles['NewMemberPageCommunityText']}>
          <h2>Discover Community And Grow In Faith</h2>
          <p>
            You are joining a family committed to You; committed to worship, and committed to Kingdom impact.
          </p>
        </div>

        <div className={styles['NewMemberPageCommunityLinks']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="438" height="214" viewBox="0 0 438 214" fill="none">
            <path d="M1.67578 0V87C1.67578 106.054 17.122 121.5 36.1758 121.5H401.676C420.73 121.5 436.176 136.946 436.176 156V213.5" stroke="#FD9F2B" strokeWidth="3.34951" strokeDasharray="6.7 6.7"/>
          </svg>

          <div className={styles['NewMemberPageCommunityLinksNumberOne']}>1</div>
          <div className={styles['NewMemberPageCommunityLinksNumberTwo']}>2</div>

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

      <section className={styles['NewMemberPagePresence']}>
        <div className={styles['NewMemberPagePresenceContent']}>
          <div className={styles['NewMemberPagePresenceCircle']}>
            <img loading="lazy" src="/the-turning-point-circle.png" />

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                <path d="M30.545 22.9085L10.1821 38.1806H15.2728V50.9074M30.545 22.9085L50.9079 38.1806H45.8172V50.9074M30.545 22.9085V10.1816M15.2728 50.9074H7.63672M15.2728 50.9074H25.4543M45.8172 50.9074H53.4533M45.8172 50.9074H35.6357M35.6357 50.9074V43.2714C35.6357 41.9212 35.0994 40.6264 34.1447 39.6717C33.19 38.717 31.8951 38.1806 30.545 38.1806C29.1948 38.1806 27.9 38.717 26.9453 39.6717C25.9906 40.6264 25.4543 41.9212 25.4543 43.2714V50.9074M35.6357 50.9074H25.4543M25.4543 15.2724H35.6357" stroke="white" strokeWidth="3.80108" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className={styles['NewMemberPagePresenceText']}>
            <h2>
              Step Into His Presence
            </h2>

            <p>
              Come experience life-changing worship, and heartfelt fellowship.
              We cannot wait to welcome you!
            </p>

            <Link to="/about">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className={styles['NewMemberPageFAQ']}>
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

export default NewMemberPage
