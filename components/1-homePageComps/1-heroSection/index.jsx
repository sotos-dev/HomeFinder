import Image from "next/image"
import HeroImage from "../../../assets/images/hero-photo.jpg"
import HeroFormLaptop from "./HeroFormLaptop"
import HeroFormMobile from "./HeroFormMobile"

const HeroSection = () => {
  return (
    <>
      <section className='mx-auto max-w-[1700px]  md:px-7 lg:mt-14 lg:px-10'>
        <HeroFormLaptop />
        <div className='pointer-events-none md:mt-10'>
          <Image
            priority
            className='-z-10 md:rounded-2xl'
            src={HeroImage}
            alt='UK homes'
          />
        </div>
        <HeroFormMobile />
      </section>
    </>
  )
}

export default HeroSection
