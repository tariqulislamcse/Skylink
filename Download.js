
export default function Download() {
  const apps = [
    { name: 'Windows', icon: '🪟', link: '#' },
    { name: 'Android', icon: '🤖', link: '#' },
    { name: 'iOS', icon: '🍎', link: '#' },
    { name: 'macOS', icon: '💻', link: '#' },
  ]
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Download SkylinkVPN</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {apps.map(app => (
          <a key={app.name} href={app.link} className="rounded-xl border p-6 hover:shadow-xl transition">
            <div className="text-4xl">{app.icon}</div>
            <p className="mt-2 font-semibold">{app.name}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
