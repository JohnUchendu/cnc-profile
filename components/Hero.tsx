import BackgroundShapes from './BackgroundShapes'

export default function Hero() {
  return (
    <div className="hero">
      <BackgroundShapes patternId="hero-dots" className="heroShapes" />
      <div className="breadcrumb">
        <span>Home</span> ›{' '}
        <span>Find an Investigator</span> ›{' '}
        <span>CNC Intelligence LTD</span>
      </div>
      <h1 className="heroH1">
        CNC Intelligence LTD{' '}
        <span className="memberId">F2265</span>
      </h1>
    </div>
  )
}
