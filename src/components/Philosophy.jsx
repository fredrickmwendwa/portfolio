import { philosophy } from '../data.js'

export default function Philosophy() {
  return (
    <section className="wrap phil" aria-labelledby="phil-title">
      <div className="phil__lead">
        <p className="route">GET /how-i-work</p>
        <h2 id="phil-title" className="h2 h2--md">How I approach software.</h2>
      </div>
      <ol className="phil__list">
        {philosophy.map(([title, text], i) => (
          <li key={title}>
            <span className="phil__n">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
