import styles from './styles.module.css'

function PrivacyPolicyPage() {
  return (
    <div className={styles['PrivacyPolicyPage']}>
      <div className={styles['PrivacyPolicyPageContent']}>
        <h1>Website Privacy Policy</h1>
        <p><strong>Effective Date:</strong> October 28th, 2026</p>

        <section id="introduction">
          <h2>1. Introduction</h2>
          <p>Welcome to Calvary Bible Church (CBC Nigeria) ("CBC," "we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled responsibly.</p>
          <p>This Privacy Policy explains how we collect, use, disclose, and safeguard information obtained through <a href="https://www.cbcnigeria.org">www.cbcnigeria.org</a> and related ministry services.</p>
          <p>By accessing or using our website, you consent to the practices described in this Privacy Policy.</p>
        </section>

        <section id="information-we-collect">
          <h2>2. Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide, including:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Prayer requests</li>
            <li>Testimonies</li>
            <li>Event registrations</li>
            <li>Donation information</li>
            <li>Membership inquiries</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Date and time of visits</li>
            <li>Website usage statistics</li>
          </ul>
        </section>

        <section id="how-we-use-your-information">
          <h2>3. How We Use Your Information</h2>
          <p>We may use your information to:</p>
          <ul>
            <li>Provide church services and ministry support</li>
            <li>Respond to inquiries and prayer requests</li>
            <li>Process donations and offerings</li>
            <li>Register attendees for events and programs</li>
            <li>Send ministry updates, newsletters, and announcements</li>
            <li>Improve our website and online services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section id="donations">
          <h2>4. Donations and Financial Transactions</h2>
          <p>When you make contributions through our website, payment processing may be handled by trusted third-party providers.</p>
          <p>CBC does not store complete debit/credit card information on its servers. Payment information is processed securely through authorized payment gateways.</p>
        </section>

        <section id="sharing-of-information">
          <h2>5. Sharing of Information</h2>
          <p>We do not sell or rent personal information.</p>
          <p>We may share information:</p>
          <ul>
            <li>With trusted service providers who help operate our website or ministry activities</li>
            <li>When required by law or legal process</li>
            <li>To protect the rights, safety, and security of CBC, its members, and the public</li>
          </ul>
        </section>

        <section id="email-communications">
          <h2>6. Email Communications</h2>
          <p>If you subscribe to communications from CBC, we may send:</p>
          <ul>
            <li>Ministry updates</li>
            <li>Event notifications</li>
            <li>Prayer and devotional content</li>
            <li>Church announcements</li>
          </ul>
          <p>You may unsubscribe at any time using the unsubscribe option included in our emails.</p>
        </section>

        <section id="cookies">
          <h2>7. Cookies and Tracking Technologies</h2>
          <p>Our website may use cookies and similar technologies to:</p>
          <ul>
            <li>Improve website functionality</li>
            <li>Remember user preferences</li>
            <li>Analyze website traffic</li>
            <li>Enhance user experience</li>
          </ul>
          <p>Users may disable cookies through their browser settings; however, some website features may not function properly.</p>
        </section>

        <section id="data-security">
          <h2>8. Data Security</h2>
          <p>We implement reasonable administrative, technical, and physical safeguards to protect personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          <p>While we strive to protect your information, no internet transmission or electronic storage system can be guaranteed to be completely secure.</p>
        </section>

        <section id="childrens-privacy">
          <h2>9. Children's Privacy</h2>
          <p>Our website is intended for a general audience. We do not knowingly collect personal information from children without parental or guardian consent where required by law.</p>
        </section>

        <section id="third-party-links">
          <h2>10. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites and platforms.</p>
          <p>CBC is not responsible for the privacy practices or content of external websites. Users should review the privacy policies of those sites separately.</p>
        </section>

        <section id="your-rights">
          <h2>11. Your Rights</h2>
          <p>Subject to applicable laws, you may request:</p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of information where permitted</li>
            <li>Withdrawal of consent for certain communications</li>
          </ul>
          <p>Requests may be sent using the contact information below.</p>
        </section>

        <section id="changes">
          <h2>12. Changes to this Privacy Policy</h2>
          <p>CBC reserves the right to update this Privacy Policy at any time. Updates will be posted on this page with a revised effective date.</p>
        </section>

        <section id="contact">
          <h2>13. Contact Information</h2>
          <address>
            <strong>Calvary Bible Church (CBC Nigeria)</strong><br/>
            Website: <a href="https://www.cbcnigeria.org">https://www.cbcnigeria.org</a><br/>
            Email: <a href="mailto:trucalmsoffice@gmail.com">trucalmsoffice@gmail.com</a><br/>
            Phone: <a href="tel:+2348023017462">+234 802 301 7462</a>
          </address>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
