import Placeholder from "../../assets/images/placeholder.png"
import { fetchApi, baseURL } from "../../utils/fetchApi"
import ListingsArea from "../../components/listingspageComps/ListingsArea"
import ListingsMobileForm from "../../components/listingspageComps/ListingsMobileForm"

const Listings = () => {
  // { searchResults: { listing } }
  return (
    <>
      {/* Listings area */}
      <ListingsArea />
      {/* Mobile filtering form */}
      <ListingsMobileForm />
    </>
  )
}

export default Listings

// export async function getServerSideProps({ query }) {
//   const area = query.area || "London"
//   const listing_status = query.listing_status || "sale"
//   const minimum_beds = query.minimum_beds || "1"
//   const maximum_beds = query.maximum_beds || "10"
//   const minimum_price = query.minimum_price || "10000"
//   const maximum_price = query.maximum_price || "15000000"
//   const property_type =
//     query.property_type ||
//     "flats,farmsland,terraced,semidetached,detached,bungalow,park_home,land"

//   const data = await fetchApi(
//     `${baseURL}/properties/list?area=${area}&listing_status=${listing_status}&minimum_beds=${minimum_beds}&maximum_beds=${maximum_beds}&minimum_price=${minimum_price}&maximum_price=${maximum_price}&property_type=${property_type}`
//   )
//   return {
//     props: {
//       searchResults: data,
//     },
//   }
// }
