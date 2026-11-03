import styles from './styles.module.css'

function TermsAndConditionsPage() {
  return (
    <div className={styles['TermsAndConditionsPage']}>
      <div className={styles['TermsAndConditionsPageContent']}>
        <h1>Website Terms &amp; Conditions</h1>
        <p><strong>Effective Date:</strong> October 28th, 2026</p>

        <section id="acceptance-of-terms">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using <a href="https://www.cbcnigeria.org">www.cbcnigeria.org</a>, you agree to be bound by these Terms and Conditions.</p>
          <p>If you do not agree with these terms, please discontinue use of the website.</p>
        </section>

        <section id="about-cbc">
          <h2>2. About CBC</h2>
          <p>The website is owned and operated by Calvary Bible Church (CBC Nigeria) for the purpose of ministry, discipleship, worship, communication, events, charitable activities, and community engagement.</p>
        </section>

        <section id="use-of-website">
          <h2>3. Use of Website</h2>
          <p>You agree to use the website only for lawful purposes.</p>
          <p>You shall not:</p>
          <ul>
            <li>Violate applicable laws or regulations</li>
            <li>Attempt unauthorized access to our systems</li>
            <li>Introduce malicious software or harmful code</li>
            <li>Interfere with website operations</li>
            <li>Use the website in a way that harms CBC or other users</li>
          </ul>
        </section>

        <section id="intellectual-property">
          <h2>4. Intellectual Property</h2>
          <p>All content on this website is owned by or licensed to CBC, including:</p>
          <ul>
            <li>Logos</li>
            <li>Sermons</li>
            <li>Videos</li>
            <li>Audio recordings</li>
            <li>Graphics</li>
            <li>Text content</li>
            <li>Publications</li>
            <li>Ministry resources</li>
          </ul>
          <p>Content may not be reproduced, distributed, or commercially exploited without prior written permission except where expressly permitted.</p>
        </section>

        <section id="user-submissions">
          <h2>5. User Submissions</h2>
          <p>When you submit:</p>
          <ul>
            <li>Prayer requests</li>
            <li>Testimonies</li>
            <li>Comments</li>
            <li>Feedback</li>
            <li>Event registrations</li>
          </ul>
          <p>You grant CBC a non-exclusive right to use such submissions for ministry, communication, and administrative purposes.</p>
          <p>CBC reserves the right to remove inappropriate content.</p>
        </section>

        <section id="streaming-and-media">
          <h2>6. Streaming Services and Media Content</h2>
          <p>CBC may provide live streams, recorded messages, podcasts, and other media resources. Availability of such services may be modified, suspended, or discontinued at any time without notice.</p>
        </section>

        <section id="donations">
          <h2>7. Donations</h2>
          <p>All donations, offerings, tithes, and charitable contributions made through the website are voluntary.</p>
          <p>Unless otherwise required by law, donations are generally non-refundable once processed.</p>
          <p>For donation-related concerns, please contact the church administration.</p>
        </section>

        <section id="event-registration">
          <h2>8. Event Registration</h2>
          <p>Participation in church events may be subject to:</p>
          <ul>
            <li>Registration requirements</li>
            <li>Capacity limitations</li>
            <li>Event-specific guidelines</li>
          </ul>
          <p>CBC reserves the right to modify, postpone, or cancel events when necessary.</p>
        </section>

        <section id="third-party-services">
          <h2>9. Third-Party Services</h2>
          <p>The website may contain links to third-party websites, applications, or services.</p>
          <p>CBC does not endorse or guarantee the accuracy, content, or practices of third-party platforms and is not responsible for them.</p>
        </section>

        <section id="disclaimer">
          <h2>10. Disclaimer</h2>
          <p>The website and its content are provided on an "as is" and "as available" basis.</p>
          <p>CBC makes no warranties, express or implied, regarding:</p>
          <ul>
            <li>Accuracy of content</li>
            <li>Availability of services</li>
            <li>Continuous operation of the website</li>
            <li>Suitability for specific purposes</li>
          </ul>
        </section>

        <section id="limitation-of-liability">
          <h2>11. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, CBC shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:</p>
          <ul>
            <li>Use of the website</li>
            <li>Inability to access the website</li>
            <li>Reliance on website content</li>
            <li>Interruptions or technical issues</li>
          </ul>
        </section>

        <section id="indemnification">
          <h2>12. Indemnification</h2>
          <p>You agree to indemnify and hold harmless CBC, its pastors, leaders, staff, volunteers, and affiliates from claims, liabilities, damages, or expenses arising from your use of the website or violation of these Terms.</p>
        </section>

        <section id="governing-law">
          <h2>13. Governing Law</h2>
          <p>These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.</p>
          <p>Any disputes shall be subject to the jurisdiction of competent courts in Nigeria.</p>
        </section>

        <section id="changes-to-terms">
          <h2>14. Changes to Terms</h2>
          <p>CBC may update these Terms and Conditions at any time.</p>
          <p>Continued use of the website after changes are posted constitutes acceptance of the revised Terms.</p>
        </section>

        <section id="contact">
          <h2>15. Contact Information</h2>
          <address>
            <strong>Calvary Bible Church (CBC Nigeria)</strong><br />
            Website: <a href="https://www.cbcnigeria.org">https://www.cbcnigeria.org</a><br />
            Email: <a href="mailto:trucalmsoffice@gmail.com">trucalmsoffice@gmail.com</a><br />
            Phone: <a href="tel:+2348023017462">+234 802 301 7462</a>
          </address>
        </section>
      </div>
    </div>
  )
}

export default TermsAndConditionsPage
