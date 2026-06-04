import { PublicHeroContent } from '@/shared/components/public/PublicHeroContent'
import { PublicHeroFeatures } from '@/shared/components/public/PublicHeroFeatures'
import { PublicHeroMascot } from '@/shared/components/public/PublicHeroMascot'

export function LandingPage() {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 md:gap-20">

      <div className="flex justify-center md:justify-end items-center md:items-start">
        <PublicHeroMascot />
      </div>

      <div className="flex flex-col w-full md:gap-17 gap-5">
        <div className="flex w-full justify-center md:justify-start items-center md:items-start">
          <PublicHeroContent />
        </div>

        <div className="flex w-full justify-center md:justify-start items-center md:items-start">
          <PublicHeroFeatures />
        </div>
      </div>
    </div>
  )

}
