import { useState, useRef, useEffect } from 'react';
import {
  EMAIL, LINKEDIN, GITHUB,
  projects, aboutParagraphs, aboutFacts, toolbox, principles,
} from './data.js';

/* ───────── header: fixed, hides on scroll down, returns on scroll up (desktop) ───────── */

function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;
      setScrolled(y > 8);
      if (y < 96) {
        setHidden(false);
      } else if (delta > 6) {
        // stay visible while keyboard focus is inside the header
        if (!ref.current?.contains(document.activeElement)) setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }
      if (Math.abs(delta) > 4) lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`site-header${hidden ? ' is-hidden' : ''}${scrolled ? ' is-scrolled' : ''}`}
      onFocusCapture={() => setHidden(false)}
    >
      <div className="wrap">
        <nav className="nav" aria-label="Primary">
          <a className="logo" href="#top" aria-label="Fredrick Mwendwa, home"><b>FM</b><span>Fredrick Mwendwa</span></a>
          <div className="links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#toolbox">Toolbox</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="btn solid">Let's talk</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

/* ───────── hero ───────── */

function Seal() {
  return (
    <a className="seal" href="#contact" aria-label="Open to internships and junior roles. Get in touch.">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <defs><path id="sealpath" d="M60,60 m-41,0 a41,41 0 1,1 82,0 a41,41 0 1,1 -82,0" /></defs>
        <circle cx="60" cy="60" r="59" fill="#FAF8F4" stroke="#12110F" />
        <text fontFamily="IBM Plex Mono, monospace" fontSize="8.4" fill="#12110F" textLength="254" lengthAdjust="spacing">
          <textPath href="#sealpath">OPEN TO INTERNSHIPS · JUNIOR ROLES ·</textPath>
        </text>
        <circle cx="60" cy="60" r="19" fill="#2338E6" />
        <path d="M52 68 L68 52 M54 52 H68 V66" stroke="#FAF8F4" strokeWidth="2.4" fill="none" />
      </svg>
    </a>
  );
}

function Hero() {
  return (
    <header className="hero" aria-label="Introduction">
      <div className="wrap hero-main g12" style={{ width: '100%' }}>
        <div className="hero-l">
          <p className="mono eyebrow" data-rise style={{ animationDelay: '.05s' }}><i className="pip" />Full-stack developer · Nairobi, Kenya</p>
          <h1 className="h1" data-rise style={{ animationDelay: '.12s' }}>I build web applications, <span className="acc">front to&nbsp;back.</span></h1>
          <p className="lead" data-rise style={{ animationDelay: '.2s' }}>Hi, I'm Fredrick. I build the interface, the logic and the data behind it, so what I deliver is a complete, dependable product, not half of one.</p>
          <div className="cta" data-rise style={{ animationDelay: '.28s' }}>
            <a className="btn solid" href="#work">View selected work <span className="ar" aria-hidden="true">↓</span></a>
            <a className="btn ghost" href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="hero-r" data-rise style={{ animationDelay: '.34s' }}>
          <figure className="portrait-wrap">
            <div className="back-arch" aria-hidden="true" />
            <div className="arch">
              <img
                src="/images/fredrick.jpg"
                alt="Portrait of Fredrick Mwendwa, full-stack developer in Nairobi"
                fetchpriority="high"
                decoding="async"
              />
            </div>
            <Seal />
          </figure>
        </div>
      </div>

      <div className="wrap" style={{ width: '100%' }}>
        <div className="hero-foot mono">
          <span className="avail"><i className="pip" />Available for internship / junior roles</span>
          <span className="stackmini">React · JavaScript · Python · Django · Laravel · PostgreSQL</span>
        </div>
      </div>
    </header>
  );
}

/* ───────── selected work ───────── */

function Case({ p, index, side, paper }) {
  const n = String(index + 1).padStart(2, '0');
  return (
    <div className={`case-band${paper ? ' paper' : ''}`}>
      <div className="wrap">
        <article className={`case ${side} g12`} aria-labelledby={p.id}>
          <div className="case-img">
            <div className="slot">
              {p.image ? (
                <>
                  <span className="chip" aria-hidden="true">{n}</span>
                  <img src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" />
                </>
              ) : (
                <span className="num" aria-hidden="true">{n}</span>
              )}
            </div>
          </div>
          <div className="case-meta">
            <h3 id={p.id} className="case-name">{p.name}</h3>
            <p className="case-kind">{p.kind}</p>
            <p className="case-desc">{p.desc}</p>
            <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
            <dl className="facts">
              <div><dt>PROBLEM</dt><dd>{p.problem}</dd></div>
              <div><dt>ROLE</dt><dd>{p.role}</dd></div>
              <div><dt>OUTCOME</dt><dd>{p.outcome}</dd></div>
            </dl>
            {(p.liveUrl || p.sourceUrl) && (
              <div className="case-links">
                {p.liveUrl && (
                  <a className="btn solid" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live site <span className="ar" aria-hidden="true">↗</span>
                  </a>
                )}
                {p.sourceUrl && (
                  <a className="link-u" href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
                    Source code <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="sec" style={{ paddingBottom: 0 }} aria-labelledby="work-h">
      <div className="wrap">
        <div className="g12 sec-head">
          <div style={{ gridColumn: '1 / span 9' }}>
            <p className="mono kicker">Selected work</p>
            <h2 id="work-h" className="h2" style={{ marginTop: 22 }}>Projects I've built.</h2>
          </div>
          <p className="count" style={{ gridColumn: '10 / span 3' }} aria-hidden="true">({String(projects.length).padStart(2, '0')})</p>
        </div>
      </div>
      {projects.map((p, i) => (
        <Case key={p.id} p={p} index={i} side={i % 2 === 0 ? 'l' : 'r'} paper={i % 2 === 1} />
      ))}
    </section>
  );
}

/* ───────── about ───────── */

function About() {
  return (
    <section id="about" className="sec" aria-labelledby="about-h">
      <div className="wrap">
        <div className="g12" style={{ rowGap: 48, alignItems: 'start' }}>
          <div className="about-statement">
            <p className="mono kicker">About</p>
            <h2 id="about-h" className="h2" style={{ marginTop: 22 }}>Software that feels simple to use and is solid underneath.</h2>
          </div>
          <div className="about-body">
            {aboutParagraphs.map((t) => <p key={t}>{t}</p>)}
            <dl className="about-facts">
              {aboutFacts.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
              <div><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── toolbox ───────── */

function Toolbox() {
  return (
    <section id="toolbox" className="dark sec" aria-labelledby="tool-h">
      <div className="wrap">
        <p className="mono kicker">Toolbox</p>
        <h2 id="tool-h" className="h2" style={{ marginTop: 22, maxWidth: '12em' }}>The tools I build with.</h2>
        <div className="tool-cols">
          {toolbox.map((c) => (
            <div className="tool" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <ul>{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── how I work ───────── */

function HowIWork() {
  return (
    <section className="sec" aria-labelledby="how-h">
      <div className="wrap">
        <div className="g12" style={{ rowGap: 40, alignItems: 'start' }}>
          <div style={{ gridColumn: '1 / span 4' }}>
            <p className="mono kicker">How I work</p>
            <h2 id="how-h" className="h2" style={{ marginTop: 22 }}>Principles I build by.</h2>
          </div>
          <ol style={{ gridColumn: '6 / span 7', listStyle: 'none' }}>
            {principles.map(([n, title, text]) => (
              <li className="how-row" key={n}><span className="n">{n}</span><h3>{title}</h3><p>{text}</p></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────── contact / CTA ───────── */

function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch (e) {
      /* clipboard unavailable: feedback still shows and the address stays visible */
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="cobalt sec" aria-labelledby="contact-h">
      <div className="wrap">
        <div className="g12 cta-grid">
          <div className="cta-l">
            <p className="pill mono"><i />Open to internships &amp; junior roles</p>
            <h2 id="contact-h" className="cta-h">Let's build something worth shipping.</h2>
            <p className="lead">Full-stack internships and junior software engineering roles are what I'm after. Send a note; I reply quickly.</p>
            <div className="cta-actions">
              <a className="btn paper" href={`mailto:${EMAIL}?subject=Hello%20Fredrick`}>Email me <span className="ar" aria-hidden="true">→</span></a>
              <button className="btn out" type="button" onClick={copy} data-copied={copied ? 'true' : 'false'}>{copied ? 'Copied ✓' : 'Copy email'}</button>
              <span className="sr" role="status" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</span>
            </div>
          </div>
          <ul className="cta-r">
            <li><a href={`mailto:${EMAIL}`}><span className="k mono">Email</span><span className="v">{EMAIL}</span><span className="go" aria-hidden="true">↗</span></a></li>
            <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><span className="k mono">LinkedIn</span><span className="v">/in/fredrick-mwendwa</span><span className="go" aria-hidden="true">↗</span></a></li>
            <li><a href={GITHUB} target="_blank" rel="noopener noreferrer"><span className="k mono">GitHub</span><span className="v">/fredrickmwendwa</span><span className="go" aria-hidden="true">↗</span></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="dark">
      <div className="wrap">
        <div className="foot-row mono">
          <span>Fredrick Mwendwa · Full-stack developer · Nairobi, Kenya</span>
          <span>
            <a href={LINKEDIN} rel="noopener noreferrer">LinkedIn</a> · <a href={GITHUB} rel="noopener noreferrer">GitHub</a> · <a href={`mailto:${EMAIL}`}>Email</a> · © 2026
          </span>
        </div>
        <p className="wordmark" aria-hidden="true">Fredrick Mwendwa</p>
      </div>
    </footer>
  );
}

/* ───────── app ───────── */

export default function App() {
  return (
    <div id="top">
      <a className="sr" href="#work">Skip to selected work</a>
      <SiteHeader />
      <Hero />
      <main>
        <Work />
        <About />
        <Toolbox />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
      <nav className="dock" aria-label="Sections">
        <a href="#work">Work</a><a href="#about">About</a><a href="#toolbox">Tools</a><a href="#contact">Contact</a>
      </nav>
    </div>
  );
}
