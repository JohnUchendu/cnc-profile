export default function MembershipCard() {
  return (
    <div className="membershipCard">
      <div
        className="membershipCardShapes"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}
      >
        <svg
          width="180"
          height="180"
          style={{ position: 'absolute', top: '-40px', right: '-40px', opacity: 0.07 }}
        >
          <circle cx="90" cy="90" r="89" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="membershipInfo">
        <p>ABI Member Since</p>
        <h3>November 2024</h3>
        <span>Full Membership — Corporate &amp; Forensic Services</span>
      </div>

      <div className="membershipBadge">
        <div className="badgeNum">F2265</div>
        <div className="badgeLabel">Membership No.</div>
      </div>
    </div>
  )
}
