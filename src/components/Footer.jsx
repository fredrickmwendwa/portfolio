import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="dark footer">
      <div className="wrap footer__inner">
        <span>{profile.name} · {profile.role} · {profile.location}</span>
        <span className="footer__links">
          <a href={profile.linkedin} rel="noopener">LinkedIn</a>
          <a href={profile.github} rel="noopener">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <span>© {new Date().getFullYear()}</span>
        </span>
      </div>
    </footer>
  )
}
