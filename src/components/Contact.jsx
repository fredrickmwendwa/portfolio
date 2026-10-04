import { useRef, useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      /* clipboard unavailable: the mailto link still works */
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="dark section section--ink" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="route">POST /contact</p>
        <h2 id="contact-title" className="h-display contact__title">Building something worth shipping?</h2>
        <p className="contact__lead">
          I'm open to full-stack software engineering internships and junior roles. Send a note; I reply
          quickly.
        </p>
        <div className="contact__actions">
          <a className="btn btn--signal btn--lg" href={`mailto:${profile.email}`}>{profile.email}</a>
          <button type="button" className="btn btn--ghost" onClick={copy}>
            <span aria-live="polite">{copied ? 'Copied ✓' : 'Copy email'}</span>
          </button>
          <a className="textlink" href={profile.linkedin} rel="noopener">LinkedIn ↗</a>
          <a className="textlink" href={profile.github} rel="noopener">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
