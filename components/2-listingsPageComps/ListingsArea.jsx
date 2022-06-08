import ListingsCard from "./ListingsCard"
import Container from "../../ui/container"
import NoResults from "../../assets/images/no-results.jpg"
import Image from "next/image"

const ListingsArea = ({ listing, numOfProperties }) => {
  return (
    <>
      <Container>
        {/* Grid - Listing Cards */}
        {numOfProperties.length > 0 ? (
          <ListingsExist listing={listing} />
        ) : (
          <NoListings />
        )}
      </Container>
    </>
  )
}

export default ListingsArea

const ListingsExist = ({ listing }) => {
  return (
    <div className='mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-0 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16 xl:grid-cols-4'>
      {listing.map((property) => {
        return <ListingsCard key={property.listing_id} listing={property} />
      })}
    </div>
  )
}

const NoListings = () => {
  return (
    <>
      <div className='mt-10 flex flex-col items-center justify-center'>
        <h1 className='text-xl'>No results found, give in another spin!</h1>
        <Image
          className='mx-auto'
          src={NoResults}
          alt='no results'
          width={300}
          height={300}
        />
      </div>
    </>
  )
}
