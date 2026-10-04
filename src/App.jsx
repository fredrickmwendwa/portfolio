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

function Slot({ src, alt, label, className = '' }) {
  return (
    <div className={`slot ${className}`}>
      {src ? <img src={src} alt={alt} loading="lazy" /> : <span className="mono">{label}</span>}
    </div>
  );
}

function CaseLinks({ p }) {
  return (
    <div className="case-links">
      <a href={p.liveUrl || '#'} {...(p.liveUrl ? { target: '_blank', rel: 'noreferrer' } : {})}>
        Live site{p.liveUrl ? '' : ' [LIVE URL]'} <span aria-hidden="true">↗</span>
      </a>
      <a href={p.sourceUrl || '#'} {...(p.sourceUrl ? { target: '_blank', rel: 'noreferrer' } : {})}>
        Source code{p.sourceUrl ? '' : ' [SOURCE CODE URL]'} <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

function Facts({ p, className = '' }) {
  return (
    <dl className={`facts ${className}`}>
      <div><dt>PROBLEM</dt><dd><i>{p.problem}</i></dd></div>
      <div><dt>BUILT</dt><dd><i>{p.built}</i></dd></div>
      <div><dt>ROLE</dt><dd><i>{p.role}</i></dd></div>
      <div><dt>OUTCOME</dt><dd><i>{p.outcome}</i></dd></div>
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

/* ───────── hero ───────── */

function Hero() {
  return (
    <header className="hero">
      <div className="wrap" style={{ width: '100%' }}>
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
    </header>
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

        {/* CASE 01 — featured */}
        <article className="case g12" aria-labelledby={p1.id}>
          <div className="c1-img"><Slot src={p1.image} alt={p1.imageAlt} label={p1.slotLabel} /></div>
          <div className="c1-meta">
            <CaseHead p={p1} />
            <Facts p={p1} />
            <CaseLinks p={p1} />
          </div>
        </article>
      </div>

      {/* CASE 02 — night band, mirrored */}
      <div className="band night" style={{ marginTop: 'clamp(64px,8vw,120px)', paddingBlock: 'clamp(56px,7vw,104px)' }}>
        <div className="wrap">
          <article className="g12" style={{ alignItems: 'center' }} aria-labelledby={p2.id}>
            <div className="c2-meta">
              <CaseHead p={p2} />
              <Facts p={p2} />
              <CaseLinks p={p2} />
            </div>
            <div className="c2-img"><Slot src={p2.image} alt={p2.imageAlt} label={p2.slotLabel} className="r54" /></div>
          </article>
        </div>
      </div>

      {/* CASE 03 — ledger row */}
      <div className="wrap">
        <article className="case g12" style={{ alignItems: 'start', paddingBottom: 'clamp(64px,8vw,120px)' }} aria-labelledby={p3.id}>
          <div className="c3-img"><Slot src={p3.image} alt={p3.imageAlt} label={p3.slotLabel} className="r43" /></div>
          <div className="c3-meta">
            <CaseHead p={p3} />
            <Facts p={p3} className="c3-cols" />
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

/* ───────── attachment / turning point ───────── */

function TurningPoint() {
  return (
    <section className="band night sec" aria-labelledby="turn-h">
      <div className="wrap">
        <Route left="PATCH /turning-point" right="Industrial attachment · 3 months" />
        <div className="g12" style={{ marginTop: 'clamp(36px,5vw,72px)', alignItems: 'end', rowGap: 48 }}>
          <h2 id="turn-h" className="turn-q" style={{ gridColumn: '1 / span 8', margin: 0 }}>
            <span className="old">“How does this page look?”</span>
            <span className="new">“How does this business actually run?”</span>
          </h2>
          <div style={{ gridColumn: '10 / span 3' }}>
            <p className="bignum" aria-hidden="true">3</p>
            <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.5, color: 'var(--mist)' }}><span className="sr">3 </span>full-stack systems built during the attachment.</p>
          </div>
        </div>
        <div className="g12" style={{ marginTop: 'clamp(40px,5vw,72px)', rowGap: 28 }}>
          <p style={{ gridColumn: '1 / span 6', color: 'var(--mist-2)', fontSize: 18, lineHeight: 1.55 }}>PHP, Laravel and MySQL, applied to real business applications. This is where front-end work became software with data, rules and users behind it.</p>
          <div className="ph" style={{ gridColumn: '8 / span 5' }}>ICT AUTHORITY<br />SEP – DEC 2025</div>
        </div>
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
    
            <Slot src="/images/fredrick.jpg" alt="Portrait of Fredrick Mwendwa" label="Portrait slot · 4:5" className="portrait" />
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
      /* clipboard unavailable: still show feedback */
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="band night sec" aria-labelledby="contact-h">
      <div className="wrap">
        <Route left="POST /contact" right="Open to internship / junior roles" />
        <h2 id="contact-h" className="h2" style={{ marginTop: 'clamp(36px,5vw,72px)', fontSize: 'clamp(44px,8vw,120px)', maxWidth: '11em', lineHeight: 0.97 }}>Building something worth shipping?</h2>
        <p className="lead" style={{ marginTop: 28, color: 'var(--mist-2)', maxWidth: '30em' }}>I'm open to full-stack software engineering internships and junior roles. Send a note; I reply quickly.</p>
        <div className="mail">
          <a className="mail-addr" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button className="copy" type="button" onClick={copy} data-copied={copied ? 'true' : 'false'}>{copied ? 'Copied ✓' : 'Copy email'}</button>
          <span className="sr" role="status" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</span>
        </div>
        <div className="social">
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
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
          <span><a href={LINKEDIN}>LinkedIn</a> · <a href={GITHUB}>GitHub</a> · <a href={`mailto:${EMAIL}`}>Email</a> · © 2026</span>
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
      <Hero />
      <main>
        <Work />
        <Journey />
        <TurningPoint />
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
