import BackgroundShapes from './BackgroundShapes'

export default function Footer() {
  return (
    <>
      {/* Curve */}
      <div className="footerCurve">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="#0d1f3c" />
        </svg>
      </div>

      <footer className="footer">
        <BackgroundShapes patternId="footer-dots" className="footerShapes" />

        <div className="footerGrid">
          <div>
            <div className="footerBrandName">The Association of British Investigators</div>
            <p className="footerBrandDesc">
              The ABI is the UK&apos;s premier professional body for private investigators,
              promoting high standards of practice, ethical conduct, and compliance.
            </p>
          </div>

          <div>
            <h4 className="footerSectionTitle">Contact Us</h4>
            <div className="footerContactItem">
              <span className="footerContactIcon">✉</span>
              Secretariat@theABI.org.uk
            </div>
            <div className="footerContactItem">
              <span className="footerContactIcon">☎</span>
              020 8191 7500
            </div>
            <div className="footerContactItem">
              <span className="footerContactIcon">☎</span>
              +44 20 8191 7500
            </div>
          </div>

          <div>
            <h4 className="footerSectionTitle">How to Find Us</h4>
            <address className="footerAddress">
              Brentano Suite, Catalyst House,<br />
              Centennial Park, Elstree,<br />
              Hertfordshire, WD6 3SY,<br />
              United Kingdom
            </address>
          </div>
        </div>

        <p className="footerBottom">
          © 2026 The Association of British Investigators Ltd (by guarantee) —
          Company Registration Number 998568 (registered office as above)
        </p>
      </footer>
    </>
  )
}
