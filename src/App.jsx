import { useState, useRef, useEffect } from 'react';
import {
  EMAIL, LINKEDIN, GITHUB, CV_URL,
  projects, aboutImage, aboutParagraphs, aboutFacts, toolbox, principles,
} from './data.js';

/* ───────── scroll reveal: adds .is-in when [data-reveal] elements enter the viewport ───────── */

function useReveal() {
  useEffect(() => {
    clearTimeout(window.__revealFallback);
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }
    // Clipped elements report no area, so observe their parent instead.
    const map = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (map.get(entry.target) || entry.target).classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((el) => {
      const t = el.dataset.reveal === 'img' ? el.parentElement : el;
      map.set(t, el);
      io.observe(t);
    });
    return () => io.disconnect();
  }, []);
}


/* ───────── magnetic buttons: elements with [data-magnetic] lean toward a fine pointer ───────── */

function useMagnetic() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return undefined;
    const els = Array.from(document.querySelectorAll('[data-magnetic]'));
    const cleanups = els.map((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.setProperty('--mx', `${(dx * 0.22).toFixed(1)}px`);
        el.style.setProperty('--my', `${(dy * 0.3).toFixed(1)}px`);
      };
      const leave = () => { el.style.setProperty('--mx', '0px'); el.style.setProperty('--my', '0px'); };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); };
    });
    return () => cleanups.forEach((c) => c());
  }, []);
}

/* ───────── which section is on screen (header underline and mobile dock) ───────── */

const SECTION_IDS = ['work', 'about', 'toolbox', 'contact'];

function useActiveSection() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTION_IDS.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    const hero = document.querySelector('.hero');
    const heroIo = new IntersectionObserver((entries) => { if (entries[0].isIntersecting) setActive(null); }, { rootMargin: '-45% 0px -50% 0px' });
    if (hero) heroIo.observe(hero);
    return () => { io.disconnect(); heroIo.disconnect(); };
  }, []);
  return active;
}

/* ───────── theme: follows the system, remembers a manual choice ───────── */

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.dataset.theme === 'dark'); }, []);
  const flip = () => {
    const next = dark ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.add('theme-anim');
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable: choice lasts for this visit */ }
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', next === 'dark' ? '#14130F' : '#F1EEE8'));
    setDark(next === 'dark');
    setTimeout(() => root.classList.remove('theme-anim'), 600);
  };
  return (
    <button className="theme-btn" type="button" onClick={flip} aria-pressed={dark} aria-label="Dark mode" title="Toggle dark mode">
      <svg className="i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="currentColor" /></svg>
      <svg className="i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor" /><g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3 7 7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7" /></g></svg>
    </button>
  );
}

/* ───────── header: fixed, hides on scroll down, returns on scroll up (desktop) ───────── */

function SiteHeader({ active }) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
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
      <div className="wrap header-in">
        <nav className="nav" aria-label="Primary">
          <a className="logo" href="#top" aria-label="Fredrick Mwendwa, home"><b>FM</b><span>Fredrick Mwendwa</span></a>
          <div className="links">
            {[['work', 'Work'], ['about', 'About'], ['toolbox', 'Toolbox'], ['contact', 'Contact']].map(([id, label]) => (
              <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>{label}</a>
            ))}
            <a href={CV_URL} className="btn ghost cv" download="Fredrick_Mwendwa_CV.pdf" data-magnetic>Download CV <span className="ar" aria-hidden="true">↓</span></a>
            <ThemeToggle />
            <a href="#contact" className="btn solid" data-magnetic>Let's talk</a>
          </div>
        </nav>
      </div>
      <div className="progress" ref={bar} aria-hidden="true" />
    </div>
  );
}

/* ───────── hero ───────── */

function Seal() {
  return (
    <a className="seal" href="#contact" data-magnetic aria-label="Open to internships and junior roles. Get in touch.">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <defs><path id="sealpath" d="M60,60 m-41,0 a41,41 0 1,1 82,0 a41,41 0 1,1 -82,0" /></defs>
        <circle cx="60" cy="60" r="59" className="seal-bg" />
        <text fontFamily="IBM Plex Mono, monospace" fontSize="8.4" className="seal-tx" textLength="254" lengthAdjust="spacing">
          <textPath href="#sealpath">OPEN TO INTERNSHIPS · JUNIOR ROLES ·</textPath>
        </text>
        <circle cx="60" cy="60" r="19" className="seal-dot" />
        <path d="M52 68 L68 52 M54 52 H68 V66" className="seal-ar" strokeWidth="2.4" fill="none" />
      </svg>
    </a>
  );
}

function Hero() {
  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty('--px', `${(x * 16).toFixed(1)}px`);
    e.currentTarget.style.setProperty('--py', `${(y * 12).toFixed(1)}px`);
  };
  return (
    <header className="hero" aria-label="Introduction" onPointerMove={onMove}>
      <div className="wrap hero-main g12" style={{ width: '100%' }}>
        <div className="hero-l">
          <p className="mono eyebrow" data-rise style={{ animationDelay: '.05s' }}><i className="pip" />Full-stack developer · Nairobi, Kenya</p>
          <h1 className="h1" aria-label="I build web applications, front to back.">
            <span className="ln" style={{ '--i': 0 }} aria-hidden="true"><span>I build web</span></span>
            <span className="ln" style={{ '--i': 1 }} aria-hidden="true"><span>applications,</span></span>
            <span className="ln" style={{ '--i': 2 }} aria-hidden="true"><span className="acc">front to&nbsp;back.</span></span>
          </h1>
          <p className="lead" data-rise style={{ animationDelay: '.2s' }}>Hi, I'm Fredrick. I build the interface, the logic and the data behind it, so what I deliver is a complete, dependable product, not half of one.</p>
          <div className="cta" data-rise style={{ animationDelay: '.28s' }}>
            <a className="btn solid" href="#work" data-magnetic>View selected work <span className="ar" aria-hidden="true">↓</span></a>
            <a className="btn ghost" href="#contact" data-magnetic>Get in touch</a>
          </div>
        </div>

        <div className="hero-r" data-rise style={{ animationDelay: '.34s' }}>
          <figure className="portrait-wrap">
            <div className="back-arch" aria-hidden="true" />
            <div className="arch">
              <img
                src="/images/fredrick.webp"
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
          <span className="stackmini">React · JavaScript · Python · Django · PostgreSQL</span>
        </div>
      </div>
    </header>
  );
}

/* ───────── selected work ───────── */

function Case({ p, index }) {
  const n = String(index + 1).padStart(2, '0');
  const kind = p.layout || (index % 2 === 0 ? 'l' : 'r');
  const tone = kind === 'l' ? '' : kind === 'r' ? ' paper' : ' deep';
  return (
    <div className={`case-band${tone}`} id={p.id}>
      <div className="wrap">
        <article className={`case ${kind} g12`} aria-labelledby={`${p.id}-h`}>
          <div className="case-img" data-reveal="img">
            <div className="slot">
              {p.image ? (
                <>
                  <span className="chip" aria-hidden="true">{n}</span>
                  <img src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" style={{ objectPosition: p.imagePos || 'top center' }} />
                </>
              ) : (
                <span className="num" aria-hidden="true">{n}</span>
              )}
            </div>
          </div>
          <div className="case-meta">
            <div className="m-head" data-reveal style={{ '--d': '.18s' }}>
              <h3 id={`${p.id}-h`} className="case-name">{p.name}</h3>
              <p className="case-kind">{p.kind}</p>
              <p className="case-desc">{p.desc}</p>
              <div className="tags">{p.stack.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
            <div className="m-body" data-reveal style={{ '--d': '.28s' }}>
              {p.highlight && <p className="highlight"><i aria-hidden="true" />{p.highlight}</p>}
              <details className="more">
                <summary><span>Project details</span><i aria-hidden="true" /></summary>
                <div className="more-in">
                  {p.covers && (
                    <div className="covers">
                      <p className="mono">What it covers</p>
                      <ol>{p.covers.map((c, ci) => <li key={c}><span>{String(ci + 1).padStart(2, '0')}</span>{c}</li>)}</ol>
                    </div>
                  )}
                  <dl className="facts">
                    <div><dt>PROBLEM</dt><dd>{p.problem}</dd></div>
                    <div><dt>ROLE</dt><dd>{p.role}</dd></div>
                    <div><dt>OUTCOME</dt><dd>{p.outcome}</dd></div>
                  </dl>
                </div>
              </details>
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
          </div>
        </article>
      </div>
    </div>
  );
}

/* index of projects: hovering a row floats a preview of that project beside the cursor */

function ProjectIndex() {
  const box = useRef(null);
  const [current, setCurrent] = useState(0);
  const [shown, setShown] = useState(false);
  const raf = useRef(0);

  const track = (e) => {
    if (e.pointerType !== 'mouse' || !box.current) return;
    const { clientX: x, clientY: y } = e;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      if (box.current) box.current.style.transform = `translate3d(${x + 28}px, ${y - 110}px, 0)`;
    });
  };
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return (
    <div className="index" onPointerMove={track} onPointerLeave={() => setShown(false)}>
      <ol>
        {projects.map((p, i) => (
          <li key={p.id} data-reveal style={{ '--d': `${i * 0.08}s` }}>
            <a
              href={`#${p.id}`}
              onPointerEnter={(e) => { if (e.pointerType === 'mouse') { setCurrent(i); setShown(true); } }}
              onFocus={() => setCurrent(i)}
            >
              <span className="ix mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="in">{p.name}</span>
              <span className="ik">{p.kind}</span>
              <span className="ia" aria-hidden="true">↓</span>
            </a>
          </li>
        ))}
      </ol>
      <div className={`peek${shown ? ' on' : ''}`} ref={box} aria-hidden="true">
        {projects.map((p, i) => (
          <img key={p.id} src={p.image} alt="" className={i === current ? 'cur' : ''} loading="lazy" decoding="async" style={{ objectPosition: p.imagePos || 'top center' }} />
        ))}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="sec" style={{ paddingBottom: 0 }} aria-labelledby="work-h">
      <div className="wrap">
        <div className="g12 sec-head">
          <div style={{ gridColumn: '1 / span 9' }} data-reveal>
            <p className="mono kicker">Selected work</p>
            <h2 id="work-h" className="h2" style={{ marginTop: 22 }}>Projects I've built.</h2>
          </div>
          <p className="count" style={{ gridColumn: '10 / span 3', '--d': '.15s' }} data-reveal aria-hidden="true">({String(projects.length).padStart(2, '0')})</p>
        </div>
        <ProjectIndex />
      </div>
      <div className="cases">
        {projects.map((p, i) => <Case key={p.id} p={p} index={i} />)}
      </div>
    </section>
  );
}

/* ───────── about ───────── */

function About() {
  return (
    <section id="about" className="sec" aria-labelledby="about-h">
      <div className="wrap">
        <div className="g12" style={{ rowGap: 48, alignItems: 'start' }}>
          <div className="about-statement" data-reveal>
            <p className="mono kicker">About</p>
            <h2 id="about-h" className="h2" style={{ marginTop: 22 }}>Software that feels simple to use and is solid underneath.</h2>
          </div>
          <div className="about-body" data-reveal style={{ '--d': '.12s' }}>
            {aboutImage && (
              <figure className="about-photo" data-reveal="img">
                <img src={aboutImage} alt="Fredrick Mwendwa at work" loading="lazy" decoding="async" />
              </figure>
            )}
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
        <p className="mono kicker" data-reveal>Toolbox</p>
        <h2 id="tool-h" className="h2" style={{ marginTop: 22, maxWidth: '12em' }} data-reveal>The tools I build with.</h2>
        <div className="tool-cols">
          {toolbox.map((c, ci) => (
            <div className="tool" key={c.title} data-reveal style={{ '--d': `${ci * 0.12}s` }}>
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
          <div style={{ gridColumn: '1 / span 4' }} data-reveal>
            <p className="mono kicker">How I work</p>
            <h2 id="how-h" className="h2" style={{ marginTop: 22 }}>Principles I build by.</h2>
          </div>
          <ol style={{ gridColumn: '6 / span 7', listStyle: 'none' }}>
            {principles.map(([n, title, text], i) => (
              <li className="how-row" key={n} data-reveal="row" style={{ '--d': `${i * 0.08}s` }}><span className="n">{n}</span><h3>{title}</h3><p>{text}</p></li>
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
            <p className="pill mono" data-reveal><i />Open to internships &amp; junior roles</p>
            <h2 id="contact-h" className="cta-h" data-reveal style={{ '--d': '.1s' }}>Let's build something worth shipping.</h2>
            <p className="lead" data-reveal style={{ '--d': '.2s' }}>Full-stack internships and junior software engineering roles are what I'm after. Send a note; I reply quickly.</p>
            <div className="cta-actions" data-reveal style={{ '--d': '.3s' }}>
              <a className="btn paper" href={`mailto:${EMAIL}?subject=Hello%20Fredrick`} data-magnetic>Email me <span className="ar" aria-hidden="true">→</span></a>
              <a className="btn out" href={CV_URL} download="Fredrick_Mwendwa_CV.pdf" data-magnetic>Download CV <span className="ar" aria-hidden="true">↓</span></a>
              <button className="btn out" type="button" onClick={copy} data-copied={copied ? 'true' : 'false'}>{copied ? 'Copied ✓' : 'Copy email'}</button>
              <span className="sr" role="status" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</span>
            </div>
          </div>
          <ul className="cta-r">
            <li data-reveal style={{ '--d': '.2s' }}><a href={`mailto:${EMAIL}`}><span className="k mono">Email</span><span className="v">{EMAIL}</span><span className="go" aria-hidden="true">↗</span></a></li>
            <li data-reveal style={{ '--d': '.3s' }}><a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><span className="k mono">LinkedIn</span><span className="v">/in/fredrick-mwendwa</span><span className="go" aria-hidden="true">↗</span></a></li>
            <li data-reveal style={{ '--d': '.4s' }}><a href={GITHUB} target="_blank" rel="noopener noreferrer"><span className="k mono">GitHub</span><span className="v">/fredrickmwendwa</span><span className="go" aria-hidden="true">↗</span></a></li>
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
            <a href={CV_URL} download="Fredrick_Mwendwa_CV.pdf">CV</a> · <a href={LINKEDIN} rel="noopener noreferrer">LinkedIn</a> · <a href={GITHUB} rel="noopener noreferrer">GitHub</a> · <a href={`mailto:${EMAIL}`}>Email</a> · © 2026
          </span>
        </div>
        <p className="wordmark" aria-hidden="true" data-reveal="mark">Fredrick Mwendwa</p>
      </div>
    </footer>
  );
}

/* ───────── app ───────── */

export default function App() {
  useReveal();
  useMagnetic();
  const active = useActiveSection();
  const idx = SECTION_IDS.indexOf(active);
  return (
    <div id="top">
      <a className="sr" href="#work">Skip to selected work</a>
      <SiteHeader active={active} />
      <Hero />
      <main>
        <Work />
        <About />
        <Toolbox />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
      <nav className="dock" aria-label="Sections" data-on={idx >= 0 ? 'true' : 'false'} style={{ '--idx': Math.max(idx, 0) }}>
        <span className="dock-pill" aria-hidden="true" />
        {[['work', 'Work'], ['about', 'About'], ['toolbox', 'Tools'], ['contact', 'Contact']].map(([id, label]) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>{label}</a>
        ))}
      </nav>
    </div>
  );
}
