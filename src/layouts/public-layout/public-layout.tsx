import { Outlet } from 'react-router-dom'

export function PublicLayout() {
  return (
    // Layout wrapper
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header placeholder */}
      <header className="border-b border-slate-200 px-6 py-4">
        <p className="text-sm font-medium text-slate-600">Public Header Placeholder</p>
      </header>

      {/* Content area with nested routes */}
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="mb-4 text-sm font-medium text-slate-500">Public Content Shell</p>
          <Outlet />
        </section>
      </main>

      {/* Footer placeholder */}
      <footer className="border-t border-slate-200 px-6 py-4">
        <p className="text-sm font-medium text-slate-600">Public Footer Placeholder</p>
      </footer>
    </div>
  )
}
