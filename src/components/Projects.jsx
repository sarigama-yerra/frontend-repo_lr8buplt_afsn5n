import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/projects`)
        const data = await res.json()
        setProjects(data.projects || [])
      } catch (e) {
        setProjects([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Projects</h2>
          <span className="text-slate-300 text-sm">Pulled from API</span>
        </div>

        {loading ? (
          <p className="text-slate-300">Loading projects...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-xl border border-white/10 bg-slate-800/50 hover:bg-slate-800/70 transition-colors p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold group-hover:text-white/90">{p.title}</h3>
                  <span className="text-xs text-slate-300">{p.subtitle}</span>
                </div>
                <p className="text-slate-300 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech?.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
