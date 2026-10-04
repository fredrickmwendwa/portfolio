import { useState } from 'react'
import { layers } from '../data.js'

export default function Hero() {
  const [active, setActive] = useState(1)

  return (
    <section id="top" className="wrap hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="label rise">Fredrick Mwendwa — Full-stack developer</p>
        <h1 id="hero-title" className="h-display rise d1">
          I build complete web products, from <span className="hl">interface</span> to&nbsp;API.
        </h1>
        <p className="lead rise d2">
          Final-year Computer Science student in Nairobi. I take an application from the screen through
          the endpoint to the database, and I'm looking for an internship or junior role where I can do
          that on a real team.
        </p>
        <div className="hero__cta rise d3">
          <a className="btn btn--solid btn--lg" href="#work">View selected work</a>
          <a className="btn btn--outline btn--lg" href="#contact">Get in touch</a>
        </div>
        <p className="status rise d3">
          <span className="status__dot" aria-hidden="true" />
          <span>Based in Nairobi, Kenya · Available for internship / junior opportunities</span>
        </p>
      </div>

      <div className="hero__trace rise d2">
        <p className="label">One request, three layers</p>
        <div className="layers">
          {layers.map((l, i) => (
            <button
              key={l.name}
              type="button"
              className={`layer${i === active ? ' is-active' : ''}`}
              aria-pressed={i === active}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span className="layer__top">
                <span className="layer__name">{l.name}</span>
                <span className="layer__route">{l.route}</span>
              </span>
              <span className="layer__tech">{l.tech}</span>
              <span className="layer__note">{l.note}</span>
            </button>
          ))}
        </div>
        <p className="trace__caption">
          Illustrative — hover or focus a layer.
          <br />
          POST /api/[resource]/ → 201 Created
        </p>
      </div>
    </section>
  )
}
