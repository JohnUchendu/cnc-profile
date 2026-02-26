const contactDetails = [
  { label: 'Contact Name', value: 'Matthew Stern' },
  { label: 'Landline', value: '020 3695 3837' },
  { label: 'Mobile', value: '+44 2045 786013' },
  { label: 'Email', value: 'admin@cncintel.com' },
  { label: 'Website', value: 'cncintel.com' },
]

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logoCard">
        <img
          src="/logo.png"
          alt="CNC Intelligence LTD logo"
        />
      </div>

      <div className="contactCard">
        <h3>Contact Details</h3>
        {contactDetails.map(({ label, value }) => (
          <div key={label} className="contactRow">
            <div className="contactLabel">{label}</div>
            <div className="contactValue">{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
