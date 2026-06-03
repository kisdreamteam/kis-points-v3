import { PublicHeaderNavLinks } from "./PublicHeaderNavLinks"
import { PublicHeaderLogo } from "./PublicHeaderLogo"

export function PublicHeader() {
  return (
    <div className="flex flex-row w-full justify-end items-end
                    lg:pr-20 md:pr-15 sm:pr-10 pr-5 
                    lg:gap-20 md:gap-15 sm:gap-10 gap-5">
      <PublicHeaderNavLinks />
      <PublicHeaderLogo />
    </div>
  )
}