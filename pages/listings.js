import Image from "next/image"
import { fetchApi, baseURL } from "../utils/fetchApi"

const Listings = ({ searchResults: { listing } }) => {
  console.log(listing)
  return (
    <>
      {listing.map((property) => {
        return (
          <>
            <h1>{property.title}</h1>
            <p>{property.price}</p>
            <p>{property.post_town}</p>
            <p>{property.property_status}</p>
            <Image
              src={property.image_url}
              alt='ssa'
              width={400}
              height={260}
            />
          </>
        )
      })}
    </>
  )
}

export default Listings

export async function getServerSideProps({ query }) {
  const area = query.area || "London"
  const listing_status = query.listing_status || "sale"
  const maximum_beds = query.maximum_beds || "10"
  const maximum_price = query.maximum_price || "15000000"
  const property_type =
    query.property_type ||
    "flats,farmsland,terraced,semidetached,detached,bungalow,park_home,land"

  const data = await fetchApi(
    `${baseURL}/properties/list?area=${area}&listing_status=${listing_status}&maximum_beds=${maximum_beds}&maximum_price=${maximum_price}&property_type=${property_type}`
  )
  return {
    props: {
      searchResults: data,
    },
  }
}
