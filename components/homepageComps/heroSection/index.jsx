import Image from "next/image"
import HeroImage from "../../../assets/images/hero-image.jpg"
import HeroFormLaptop from "./HeroFormLaptop"
import HeroFormMobile from "./HeroFormMobile"

const HeroSection = () => {
  return (
    <>
      <section className='mx-auto max-w-[1500px]'>
        <HeroFormLaptop />
        <div className='pointer-events-none md:m-5 lg:m-10'>
          <Image className='-z-10 md:rounded-2xl' src={HeroImage} />
        </div>
        <HeroFormMobile />
      </section>
    </>
  )
}

export default HeroSection
