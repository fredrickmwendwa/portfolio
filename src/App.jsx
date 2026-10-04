import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import Journey from './components/Journey.jsx'
import About from './components/About.jsx'
import Stack from './components/Stack.jsx'
import Philosophy from './components/Philosophy.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Journey />
        <About />
        <Stack />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
