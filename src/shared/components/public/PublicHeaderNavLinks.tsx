import { Link } from 'react-router-dom'

export function PublicHeaderNavLinks() {
    return (
        <div className="flex flex-row 
             lg:gap-12 lg:text-5xl lg:mb-3
             md:gap-10 md:text-3xl md:mb-2 
             sm:gap-8 sm:text-2xl sm:mb-1
             gap-4 text-lg mb-1
             text-white font-spartan     
             font-bold">
            <Link to="/auth/login" className="hover:text-brand-pink transition-colors duration-300">Login</Link>
            <Link to="/auth/signup" className="hover:text-brand-pink transition-colors duration-300">Signup</Link>
        </div>
    )
}