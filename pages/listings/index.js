import { fetchApi, baseURL } from "../../utils/fetchApi"
import Listings from "../../components/listingspageComps"

const ListingsPage = ({ searchResults }) => {
  return (
    <>
      <Listings
        searchResults={searchResults}
        numOfProperties={searchResults.listing}
      />
    </>
  )
}

export default ListingsPage

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
  const page_size = "20"
  const order_by = query.order_by || "age"
  const ordering = query.ordering || "ascending"

  const data = await fetchApi(
    `${baseURL}/properties/list?area=${area}&listing_status=${listing_status}&minimum_beds=${minimum_beds}&maximum_beds=${maximum_beds}&minimum_price=${minimum_price}&maximum_price=${maximum_price}&property_type=${property_type}&page_size=${page_size}&order_by=${order_by}&ordering=${ordering}`
  )
  return {
    props: {
      searchResults: data,
    },
  }
}
