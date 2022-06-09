import Image from "next/image"
import Container from "../../../ui/container"
import Realtor1 from "../../../assets/images/Logos/realtor-1.svg"
import Realtor2 from "../../../assets/images/Logos/realtor-2.svg"
import Realtor3 from "../../../assets/images/Logos/realtor-3.svg"
import Realtor4 from "../../../assets/images/Logos/realtor-4.svg"
import Realtor5 from "../../../assets/images/Logos/realtor-5.svg"

const BrandsSection = () => {
  return (
    <>
      <div className='mt-10 bg-stone-100 sm:mb-7 sm:mt-14'>
        <Container>
          <div className='-my-10 flex w-full snap-x items-center justify-center gap-x-14 overflow-x-auto p-10 sm:flex-row sm:flex-wrap  sm:gap-9 lg:justify-around  xl:gap-16'>
            <div className='flex-shrink-0 snap-center'>
              <Image src={Realtor5} alt='Some realtor logo' />
            </div>
            <div className='flex-shrink-0 snap-center'>
              <Image src={Realtor2} alt='Some realtor logo' />
            </div>
            <div className='flex-shrink-0 snap-center'>
              <Image src={Realtor3} alt='Some realtor logo' />
            </div>
            <div className='flex-shrink-0 snap-center'>
              <Image src={Realtor4} alt='Some realtor logo' />
            </div>
            <div className='flex-shrink-0 snap-center'>
              <Image src={Realtor1} alt='Some realtor logo' />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default BrandsSection
