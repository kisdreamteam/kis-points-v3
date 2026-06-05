import { PublicHeroContent } from '@/shared/components/public/PublicHeroContent'
import { PublicHeroFeatures } from '@/shared/components/public/PublicHeroFeatures'
import { PublicHeroMascot } from '@/shared/components/public/PublicHeroMascot'

export function LandingPage() {
  return (

    
    <div className="grid 
                    grid-cols-1 
                    sm:grid-cols-2
                    md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] 
                    gap-5 sm:gap-10 md:gap-[clamp(1.25rem,4vw,5rem)]
                    ">

      <div className="flex
                      justify-center sm:justify-center md:justify-center lg:justify-end 
                      items-end sm:items-center md:items-center lg:items-start">
        <PublicHeroMascot />
      </div>

      <div className="flex flex-col 
                      gap-5 sm:gap-5 md:gap-[clamp(0.5rem,1vw,5rem)]
                      ">
        <div className="flex">
          <PublicHeroContent />
        </div>

        <div className="flex">
          <PublicHeroFeatures />
        </div>
      </div>
    </div>
  )

}
