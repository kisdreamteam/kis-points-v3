export function PublicHeroMascot() {
    return (
        <div className="flex
                        w-[clamp(3.5rem,70dvw,40rem)]
                        sm:w-[clamp(3.5rem,35dvw,40rem)]
                        md:w-[clamp(3.5rem,30dvw,40rem)] h-auto
                        bg-brand-cream rounded-4xl drop-shadow-lg">
            <img src="/images/landing/landing-mascot.png"
                alt="Hero Mascot"
                className="w-full h-auto object-cover scale-110 drop-shadow-lg" />
        </div>
    )
}