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
      <Container>
        <div className='flex flex-col flex-wrap items-center justify-center gap-10 bg-stone-100 p-10 sm:flex-row sm:gap-9 lg:justify-around xl:gap-16'>
          <Image src={Realtor5} alt='Some realtor logo' />
          <Image src={Realtor2} alt='Some realtor logo' />
          <Image src={Realtor3} alt='Some realtor logo' />
          <Image src={Realtor4} alt='Some realtor logo' />
          <Image src={Realtor1} alt='Some realtor logo' />
        </div>
      </Container>
    </>
  )
}

export default BrandsSection
