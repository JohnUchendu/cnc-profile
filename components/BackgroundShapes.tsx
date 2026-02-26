interface BackgroundShapesProps {
  patternId: string
  className: string
}

export default function BackgroundShapes({ patternId, className }: BackgroundShapesProps) {
  return (
    <div className={className}>
      {/* Large circle top-right */}
      <svg
        width="380"
        height="380"
        style={{ position: 'absolute', top: '-120px', right: '-80px', opacity: 0.04 }}
      >
        <circle cx="190" cy="190" r="190" fill="none" stroke="white" strokeWidth="1.5" />
      </svg>

      {/* Medium circle top-right offset */}
      <svg
        width="220"
        height="220"
        style={{ position: 'absolute', top: '-30px', right: '60px', opacity: 0.05 }}
      >
        <circle cx="110" cy="110" r="109" fill="none" stroke="white" strokeWidth="1" />
      </svg>

      {/* Small circle bottom-left */}
      <svg
        width="160"
        height="160"
        style={{ position: 'absolute', bottom: '10px', left: '30px', opacity: 0.05 }}
      >
        <circle cx="80" cy="80" r="79" fill="none" stroke="white" strokeWidth="1" />
      </svg>

      {/* Diagonal lines */}
      <svg
        width="200"
        height="200"
        style={{ position: 'absolute', bottom: '-20px', right: '200px', opacity: 0.04 }}
      >
        <line x1="0" y1="200" x2="200" y2="0" stroke="white" strokeWidth="1" />
        <line x1="30" y1="200" x2="200" y2="30" stroke="white" strokeWidth="1" />
        <line x1="60" y1="200" x2="200" y2="60" stroke="white" strokeWidth="1" />
      </svg>

      {/* Dot grid top-left */}
      <svg
        width="120"
        height="100"
        style={{ position: 'absolute', top: '20px', left: '48px', opacity: 0.07 }}
      >
        <defs>
          <pattern id={patternId} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="120" height="100" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}
