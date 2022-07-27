import Image from "next/image"
import Link from "next/link"
import { HiArrowNarrowRight } from "react-icons/hi"
import Container from "../../../ui/container"
import LargeTitle from "../../../ui/largeTitle"
import Paragraph from "../../../ui/paragraph"
import AboutHeroPHoto from "../../../assets/images/about-hero-photo.jpg"

const AboutHeroSection = () => {
  return (
    <>
      <Container>
        <div className='relative flex flex-col-reverse items-start justify-around gap-5 rounded-lg bg-myBlue p-5 text-white md:flex-row md:items-center md:p-8 lg:p-12 xl:p-16'>
          {/* Content */}
          <div className='md:w-1/2 lg:w-2/3'>
            <h1 className='mb-2 text-2xl font-semibold md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
              Buy, Rent or Sell
            </h1>
            <h3 className='mb-5 font-medium sm:text-lg lg:text-xl xl:mt-5 xl:text-2xl 2xl:mt-6 2xl:text-3xl'>
              Real Estate is Very Easy with HomeFinder
            </h3>
            <p className='lg:max-w-md lg:text-lg xl:mt-10 xl:max-w-lg 2xl:my-10 2xl:text-xl'>
              We are a real estate marketplace that will help you to fnd the
              best home that you dream.
            </p>
            <Link href='/listings' passHref>
              <a className='mt-5 flex max-w-[270px] items-center gap-5 rounded-lg bg-myOrange py-4 px-10 text-white lg:max-w-[300px] lg:text-lg'>
                Browse properties
                <HiArrowNarrowRight size={20} />
              </a>
            </Link>
          </div>
          {/* Image */}
          <div className='md:w-2/3 lg:-mb-24 xl:-mb-28'>
            <Image
              src={AboutHeroPHoto}
              alt='house'
              className='rounded-lg'
              placeholder='blur'
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default AboutHeroSection
