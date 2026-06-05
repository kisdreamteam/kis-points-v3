import { PublicHeaderNavLinks } from "./PublicHeaderNavLinks"
import { PublicHeaderLogo } from "./PublicHeaderLogo"

export function PublicHeader() {
  return (
    <div className="flex flex-row w-full justify-end items-end
                    pr-10 sm:pr-15 md:pr-20 lg:pr-25    
                    gap-10 sm:gap-15 md:gap-20 lg:gap-25   ">
      <PublicHeaderNavLinks />
      <PublicHeaderLogo />
    </div>
  )
}