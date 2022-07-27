import Image from "next/image"
import Container from "../../../ui/container"
import LargeTitle from "../../../ui/largeTitle"
import About2Graphic from "../../../assets/images/about-2-graphic.png"
import Paragraph from "../../../ui/paragraph"
// import AboutIcon from "../../../assets/images/about-icon.png"

const WhoWeAreSection = () => {
  return (
    <>
      <Container>
        <div className='flex flex-col items-start justify-center gap-3 sm:items-center md:flex-row md:items-center'>
          <div className='md:w-1/2'>
            <p className='mb-2 text-myOrange sm:text-lg'>WHO WE ARE</p>
            <LargeTitle title='We provide Buy, Rent & Sell Property with trusted developers ' />
            <Paragraph
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              nulla nam placerat congue neque condimentum duis. At et nisl, in
              enim enim. Condimentum purus nascetur eros, ut massa.Lorem ipsum. placerat congue neque condimentum duis. At et nisl, in
              enim enim. Condimentum purus nascetur eros, ut massa.Lorem ipsum.'
            />
          </div>
          <div className='md:w-1/2'>
            <Image
              src={About2Graphic}
              alt='big family in home'
              placeholder='blur'
            />
          </div>
        </div>
        {/* <div className='hidden w-full md:block'>
          <Image src={AboutIcon} alt='about icon' />
        </div> */}
      </Container>
    </>
  )
}

export default WhoWeAreSection
