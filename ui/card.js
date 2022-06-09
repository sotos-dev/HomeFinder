import millify from "millify"
import Image from "next/image"
import { BiBath } from "react-icons/bi"
import { MdOutlineBed } from "react-icons/md"
import { TbSofa } from "react-icons/tb"
import PlaceholderImage from "../assets/images/placeholder.png"
import Divider from "../ui/divider"

const Card = ({ listing }) => {
  const changedDateFormat = listing.listing_date.slice(0, 10)

  return (
    <>
      <div className='rounded-3xl bg-white shadow-sm'>
        {/* Card Image */}
        <Image
          blurDataURL
          placeholder='blur'
          src={listing.image_url ? listing.image_645_430_url : PlaceholderImage}
          alt='property'
          width={400}
          layout='responsive'
          height={260}
          className='rounded-tl-3xl rounded-tr-3xl object-cover'
        />
        {/* Card Content */}
        <div className='flex flex-col items-start justify-between overflow-hidden px-4 pt-2 pb-4'>
          {/* Pricing */}
          {listing.listing_status === "rent" && (
            <h3 className='text-2xl font-medium  text-myBlue'>
              £
              {millify(listing.rental_prices.per_month, {
                lowercase: true,
              })}{" "}
              pcm
            </h3>
          )}
          {listing.listing_status === "rent" && (
            <p className='mt-1 text-lg font-medium opacity-70'>
              £ {listing.rental_prices.per_week} pw
            </p>
          )}
          {listing.listing_status === "sale" && (
            <h2 className='mt-3 text-2xl font-medium text-myBlue'>
              £ {millify(listing.price)}
            </h2>
          )}
          {/* Property Title */}
          <h2 className='mt-1 mb-1 truncate text-myBlue lg:text-lg xl:text-xl'>
            {listing.title}
          </h2>
          {/* Property Address */}
          <p className='mb-6 max-w-xs truncate opacity-60'>
            {listing.displayable_address}
          </p>
          {/* Icons */}
          <div className='mb-3  flex items-center justify-start gap-3'>
            <div className='flex items-center justify-center gap-2'>
              <MdOutlineBed size={27} className='text-black/60' />
              <p className='text-lg'>{listing.num_bedrooms}</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <BiBath size={27} className='text-black/60' />
              <p className='text-lg'>{listing.num_bathrooms}</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <TbSofa size={27} className='text-black/60' />
              <p className='text-lg'>{listing.num_recepts}</p>
            </div>
          </div>
          <Divider width='w-full' />
          {/* Listing Date */}
          <p className='mt-3 opacity-60'>Listed on {changedDateFormat}</p>
        </div>
      </div>
    </>
  )
}

export default Card
