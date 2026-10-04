import ProjectShot from './ProjectShot.jsx'
import { projects, projectDetails } from '../data.js'

export default function Work() {
  return (
    <section id="work" className="section section--ruled" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section__head">
          <div>
            <p className="route">GET /work</p>
            <h2 id="work-title" className="h2">Selected work</h2>
          </div>
          <p className="note-box">
            [PLACEHOLDERS — replace each block with a real project: name, screenshot, role, stack, outcome]
          </p>
        </div>

        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.n} className={`project${i % 2 ? ' project--flip' : ''}`}>
              <div className="project__shot">
                <ProjectShot src={p.image} alt={`${p.name} screenshot`} variant={p.variant} url={p.url} />
              </div>

              <div className="project__info">
                <span className="project__num" aria-hidden="true">{p.n}</span>
                <h3 className="project__name">{p.name}</h3>
                <p className="project__type">{p.type}</p>
                <p className="project__stack">{p.stack}</p>
                <dl className="project__details">
                  {projectDetails.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="project__links">
                  <a className="navlink" href={p.caseStudy}>Read case study [LINK]</a>
                  <a className="navlink" href={p.source}>Source code [LINK]</a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
