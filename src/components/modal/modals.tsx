import { AboutScanner } from './about-scanner'
import { BuyAll } from './buy-all'
import { BuyWarning } from './buy-warning'
import { CardInfo } from './card-info'
import { Contact } from './contact'
import { Faq } from './faq'
import { OpenPackage } from './open-package'
// import { Queue } from './queue'
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
      <Contact />
      <Faq />
      <OpenPackage id={0} />
      <OpenPackage id={1} />
      <OpenPackage id={2} />
      <OpenPackage id={3} />
      {/* <Queue /> */}
      <Soon />
      <Warning />
      <BuyWarning />
      <WrongUrl />
    </>
  )
}
