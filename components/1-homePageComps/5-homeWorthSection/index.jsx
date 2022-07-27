import Image from "next/image"
import HomeWorthImage from "../../../assets/images/breaker-image.jpg"
import Container from "../../../ui/container"
import { HiArrowNarrowRight } from "react-icons/hi"
import BreakerIcon from "../../../assets/images/breaker-Icon.svg"
import MediumTitle from "../../../ui/mediumTitle"
import Paragraph from "../../../ui/paragraph"
import { homeWorthText } from "../../../utils/homePageUtils/5-homeWorthSectionData"
import Link from "next/link"

const HomeWorthSection = () => {
  return (
    <>
      <Container>
        {/* Wrapper */}
        <div className='md:items-around flex flex-col items-start justify-between gap-10 rounded-lg bg-myBlue p-5 md:flex-row-reverse md:items-center md:justify-around xl:p-7 2xl:gap-20 2xl:p-10'>
          {/* Content */}
          <div className='max-w-lg text-white md:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl'>
            <MediumTitle title='See what homes around your area are worth' />
            <Paragraph text={homeWorthText} />
            <Link href='/listings' passHref>
              <a className='flex max-w-[270px] items-center gap-5 rounded-lg bg-myOrange py-4 px-10'>
                Browse properties
                <HiArrowNarrowRight size={20} />
              </a>
            </Link>
            <div className='hidden md:block'>
              <Image src={BreakerIcon} alt='long generic icon' />
            </div>
          </div>
          {/* Image */}
          <div className='relative h-96 w-full lg:w-1/2'>
            <Image
              src={HomeWorthImage}
              alt='couple with dog in bedroom looking happy'
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
              placeholder='blur'
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomeWorthSection
