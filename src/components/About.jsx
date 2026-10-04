import { useState } from 'react'
import { about, profile } from '../data.js'

function Portrait() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="portrait">
      {failed && (
        <span className="portrait__hint">[PORTRAIT — 4:5, soft daylight, plain wall, optional monochrome]</span>
      )}
      {!failed && (
        <img
          src={profile.portrait}
          alt={`Portrait of ${profile.name}`}
          width="560"
          height="700"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="wrap about" aria-labelledby="about-title">
      <div className="about__lead">
        <p className="route">GET /about</p>
        <h2 id="about-title" className="h2 h2--md">Early in my career. Serious about the craft.</h2>
        <Portrait />
      </div>
      <div className="about__text">
        {about.map((p, i) => (
          <p key={i} className={i === 0 || i === about.length - 1 ? '' : 'muted'}>
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}
