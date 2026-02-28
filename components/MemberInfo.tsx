const details = [
  { label: 'Name', value: 'George Bluefin' },
  { label: 'Join Date', value: 'November 2024' },
  { label: 'Membership Number', value: 'F2065' },
  { label: 'Website', value: 'norwynsolution.com' },
  { label: 'email', value: 'help@norwynsolution.com' },
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
           20 Farrington St, London EC4A4AB, UK
          </div>
        </div>
      </div>
    </div>
  )
}
