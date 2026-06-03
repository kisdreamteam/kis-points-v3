export function PublicHeroMascot() {
    return (
        <div className="flex 
                        md:w-150 md:h-150
                        w-75 h-75
                        bg-brand-cream rounded-4xl drop-shadow-lg">
            <img src="/images/landing/landing-mascot.png"
                alt="Hero Mascot"
                className="md:w-full h-auto object-cover scale-110 drop-shadow-lg" />
        </div>
    )
}