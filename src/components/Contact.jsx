import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message')
    }

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Let's build something</h2>
            <p className="text-slate-300">Want to collaborate or discuss an opportunity? Send a message and I'll get back to you.</p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-slate-800/50 p-6 space-y-4">
            <input name="name" placeholder="Full name" className="w-full rounded-md bg-slate-900/60 text-white placeholder-slate-400 border border-white/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" name="email" placeholder="Email" className="w-full rounded-md bg-slate-900/60 text-white placeholder-slate-400 border border-white/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input name="subject" placeholder="Subject" className="w-full rounded-md bg-slate-900/60 text-white placeholder-slate-400 border border-white/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <textarea name="message" placeholder="Message" rows={5} className="w-full rounded-md bg-slate-900/60 text-white placeholder-slate-400 border border-white/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <div className="flex items-center gap-3">
              <button disabled={loading} className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white transition-colors">{loading ? 'Sending...' : 'Send Message'}</button>
              {status && (
                status.ok ? (
                  <span className="text-green-400 text-sm">Sent! Reference: {status.id}</span>
                ) : (
                  <span className="text-red-400 text-sm">{status.error || 'Something went wrong'}</span>
                )
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
