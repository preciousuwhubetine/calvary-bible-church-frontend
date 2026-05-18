import styles from './styles.module.css'

function LeadershipPage() {
  return (
    <div className={styles['LeadershipPage']}>
      <h2>Our Leadership</h2>

      <ul>
        <li>
          <img src="/homepage-leadership-overseers-image.jpg" />

          <div>
            <h3>Pastor Olumide Emmanuel</h3>
            <p>
              Pastor Olumide Emmanuel has been the heart and soul of Calvary Bible Church for over 35 years. As the founding Overseer, he has transformed a small gathering into a vibrant, Bible-centered community where members are inspired to live out their faith as true value creators. He is a prolific author with more than 100 books to his name, and an esteemed speaker in demand globally. His teachings emphasize practical applications of faith, encouraging people to become resilient, purpose-driven leaders who address real-world challenges with integrity and hope. Under his leadership, Calvary Bible Church thrives as a beacon of light in the city. Pastor Emmanuel continues to foster a culture of empowerment and growth, equipping each member to fulfill their God-given purpose and make a meaningful impact in their communities.
            </p>

            {/* <a href="#">
              Learn More

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2.0013 8.00195H13.668" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.33333 3.33464L14 8.0013L9.33333 12.668" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a> */}
          </div>
        </li>

        {/* <li>
          <img />

          <div>
            <h3>Pastor Name</h3>
          </div>
        </li> */}
      </ul>
    </div>
  )
}

export default LeadershipPage
