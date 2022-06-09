import Image from "next/image"
import London from "../../../assets/images/London.jpg"
import Manchester from "../../../assets/images/Manchester.jpg"
import Oxford from "../../../assets/images/Oxford.jpg"
import Container from "../../../ui/container"

const FeaturedCitiesSection = () => {
  return (
    <>
      <Container>
        <div className='mx-auto lg:max-w-md xl:max-w-lg'>
          <h2 className='mb-4 ml-2 text-xl font-medium md:text-center md:text-2xl lg:text-3xl xl:mb-8 xl:text-4xl'>
            Featured Properties on the most visited cities
          </h2>
        </div>
        <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 2xl:gap-16'>
          <div className='relative h-[500px] w-full lg:h-[530px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={London}
              alt='London'
              layout='fill'
              objectFit='cover'
              className='rounded-3xl'
            />
            <h3 className='absolute bottom-4 left-5 text-4xl text-white'>
              London
            </h3>
          </div>
          <div className='relative h-[500px] w-full lg:h-[530px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={Manchester}
              alt='Manchester'
              layout='fill'
              objectFit='cover'
              className='rounded-3xl'
            />
            <h3 className='absolute bottom-4 left-5 text-4xl text-white'>
              Manchester
            </h3>
          </div>
          <div className='relative h-[500px] w-full lg:h-[530px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={Oxford}
              alt='Oxford'
              layout='fill'
              objectFit='cover'
              className='rounded-3xl'
            />
            <h3 className='absolute bottom-4 left-5 text-4xl text-white'>
              Oxford
            </h3>
          </div>
        </div>
      </Container>
    </>
  )
}

export default FeaturedCitiesSection
