import { AboutScanner } from './about-scanner'
import { BuyAll } from './buy-all'
import { BuyWarning } from './buy-warning'
import { CardInfo } from './card-info'
import { Faq } from './faq'
import { OpenPackage } from './open-package'
import { Privacy } from './privacy'
import { Soon } from './soon'
import { Warning } from './warning'
import { WrongUrl } from './wrong-url'

export const Modals = () => {
  return (
    <>
      <AboutScanner />
      <BuyAll />
      <CardInfo id={0} />
      <CardInfo id={1} />
      <CardInfo id={2} />
      <CardInfo id={3} />
      <Faq />
      <OpenPackage id={0} />
      <OpenPackage id={1} />
      <OpenPackage id={2} />
      <OpenPackage id={3} />
      <Soon />
      <Warning />
      <BuyWarning />
      <WrongUrl />
      <Privacy />
    </>
  )
}
