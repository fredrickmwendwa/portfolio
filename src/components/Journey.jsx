import { journey, attachment, education } from '../data.js'

export default function Journey() {
  return (
    <section id="journey" className="dark section section--night" aria-labelledby="journey-title">
      <div className="wrap">
        <p className="route">GET /journey</p>
        <h2 id="journey-title" className="h2 journey__title">From making pages to building systems.</h2>
        <p className="journey__intro">
          Each step came from building something with the tools, not from a course list. The stack grew
          because the problems did.
        </p>

        <ol className="steps">
          {journey.map((s) => (
            <li key={s.n} className={`step${s.now ? ' step--now' : ''}`}>
              <span className="step__n">{s.n}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__tech">{s.tech}</p>
              <p className="step__text">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="callouts">
          <div className="callout callout--wide">
            <p className="route">The turning point · Industrial attachment · 3 months</p>
            <p className="callout__quote">{attachment.quote}</p>
            <p className="callout__text">{attachment.text}</p>
            <p className="callout__placeholders">
              {attachment.placeholders.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </p>
          </div>
          <div className="callout">
            <p className="route">Education · In progress</p>
            <p className="callout__degree">{education.degree}</p>
            <p className="callout__school">{education.school}</p>
            <p className="callout__status">{education.status}</p>
            <p className="callout__text">{education.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
