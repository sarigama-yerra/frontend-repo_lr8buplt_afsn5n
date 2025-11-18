export default function Hero() {
  return (
    <section id="top" className="relative pt-28 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs tracking-widest uppercase text-blue-300/80 mb-4">Engineering Student Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Build. Analyze. Innovate.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I am an engineering student passionate about turning ideas into reliable, well-crafted systems—across hardware and software. Here's a curated selection of my work and capabilities.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-colors">See Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/10 transition-colors">Get in Touch</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-white/10 backdrop-blur overflow-hidden">
              <div className="w-full h-full grid grid-cols-3 gap-2 p-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-lg bg-slate-800/50 border border-white/10" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-slate-900/80 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-200 shadow-xl">
              Available for internships • Summer '25
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
