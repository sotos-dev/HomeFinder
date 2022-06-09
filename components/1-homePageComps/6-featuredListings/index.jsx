import Link from "next/link"
import Card from "../../../ui/card"
import Container from "../../../ui/container"
import LargeTitle from "../../../ui/largeTitle"

const FeaturedListings = ({ listings: { listing } }) => {
  return (
    <>
      <div className='bg-stone-100'>
        <Container>
          {/* Content */}
          <div className=''></div>
          <LargeTitle title='Featured Listings' />
          {/* Featured Cards */}
          <div className='flex snap-x gap-5 overflow-x-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {listing.map((listing) => {
              return (
                <Link href='/featured' passHref>
                  <a className=''>
                    <Card listing={listing} />
                  </a>
                </Link>
              )
            })}
          </div>
        </Container>
      </div>
    </>
  )
}

export default FeaturedListings
