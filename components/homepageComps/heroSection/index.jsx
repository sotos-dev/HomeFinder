import Image from "next/image"
import HeroImage from "../../../assets/images/hero-image.jpg"
import HeroFormLaptop from "./HeroFormLaptop"
import HeroFormMobile from "./HeroFormMobile"
import Container from "../../../ui/container"

const HeroSection = () => {
  return (
    <>
      <Container>
        {/* <section className='mx-auto max-w-[1500px]'> */}
        <HeroFormLaptop />
        <div className='pointer-events-none'>
          <Image className='-z-10 md:rounded-2xl' src={HeroImage} priority />
        </div>
        <HeroFormMobile />
        {/* </section> */}
      </Container>
    </>
  )
}

export default HeroSection
