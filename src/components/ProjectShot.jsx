import { useState } from 'react'

function Skeleton({ variant }) {
  if (variant === 'dashboard') {
    return (
      <>
        <div className="sk-row">
          <span className="sk-box" />
          <span className="sk-box" />
          <span className="sk-box sk-box--accent" />
        </div>
        <div className="sk-chart">
          {[40, 62, 48, 78, 58, 90].map((h, i) => (
            <span key={i} className={i === 3 ? 'is-accent' : i === 5 ? 'is-ink' : ''} style={{ height: `${h}%` }} />
          ))}
        </div>
      </>
    )
  }
  if (variant === 'table') {
    return (
      <>
        <div className="sk-toolbar">
          <span className="sk-input" />
          <span className="sk-btn" />
        </div>
        <div className="sk-table">
          {[0, 1, 2, 3].map((r) => (
            <span key={r}>
              <i style={{ width: '18%' }} />
              <i style={{ width: `${34 + r * 4}%` }} />
              <i style={{ width: '14%' }} className={r === 0 ? 'is-accent' : ''} />
            </span>
          ))}
        </div>
      </>
    )
  }
  return (
    <>
      <span className="sk-title" />
      <div className="sk-row">
        <span className="sk-field" />
        <span className="sk-field" />
      </div>
      <span className="sk-field" />
      <span className="sk-field sk-field--tall" />
      <span className="sk-submit" />
    </>
  )
}

// <img> sits on top of a neutral skeleton. If the file is missing the skeleton shows,
// so the layout stays polished until the real screenshot is added.
export default function ProjectShot({ src, alt, variant, url }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className="frame">
      <div className="frame__chrome">
        <i /><i /><i />
        <span className="frame__url">{url}</span>
      </div>
      <div className="frame__body">
        <aside className="frame__side" aria-hidden="true">
          <i style={{ width: '70%' }} />
          <i style={{ width: '90%' }} />
          <i style={{ width: '60%' }} />
          <i style={{ width: '80%' }} />
        </aside>
        <div className="frame__content" aria-hidden="true">
          <Skeleton variant={variant} />
        </div>
        {!failed && (
          <img className="frame__img" src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
        )}
      </div>
      {failed && import.meta.env.DEV && (
        <figcaption className="frame__hint">Screenshot slot — add {src}</figcaption>
      )}
    </figure>
  )
}
