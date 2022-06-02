import HeroImage from "../../assets/images/hero-image.jpg"
import Image from "next/image"
import { MdOutlineBed } from "react-icons/md"
import { TbSofa } from "react-icons/tb"
import { BiBath } from "react-icons/bi"

const Card = () => {
  return (
    <>
      <div className='rounded bg-gray-200 shadow-lg'>
        {/* Card Image */}
        <Image src={HeroImage} alt='house' className='rounded' />
        {/* Card Content */}
        <div className='px-4 pt-2 pb-4'>
          {/* Pricing */}
          <h3 className='text-2xl font-semibold text-myBlue'>£1,480 pcm</h3>
          <p className='text-lg font-medium opacity-70'>£330 pw</p>
          {/* Icons */}
          <div className='mt-2  flex items-center justify-start gap-3'>
            <div className='flex items-center justify-center gap-2'>
              <MdOutlineBed size={25} className='text-myBlue' />
              <p>1</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <BiBath size={25} className='text-myBlue' />
              <p>1</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <TbSofa size={25} className='text-myBlue' />
              <p>1</p>
            </div>
          </div>
          {/* Property Title */}
          <h2 className='mt-3 text-xl font-semibold text-myBlue'>
            2 bed flat to rent
          </h2>
          {/* Property Address */}
          <p className='font-medium opacity-50'>
            Gubyon Avenue, Herne Hill SE24
          </p>
          {/* Listing Date */}
          <p className='mt-3 opacity-50'>Listed on 2nd Jun 2022</p>
          <button className='mt-5 rounded bg-myBlue py-2 px-8 text-lg font-medium text-white'>
            See property
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
