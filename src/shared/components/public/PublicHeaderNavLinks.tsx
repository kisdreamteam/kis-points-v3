import { Link } from 'react-router-dom'

export function PublicHeaderNavLinks() {
    return (
        <div className="flex flex-row 
            text-[clamp(1rem,3.0vw,2.75rem)]
            gap-4 sm:gap-6 md:gap-8 lg:gap-10
            text-lg text-white font-spartan font-bold">
            <Link to="/auth/login" className="hover:text-brand-pink transition-colors duration-300">Login</Link>
            <Link to="/auth/signup" className="hover:text-brand-pink transition-colors duration-300">Signup</Link>
        </div>
    )
}