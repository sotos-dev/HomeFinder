import Image from "next/image"
import Container from "../../../ui/container"
import HouseEntrance from "../../../assets/images/house-entrance.jpg"
import { IconAreaData } from "../../../utils/homePageUtils/4-iconAreaData"
import { HiOutlineMail } from "react-icons/hi"
import { ImCalculator } from "react-icons/im"
import LargeTitle from "../../../ui/largeTitle"
import IconArea from "./IconArea"
import Paragraph from "../../../ui/paragraph"

const FindSuitableHomeSection = () => {
  return (
    <>
      <Container>
        {/* Wrapper */}
        <div className='flex flex-col items-center justify-between gap-10 md:flex-row lg:gap-14 xl:gap-20 2xl:gap-28'>
          {/* Content */}
          <div className='w-full lg:max-w-2xl'>
            <LargeTitle title='We assist you in finding the suitable home for you' />
            <Paragraph text='It’s not easy, but it’s not impossible either. Get onto the property ladder faster with our expert advice and insider tips.' />
            {/* The line */}
            <div className='2xl:m2-8 my-7 h-[1px] w-full max-w-xl bg-black lg:max-w-2xl 2xl:mb-12'></div>
            {/* Under the line */}
            <div className='flex flex-col gap-7 md:flex-row md:gap-3'>
              {IconAreaData.map((icon) => {
                return (
                  <IconArea
                    title={icon.title}
                    paragraph={icon.paragraph}
                    icon={icon.icon}
                  />
                )
              })}
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
