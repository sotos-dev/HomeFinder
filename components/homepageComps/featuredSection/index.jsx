import Container from "../../../ui/container"
import Cards from "./Cards"

const Featured = ({
  featuredProperties: {
    featuredProperties: { listing },
  },
}) => {
  console.log(listing)
  return (
    <>
      <Container>
        <h2 className='mb-3 text-xl font-medium lg:text-2xl'>
          Featured properties
        </h2>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-5 md:gap-x-8 lg:grid-cols-3 xl:gap-x-10'>
          {listing.map((listing) => {
            return <Cards listing={listing} />
          })}
        </div>
      </Container>
    </>
  )
}

export default Featured
