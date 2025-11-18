import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">About</h2>
              <p className="text-slate-300 leading-relaxed">
                I'm an engineering student focused on building dependable systems—bridging hardware and software. My interests span embedded systems, data-driven decision making, and tooling that improves developer experience. I value clarity, performance, and maintainability.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-800/50 p-6">
              <h3 className="text-white font-semibold mb-2">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>GPA: 3.8/4.0</li>
                <li>Looking for: Summer '25 Internship</li>
                <li>Interests: Embedded, Backend, Tooling</li>
              </ul>
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
