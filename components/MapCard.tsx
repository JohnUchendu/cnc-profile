export default function MapCard() {
  return (
    <div className="mapCard">
      <h2>Location</h2>
      <iframe
       src="https://www.google.com/maps?q=20+Farrington+St,+London,+EC4A+4AB,+United+Kingdom&output=embed"allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="20 Farrington St, London EC4A4AB, UK"
      />
    </div>
  )
}
