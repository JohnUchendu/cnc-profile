import Image from "next/image"

const contactDetails = [
  { label: '', value: '' },

]

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logoCard">
        <Image
          src="/norwyn.png"
          alt="Norwyn Solution LTD logo"
          width={100}
          height={100}
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
