import Image from "next/image"
import Container from "../../../ui/container"
import LargeTitle from "../../../ui/largeTitle"
import About3Graphic from "../../../assets/images/about-3-graphic.png"
import { points } from "../../../utils/aboutPageUtils/3-pointersData"
import Pointers from "./Pointers"

const WhyHomeFinder = () => {
  return (
    <>
      <Container>
        <div className='flex flex-col items-start justify-center gap-8 p-5 md:flex-row-reverse md:items-center md:gap-6'>
          {/* Content */}
          <div className='md:w-1/2'>
            <p className='mb-2 text-myOrange sm:text-lg'>WHY HOMEFINDER</p>
            <LargeTitle title='Easiest way to find your dream place' />
            {points.map((point) => {
              return <Pointers key={point.text} text={point.text} />
            })}
          </div>
          {/* Image */}
          <div className='md:w-2/3 2xl:w-1/2'>
            <Image src={About3Graphic} alt='big family in home' />
          </div>
        </div>
      </Container>
    </>
  )
}

export default WhyHomeFinder
