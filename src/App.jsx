import { useState, useRef, useEffect } from 'react';
import { EMAIL, LINKEDIN, GITHUB, projects, journey, layers, principles } from './data.js';

/* ───────── small shared pieces ───────── */

function Route({ left, right }) {
  return (
    <div className="route mono">
      <span className="l">{left}</span>
      <span className="r">{right}</span>
    </div>
  );
}

function Slot({ src, alt, className = '' }) {
  return (
    <div className={`slot ${className}`}>
      {src ? <img src={src} alt={alt} loading="lazy" decoding="async" /> : null}
    </div>
  );
}

function CaseLinks({ p }) {
  if (!p.liveUrl && !p.sourceUrl) return null;
  return (
    <div className="case-links">
      {p.liveUrl && (
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
          Live site <span aria-hidden="true">↗</span>
        </a>
      )}
      {p.sourceUrl && (
        <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
          Source code <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

function Facts({ p }) {
  return (
    <dl className="facts">
      <div><dt>PROBLEM</dt><dd>{p.problem}</dd></div>
      <div><dt>BUILT</dt><dd>{p.built}</dd></div>
      <div><dt>ROLE</dt><dd>{p.role}</dd></div>
      <div><dt>OUTCOME</dt><dd>{p.outcome}</dd></div>
    </dl>
  );
}

function CaseHead({ p }) {
  return (
    <>
      <p className="case-num">{p.num}</p>
      <h3 id={p.id} className="case-name">{p.name}</h3>
      <p className="case-kind">{p.kind}</p>
      <div className="stackline">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
    </>
  );
}

/* ───────── header: sticky, hides on scroll down, returns on scroll up (desktop) ───────── */

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
            <a href="#journey">Journey</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn solid">Let's work together</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

/* ───────── hero ───────── */

function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="wrap hero-main g12" style={{ width: '100%' }}>
        <div className="hero-l">
          <p className="mono eyebrow" data-rise style={{ animationDelay: '.05s' }}>Fredrick Mwendwa — Full-stack developer</p>
          <h1 className="h1" data-rise style={{ animationDelay: '.12s' }}>I build complete web products, from <span className="u">interface</span> to&nbsp;API.</h1>
          <p className="lead" data-rise style={{ animationDelay: '.2s' }}>Final-year Computer Science student in Nairobi. I take an application from the screen through the endpoint to the database, and I'm looking for an internship or junior role where I can do that on a real team.</p>
          <div className="cta" data-rise style={{ animationDelay: '.28s' }}>
            <a className="btn solid" href="#work">View selected work <span className="ar" aria-hidden="true">↓</span></a>
            <a className="btn ghost" href="#contact">Get in touch</a>
          </div>
        </div>

        <aside className="hero-r" aria-label="One request travelling through three layers: interface, API, data" data-rise style={{ animationDelay: '.34s' }}>
          <div className="stack-label mono"><span>One request, three layers</span><span>↓ request</span></div>
          <article className="plate p1" tabIndex={0}>
            <header><h3>Interface</h3><span className="route-code">GET /orders</span></header>
            <p className="tech">React · HTML · CSS · JavaScript</p>
            <p className="desc">What people see and touch: forms, tables, states, responsive layouts.</p>
          </article>
          <div className="wire" aria-hidden="true"><span>fetch()</span></div>
          <article className="plate dark" tabIndex={0}>
            <header><h3>API</h3><span className="route-code">/api/orders/</span></header>
            <p className="tech">Django REST Framework · Django · Python</p>
            <p className="desc">The contract between screen and system: validation, auth, business rules.</p>
          </article>
          <div className="wire" aria-hidden="true"><span>ORM query</span></div>
          <article className="plate p3" tabIndex={0}>
            <header><h3>Data</h3><span className="route-code">SELECT … FROM orders</span></header>
            <p className="tech">PostgreSQL · MySQL</p>
            <p className="desc">Schemas and queries that keep the application honest.</p>
          </article>
          <p className="stack-note"><span>Illustrative · hover or focus a layer</span><span>→ 201 Created</span></p>
        </aside>
      </div>

      <div className="wrap" style={{ width: '100%' }}>
        <div className="hero-foot mono">
          <span className="avail"><i className="dot" />Nairobi, Kenya · Open to internship / junior roles</span>
          <a className="scroll" href="#work" style={{ minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>GET /work ↓</a>
        </div>
      </div>
    </section>
  );
}

/* ───────── selected work ───────── */

function Work() {
  const [p1, p2, p3] = projects;
  return (
    <section id="work" className="sec" style={{ paddingBottom: 0 }} aria-labelledby="work-h">
      <div className="wrap">
        <Route left="GET /work" right="200 OK · 3 projects" />
        <div className="g12 sec-head">
          <h2 id="work-h" className="h2" style={{ gridColumn: '1 / span 7' }}>Selected work</h2>
        </div>

        {/* CASE 01 */}
        <article className="case g12" aria-labelledby={p1.id}>
          <div className="c1-img"><Slot src={p1.image} alt={p1.imageAlt} /></div>
          <div className="c1-meta">
            <CaseHead p={p1} />
            <Facts p={p1} />
            <CaseLinks p={p1} />
          </div>
        </article>
      </div>

      {/* CASE 02: night band, mirrored */}
      <div className="band night" style={{ marginTop: 'clamp(64px,8vw,120px)', paddingBlock: 'clamp(56px,7vw,104px)' }}>
        <div className="wrap">
          <article className="g12" style={{ alignItems: 'center' }} aria-labelledby={p2.id}>
            <div className="c2-meta">
              <CaseHead p={p2} />
              <Facts p={p2} />
              <CaseLinks p={p2} />
            </div>
            <div className="c2-img"><Slot src={p2.image} alt={p2.imageAlt} className="r54" /></div>
          </article>
        </div>
      </div>

      {/* CASE 03: same composition as 01 */}
      <div className="wrap">
        <article className="case g12" style={{ paddingBottom: 'clamp(64px,8vw,120px)' }} aria-labelledby={p3.id}>
          <div className="c1-img"><Slot src={p3.image} alt={p3.imageAlt} /></div>
          <div className="c1-meta">
            <CaseHead p={p3} />
            <Facts p={p3} />
            <CaseLinks p={p3} />
          </div>
        </article>
      </div>
    </section>
  );
}

/* ───────── journey ───────── */

function Journey() {
  return (
    <section id="journey" className="sec" style={{ paddingTop: 0 }} aria-labelledby="journey-h">
      <div className="wrap">
        <Route left="GET /journey" right="200 OK · page → system" />
        <div className="g12 sec-head">
          <h2 id="journey-h" className="h2" style={{ gridColumn: '1 / span 7' }}>From making pages to building systems.</h2>
          <p className="lead" style={{ gridColumn: '9 / span 4' }}>Each step came from building something with the tools, not from a course list. The stack grew because the problems did.</p>
        </div>
        <ol className="stairs" style={{ listStyle: 'none' }}>
          {journey.map((s) => (
            <li className="step" key={s.n}>
              <div>
                <p className="n">{s.n}</p>
                <h3>{s.title}</h3>
                <p className="tech">{s.tech}</p>
                <p className="story">{s.story}</p>
              </div>
              <p className="shape"><span className={s.now ? 'now' : undefined}>{s.shape}</span><span className={s.now ? 'now' : undefined} aria-hidden="true">{s.mark}</span></p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────── about ───────── */

function About() {
  return (
    <section id="about" className="sec" aria-labelledby="about-h">
      <div className="wrap">
        <Route left="GET /about" right="200 OK" />
        <div className="g12 about-grid" style={{ marginTop: 'clamp(28px,4vw,56px)', alignItems: 'start', rowGap: 32 }}>
          <div style={{ gridColumn: '1 / span 4' }}>
            <Slot src="/images/fredrick.jpg" alt="Portrait of Fredrick Mwendwa, full-stack developer in Nairobi" className="portrait" />
          </div>
          <div className="about" style={{ gridColumn: '6 / span 7' }}>
            <h2 id="about-h" className="h2">Early in my career. Serious about the craft.</h2>
            <div style={{ marginTop: 36 }}>
              <p className="lead" style={{ color: 'var(--ink)' }}>I'm Fredrick, a final-year Computer Science diploma student at Kiambu National Polytechnic, based in Nairobi.</p>
              <p>I started with freelance front-end work: HTML, CSS and JavaScript. A three-month industrial attachment then moved me into PHP, Laravel and MySQL, building business applications where the interface was only one piece.</p>
              <p>Since then I've moved into React, Python, Django and Django REST Framework, because I want to own a product from the screen to the database rather than hand it off halfway.</p>
              <p>I'm looking for a full-stack internship or junior role on a team that ships real software, with people I can learn from.</p>
            </div>
            <div className="edu">
              <b>Diploma in Computer Science</b>
              <span className="mono" style={{ alignSelf: 'center', color: 'var(--signal-text)' }}>In progress</span>
              <span>Kiambu National Polytechnic · Final year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── stack ───────── */

function Stack() {
  return (
    <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="stack-h">
      <div className="wrap">
        <Route left="GET /stack" right="200 OK · by role in the system" />
        <div className="g12 sec-head">
          <h2 id="stack-h" className="h2" style={{ gridColumn: '1 / span 7' }}>The stack, by what it's for.</h2>
        </div>
        <div className="layers">
          {layers.map((l) => (
            <div className="layer" key={l.title}>
              <h3>{l.title}</h3>
              <p className="what">{l.what}</p>
              <ul>
                {l.items.map(([name, role]) => (
                  <li key={name}><b>{name}</b><span>{role}</span></li>
                ))}
              </ul>
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
    <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="how-h">
      <div className="wrap">
        <Route left="GET /how-i-work" right="200 OK · 5 principles" />
        <div className="g12 about-grid" style={{ marginTop: 'clamp(28px,4vw,56px)', alignItems: 'start', rowGap: 32 }}>
          <h2 id="how-h" className="h2" style={{ gridColumn: '1 / span 4' }}>How I approach software.</h2>
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

/* ───────── contact ───────── */

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
    <section id="contact" className="band night sec cta-sec" aria-labelledby="contact-h">
      <div className="wrap">
        <Route left="POST /contact" right="Open to internship / junior roles" />
        <div className="cta-grid g12">
          <div className="cta-l">
            <p className="avail-pill mono"><i className="dot" />Available now · Nairobi, Kenya</p>
            <h2 id="contact-h" className="cta-h">Building something worth <span className="u">shipping?</span></h2>
            <p className="lead">I'm open to full-stack software engineering internships and junior roles. Send a note; I reply quickly.</p>
            <div className="cta-actions">
              <a className="btn signal" href={`mailto:${EMAIL}?subject=Hello%20Fredrick`}>Email me <span className="ar" aria-hidden="true">→</span></a>
              <button className="btn line" type="button" onClick={copy} data-copied={copied ? 'true' : 'false'}>{copied ? 'Copied ✓' : 'Copy email'}</button>
              <span className="sr" role="status" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</span>
            </div>
          </div>

          <ul className="cta-r cta-list">
            <li>
              <a href={`mailto:${EMAIL}`}>
                <span className="k mono">Email</span>
                <span className="v">{EMAIL}</span>
                <span className="go" aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <span className="k mono">LinkedIn</span>
                <span className="v">/in/fredrick-mwendwa</span>
                <span className="go" aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                <span className="k mono">GitHub</span>
                <span className="v">/fredrickmwendwa</span>
                <span className="go" aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="band night">
      <div className="wrap">
        <div className="foot mono">
          <span>Fredrick Mwendwa · Full-stack developer · Nairobi, Kenya</span>
          <span><a href={LINKEDIN} rel="noopener noreferrer">LinkedIn</a> · <a href={GITHUB} rel="noopener noreferrer">GitHub</a> · <a href={`mailto:${EMAIL}`}>Email</a> · © 2026</span>
        </div>
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
        <Journey />
        <About />
        <Stack />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
      <nav className="dock" aria-label="Sections">
        <a href="#work">Work</a><a href="#journey">Journey</a><a href="#about">About</a><a href="#contact">Contact</a>
      </nav>
    </div>
  );
}
