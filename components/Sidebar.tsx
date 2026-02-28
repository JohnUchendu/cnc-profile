const contactDetails = [
  { label: '', value: '' },

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

      <div className="">
        
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
