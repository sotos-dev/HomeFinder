import Container from "../../../ui/container"
import Card from "../../../ui/card"

const FeaturedSection = ({ searchResults: { listing }, numOfProperties }) => {
  return (
    <>
      <div className='bg-stone-100'>
        <Container>
          <div className='grid grid-cols-1 gap-5  sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16 xl:grid-cols-4'>
            {listing.map((listing) => {
              return <Card listing={listing} />
            })}
          </div>
        </Container>
      </div>
    </>
  )
}

export default FeaturedSection
