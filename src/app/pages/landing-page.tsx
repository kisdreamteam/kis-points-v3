import { PublicHeroContent } from '@/shared/components/public/PublicHeroContent'
import { PublicHeroFeatures } from '@/shared/components/public/PublicHeroFeatures'

export function LandingPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <PublicHeroContent />
      </div>
      <div className="flex justify-center items-center">
        <PublicHeroFeatures />
      </div>
    </div>
  )

}
