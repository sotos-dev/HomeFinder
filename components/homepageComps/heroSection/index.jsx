import { useState, useEffect } from "react"
import HeroFormLaptop from "./HeroFormLaptop"
import HeroFormMobile from "./HeroFormMobile"

const HeroSection = () => {
  const [showHeroFormLaptop, setShowHeroFormLaptop] = useState(true)

  useEffect(() => {
    window.innerWidth > 1023
      ? setShowHeroFormLaptop(true)
      : setShowHeroFormLaptop(false)
  }, [])

  return (
    <>
      <section>
        {showHeroFormLaptop ? <HeroFormLaptop /> : <HeroFormMobile />}
      </section>
    </>
  )
}

export default HeroSection
