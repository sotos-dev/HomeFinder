import Image from "next/image"
import Container from "../../../ui/container"
import HouseEntrance from "../../../assets/images/house-entrance.jpg"
import { HiOutlineMail } from "react-icons/hi"
import { ImCalculator } from "react-icons/im"

const FindSuitableHomeSection = () => {
  return (
    <>
      <Container>
        {/* Wrapper */}
        <div className='flex flex-col items-center justify-between gap-10 md:flex-row lg:gap-14 xl:gap-20 2xl:gap-28'>
          {/* Content */}
          <div className='w-full lg:max-w-2xl'>
            <h3 className='mb-2 max-w-md text-lg font-medium text-myBlue sm:text-2xl lg:mb-4 lg:text-3xl xl:max-w-xl xl:text-4xl '>
              We assist you in finding the suitable home for you
            </h3>
            <p className='mb-3 max-w-md sm:max-w-lg lg:text-lg'>
              It’s not easy, but it’s not impossible either. Get onto the
              property ladder faster with our expert advice and insider tips.
            </p>
            {/* The line */}
            <div className='2xl:m2-8 my-7 h-[1px] w-full max-w-xl bg-black lg:max-w-2xl 2xl:mb-12'></div>
            {/* Under the line */}
            <div className='flex flex-col gap-7 md:flex-row md:gap-3'>
              <div>
                <div className='flex items-center justify-start gap-3'>
                  <div className='rounded-md bg-myBlue p-2'>
                    <HiOutlineMail className='text-white' size={20} />
                  </div>
                  <h3 className='text-lg font-medium text-myBlue lg:text-xl'>
                    Keep track of your estimate
                  </h3>
                </div>
                <p className='mt-3 lg:text-lg'>
                  Get automatic email updates when your property estimate
                  changes.
                </p>
              </div>
              <div>
                <div>
                  <div className='flex items-center justify-start gap-3'>
                    <div className='rounded-md bg-myBlue p-2'>
                      <ImCalculator className='text-white' size={20} />
                    </div>
                    <h3 className='text-lg font-medium text-myBlue lg:text-xl'>
                      Calculate your payments
                    </h3>
                  </div>
                  <p className='mt-3 lg:text-lg'>
                    Use our remortgage calculator to see how much you could
                    save.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className='relative h-96 w-full md:w-[620px] lg:h-[400px] lg:w-[1000px] xl:h-[450px] 2xl:h-[600px] 2xl:w-[700px]'>
            <Image
              src={HouseEntrance}
              alt='house entrance'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default FindSuitableHomeSection
