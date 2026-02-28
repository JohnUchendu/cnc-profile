import BackgroundShapes from './BackgroundShapes'

export default function Hero() {
  return (
    <div className="hero">
      <BackgroundShapes patternId="hero-dots" className="heroShapes" />
      <div className="breadcrumb">
        <span>Home</span> ›{' '}
        <span>Find an Investigator</span> ›{' '}
        <span>Norwyn Solution Ltd</span>
      </div>
      <h1 className="heroH1">
        Norwyn Solution Ltd{' '}
        <span className="">(F2065)</span>
      </h1>
    </div>
  )
}
