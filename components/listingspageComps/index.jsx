import ListingsArea from "./ListingsArea"
import ListingsMobileForm from "./ListingsMobileForm"
import ListingsLaptopForm from "./ListingsLaptopForm"

const Listings = ({ searchResults: { listing }, numOfProperties }) => {
  return (
    <>
      {/* Tablet Filtering Form */}
      <ListingsLaptopForm numOfProperties={numOfProperties} />
      {/* Listings area */}
      <ListingsArea listing={listing} numOfProperties={numOfProperties} />
      {/* Mobile Filtering Form */}
      <ListingsMobileForm numOfProperties={numOfProperties} />
    </>
  )
}

export default Listings
