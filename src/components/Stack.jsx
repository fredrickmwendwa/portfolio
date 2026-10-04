import { stack } from '../data.js'

export default function Stack() {
  return (
    <section className="section section--paper section--ruled" aria-labelledby="stack-title">
      <div className="wrap">
        <p className="route">GET /stack</p>
        <h2 id="stack-title" className="h2 h2--md stack__title">The stack, by what it's for.</h2>
        <div className="stack">
          {stack.map((c) => (
            <div
              key={c.name}
              className={`stack__col${c.accent ? ' stack__col--accent' : ''}`}
              style={{ flexGrow: c.grow }}
            >
              <h3>{c.name}</h3>
              <p className="stack__blurb">{c.blurb}</p>
              <ul>
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
