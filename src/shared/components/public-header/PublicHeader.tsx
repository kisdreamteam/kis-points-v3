import { PublicHeaderNavLinks } from "./PublicHeaderNavLinks"
import { PublicHeaderLogo } from "./PublicHeaderLogo"

export function PublicHeader() {
  return (
    <div className="flex flex-row w-full lg:justify-end md:justify-center justify-start
                    lg:pr-12 md:pr-10 pr-8 
                    lg:gap-12 md:gap-10 gap-30">
            <PublicHeaderNavLinks />
            <PublicHeaderLogo />

    </div>
  )
}