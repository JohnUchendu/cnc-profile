const details = [
  { label: 'Name', value: 'George Bluefin' },
  { label: 'Join Date', value: 'November 2024' },
  { label: 'Membership Number', value: 'F2265' },
  { label: 'Website', value: 'cncintel.com' },
]

export default function MemberInfo() {
  return (
    <div className="infoCard">
      <h2>Member Information</h2>
      <div className="detailsGrid">
        {details.map(({ label, value }) => (
          <div key={label} className="detailItem">
            <div className="detailLabel">{label}</div>
            <div className="detailValue">{value}</div>
          </div>
        ))}
        <div className="detailItem addressBlock">
          <div className="detailLabel">Address</div>
          <div className="detailValue">
            128 City Road, London, EC1V 2NX<br />
            United Kingdom
          </div>
        </div>
      </div>
    </div>
  )
}
