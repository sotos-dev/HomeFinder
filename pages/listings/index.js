import Image from "next/image"
import Placeholder from "../../assets/images/placeholder.png"
import { fetchApi, baseURL } from "../../utils/fetchApi"
import { featuredProperties } from "../../utils/dummyData"
const Listings = ({ searchResults: { listing } }) => {
  console.log(listing)
  return (
    <>
      <div className='mx-auto flex flex-wrap gap-10 p-5'>
        {listing.map((property) => {
          return (
            <div key={property.listing_id}>
              <Image
                src={property.image_url ? property.image_url : Placeholder}
                alt='ssa'
                width={400}
                height={260}
              />
              <h1>{property.title}</h1>
              <p>{property.num_bedrooms}</p>
              <p>Property type: {property.property_type}</p>
              <p>Price: {property.price}</p>
              <p>
                {property.listing_status === "rent"
                  ? `Price per month: ${property.rental_prices.per_month}`
                  : ""}
              </p>
              <p>
                {property.listing_status === "rent"
                  ? `Price per week: ${property.rental_prices.per_week}`
                  : ""}
              </p>
              <p>{property.post_town}</p>
              <p>{property.property_status}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Listings

export async function getServerSideProps({ query }) {
  const area = query.area || "London"
  const listing_status = query.listing_status || "sale"
  const minimum_beds = query.minimum_beds || "1"
  const maximum_beds = query.maximum_beds || "10"
  const minimum_price = query.minimum_price || "10000"
  const maximum_price = query.maximum_price || "15000000"
  const property_type =
    query.property_type ||
    "flats,farmsland,terraced,semidetached,detached,bungalow,park_home,land"

  const data = await fetchApi(
    `${baseURL}/properties/list?area=${area}&listing_status=${listing_status}&minimum_beds=${minimum_beds}&maximum_beds=${maximum_beds}&minimum_price=${minimum_price}&maximum_price=${maximum_price}&property_type=${property_type}`
  )
  return {
    props: {
      searchResults: data,
    },
  }
}
