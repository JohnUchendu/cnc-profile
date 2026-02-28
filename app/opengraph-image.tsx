import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://norwynsolution.org.uk'

  const LOGO_SRC = `${baseUrl}/image.png`

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <img
          src={LOGO_SRC}
          width={180}
          height={180}
          style={{ marginBottom: 40 }}
        />

        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Norwyn Solution Ltd
        </div>

        <div
          style={{
            fontSize: 40,
            marginTop: 20,
            color: '#555',
          }}
        >
          ABI Verified Member
        </div>
      </div>
    ),
    size
  )
}