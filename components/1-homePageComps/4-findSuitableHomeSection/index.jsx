import Image from "next/image"
import Container from "../../../ui/container"
import HouseEntrance from "../../../assets/images/house-entrance.jpg"
import { HiOutlineMail } from "react-icons/hi"
import { MdCalculate } from "react-icons/md"

const FindSuitableHomeSection = () => {
  return (
    <>
      <Container>
        {/* Wrapper */}
        <div className='flex flex-col items-center justify-between'>
          {/* Content */}
          <div className='w-full'>
            <h3 className='mt-16 mb-2 text-lg font-medium text-myBlue'>
              We assist you in finding the suitable home for you
            </h3>
            <p>
              It’s not easy, but it’s not impossible either. Get onto the
              property ladder faster with our expert advice and insider tips.
            </p>
            {/* The line */}
            <div className='h-1 w-full bg-black'></div>
            {/* Under the line */}
            <div>
              <div>
                <div>
                  <div className='bg-myBlue'>
                    <HiOutlineMail className='text-white' />
                  </div>
                  <h3>Keep track of your estimate</h3>
                </div>
                <p>
                  Get automatic email updates when your property estimate
                  changes.
                </p>
              </div>
              <div>
                <div>
                  <div>
                    <div className='bg-myBlue'>
                      <MdCalculate className='text-white' />
                    </div>
                    <h3>Calculate your payments</h3>
                  </div>
                  <p>
                    Use our remortgage calculator to see how much you could
                    save.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className='w-full'>
            <Image src={HouseEntrance} alt='house' />
          </div>
        </div>
      </Container>
    </>
  )
}

export default FindSuitableHomeSection
