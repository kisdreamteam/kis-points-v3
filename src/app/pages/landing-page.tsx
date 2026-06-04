import { PublicHeroContent } from '@/shared/components/public/PublicHeroContent'
import { PublicHeroFeatures } from '@/shared/components/public/PublicHeroFeatures'
import { PublicHeroMascot } from '@/shared/components/public/PublicHeroMascot'

export function LandingPage() {
  return (
    
    <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-10 md:gap-20">
      
      <div className="flex justify-center md:justify-end items-center md:items-start">
        <PublicHeroMascot />
      </div>

      <div className="flex flex-col items-center md:items-center justify-start md:justify-start w-full md:w-11/20 md:gap-17 gap-10">
        <div className="flex w-full">
          <PublicHeroContent />
        </div>

        <div className="flex w-full">
          <PublicHeroFeatures />
        </div>
      </div>
    </div>
  )

}
