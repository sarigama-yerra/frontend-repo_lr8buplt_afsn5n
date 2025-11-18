import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#" onClick={(e)=>{e.preventDefault(); scrollTo('top')}} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">Engineering Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <button onClick={() => scrollTo('about')} className="hover:text-white/90 transition-colors">About</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-white/90 transition-colors">Skills</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-white/90 transition-colors">Projects</button>
            <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition-colors">Contact</button>
          </nav>

          <button className="md:hidden text-slate-200" onClick={toggle} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2 text-slate-200">
            <button onClick={() => scrollTo('about')} className="block w-full text-left py-2">About</button>
            <button onClick={() => scrollTo('skills')} className="block w-full text-left py-2">Skills</button>
            <button onClick={() => scrollTo('projects')} className="block w-full text-left py-2">Projects</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left py-2">Contact</button>
          </div>
        )}
      </div>
    </header>
  )
}
