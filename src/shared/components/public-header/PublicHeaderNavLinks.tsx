import { Link } from 'react-router-dom'

export function PublicHeaderNavLinks() {
    return (
        <div className="flex flex-row 
             lg:gap-8 lg:text-4xl lg:mb-3
             md:gap-6 md:text-2xl md:mb-2 
             sm:gap-6 sm:text-xl sm:mb-1
             gap-4 text-xl mb-1
             text-white      
             font-bold">
            <Link to="/auth/login" className="hover:text-brand-pink transition-colors duration-300">Login</Link>
            <Link to="/auth/signup" className="hover:text-brand-pink transition-colors duration-300">Signup</Link>
        </div>
    )
  }