import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    // Layout wrapper
    <div className="min-h-screen bg-slate-50">
      {/* Centered content area */}
      <main className="mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-6 py-10">
        <section className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm font-medium text-slate-500">Auth Layout Shell</p>

          {/* Nested route content */}
          <Outlet />
        </section>
      </main>
    </div>
  )
}
