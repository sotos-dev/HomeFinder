import Image from "next/image"
import HeroImage from "../../../assets/images/featured-hero.jpg"

const HeroSection = () => {
  return (
    <>
      <div className='relative flex h-64 items-center justify-center sm:h-80 md:h-96'>
        <div className='-z-10'>
          <Image
            src={HeroImage}
            alt='London phone booth with people passing by'
            priority
            layout='fill'
            objectFit='cover'
            placeholder='blur'
          />
        </div>
        <h1 className='mx-5 max-w-sm text-center text-xl text-white sm:text-2xl md:max-w-lg md:text-3xl lg:max-w-xl lg:text-4xl xl:max-w-3xl xl:text-5xl'>
          Checkout some of the{" "}
          <span className='underline underline-offset-2'>best</span> properties
          in the heart of London
        </h1>
      </div>
    </>
  )
}

export default HeroSection
