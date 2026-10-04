import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  // Hides on scroll down, returns on scroll up.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 240 && !open)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  return (
    <header className={`nav${hidden ? ' nav--hidden' : ''}`}>
      <div className="wrap nav__inner">
        <a className="brand" href="#top" aria-label={`${profile.name} — home`}>
          <span className="brand__mark">FM</span>
          <span className="brand__name">{profile.name}</span>
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-nav" aria-label="Primary" className={`nav__links${open ? ' is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} className="navlink" href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn--solid" href="#contact" onClick={() => setOpen(false)}>
            Let's work together
          </a>
        </nav>
      </div>
    </header>
  )
}
