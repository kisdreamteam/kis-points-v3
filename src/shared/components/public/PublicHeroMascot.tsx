export function PublicHeroMascot() {
    return (
        <div className="flex 
                        md:w-2/3 md:h-auto
                        w-9/10 h-auto
                        bg-brand-cream rounded-4xl drop-shadow-lg">
            <img src="/images/landing/landing-mascot.png"
                alt="Hero Mascot"
                className="w-full h-auto object-cover scale-110 drop-shadow-lg" />
        </div>
    )
}