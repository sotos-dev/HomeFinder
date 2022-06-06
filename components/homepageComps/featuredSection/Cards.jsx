import PlaceholderImage from "../../../assets/images/placeholder.png"
import Image from "next/image"
import { MdOutlineBed } from "react-icons/md"
import { TbSofa } from "react-icons/tb"
import { BiBath } from "react-icons/bi"

const Cards = ({ listing }) => {
  // const changedDateFormat = listing.listing_date.slice(0, 10)

  return (
    <>
      <div className='rounded bg-stone-100 shadow-md shadow-stone-200'>
        {/* Card Image */}
        <Image
          // blurDataURL
          // placeholder='blur'
          src={
            listing.image_645_430_url
              ? listing.image_645_430_url
              : PlaceholderImage
          }
          alt='property'
          width={400}
          layout='responsive'
          height={260}
          className='rounded object-cover'
        />
        {/* Card Content */}
        <div className='px-4 pt-2 pb-4'>
          {/* Pricing */}
          <h3 className='text-2xl font-semibold text-myBlue'>
            {listing.rental_prices.per_month} pcm
          </h3>
          <p className='text-lg font-medium opacity-70'>
            {listing.rental_prices.per_week} pw
          </p>
          {/* Icons */}
          <div className='mt-2  flex items-center justify-start gap-3'>
            <div className='flex items-center justify-center gap-2'>
              <MdOutlineBed size={25} className='text-myBlue' />
              <p>{listing.num_bedrooms}</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <BiBath size={25} className='text-myBlue' />
              <p>{listing.num_bathrooms}</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <TbSofa size={25} className='text-myBlue' />
              <p>{listing.num_recepts}</p>
            </div>
          </div>
          {/* Property Title */}
          <h2 className='mt-3 text-xl font-semibold text-myBlue'>
            {listing.title}
          </h2>
          {/* Property Address */}
          <p className='font-medium opacity-50'>
            {listing.displayable_address}
          </p>
          {/* Listing Date */}
          <p className='mt-3 opacity-50'>Listed on </p>
          <button className='mt-5 rounded-md bg-myBlue py-2 px-8 text-lg font-medium text-white lg:py-3'>
            See property
          </button>
        </div>
      </div>
    </>
  )
}

export default Cards
