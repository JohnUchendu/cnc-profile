const services = [
  'Fraud Investigations',
  'Specialist & Forensic Services',
  'Tracing & Status Reports',
  'Undercover Investigations',
  'Brand Protection / Intellectual Property',
  'Asset Tracing',
]

export default function Services() {
  return (
    <div className="infoCard">
      <h2>Services Offered</h2>
      <div className="servicesGrid">
        {services.map((service) => (
          <div key={service} className="serviceTag">
            {service}
          </div>
        ))}
      </div>
    </div>
  )
}
