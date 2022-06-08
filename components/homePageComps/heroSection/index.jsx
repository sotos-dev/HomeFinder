import Image from "next/image"
// import HeroImage from "../../../assets/images/hero-image.jpg"
import HeroImage from "../../../assets/images/hero-photo.jpg"
import HeroFormLaptop from "./HeroFormLaptop"
import HeroFormMobile from "./HeroFormMobile"

const HeroSection = () => {
  return (
    <>
      <section className='mx-auto max-w-[1700px]  md:px-7 lg:px-10'>
        <HeroFormLaptop />
        <div className='pointer-events-none md:mt-10'>
          <Image priority className='-z-10 md:rounded-2xl' src={HeroImage} />
        </div>
        <HeroFormMobile />
      </section>
    </>
  )
}

export default HeroSection
