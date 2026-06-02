import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 py-6 md:grid-cols-2">
      <div className="w-full space-y-4">
        {/* Public placeholder page for routing and layout checks. */}
        <h1 className="text-2xl font-semibold text-brand-purple md:text-3xl">Landing Page</h1>
        <p className="text-slate-600">This is the Landing Page. It should render inside PublicLayout.</p>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link className="text-brand-purple underline" to="/auth/login">
            Go to Login
          </Link>
          <Link className="text-brand-purple underline" to="/auth/signup">
            Go to Signup
          </Link>
          <Link className="text-brand-purple underline" to="/dashboard">
            Go to Dashboard
          </Link>
        </nav>
      </div>
      <div className="w-full">
        <p className="text-slate-600">Hero column placeholder for future landing content.</p>
      </div>
    </div>
  )
}
