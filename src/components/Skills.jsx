const skills = [
  { group: 'Core', items: ['C/C++', 'Python', 'Data Structures', 'Algorithms'] },
  { group: 'Embedded', items: ['STM32', 'ESP32', 'UART/I2C/SPI', 'RTOS'] },
  { group: 'Software', items: ['FastAPI', 'React', 'MongoDB', 'Docker'] },
  { group: 'Tools', items: ['Git', 'KiCad', 'MATLAB', 'NumPy'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Skills & Competencies</h2>
          <span className="text-slate-300 text-sm">Representative list</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-white/10 bg-slate-800/50 p-5">
              <h3 className="text-white font-semibold mb-3">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-200">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
