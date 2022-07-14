import Image from "next/image"
import { BiBath } from "react-icons/bi"
import { MdOutlineBed } from "react-icons/md"
import { TbSofa } from "react-icons/tb"
import PlaceholderImage from "../../assets/images/placeholder.png"
import millify from "millify"

const ListingsCard = ({ listing }) => {
  const changedDateFormat = listing.listing_date.slice(0, 10)

  return (
    <>
      <div className='rounded bg-stone-100 shadow-md shadow-stone-200'>
        {/* Card Image */}
        <Image
          blurDataURL
          placeholder='blur'
          src={listing.image_url ? listing.image_645_430_url : PlaceholderImage}
          alt='property'
          width={400}
          layout='responsive'
          height={260}
          className='rounded object-cover'
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
            <h2 className='mt-3 mb-4 text-2xl font-medium text-myBlue'>
              £ {millify(listing.price)}
            </h2>
          )}
          {/* Icons */}
          <div className='mt-0  flex items-center justify-start gap-3'>
            <div className='flex items-center justify-center gap-2'>
              <MdOutlineBed size={30} className='text-myBlue' />
              <p className='text-xl'>{listing.num_bedrooms}</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <BiBath size={30} className='text-myBlue' />
              <p className='text-xl'>{listing.num_bathrooms}</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <TbSofa size={30} className='text-myBlue' />
              <p className='text-xl'>{listing.num_recepts}</p>
            </div>
          </div>
          {/* Property Title */}
          <h2 className='mt-3 mb-1 font-semibold text-myBlue lg:text-lg xl:text-xl'>
            {listing.title}
          </h2>
          {/* Property Address */}
          <p className='max-w-xs truncate font-medium opacity-70'>
            {listing.displayable_address}
          </p>
          {/* Listing Date */}
          <p className='mt-3 opacity-60'>Listed on {changedDateFormat}</p>
          <button className='mt-3 rounded-md bg-myBlue p-2 px-8 text-lg font-medium text-white lg:py-3'>
            Available property
          </button>
        </div>
      </div>
    </>
  )
}

export default ListingsCard
