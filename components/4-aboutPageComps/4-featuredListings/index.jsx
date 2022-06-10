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
          <LargeTitle title='Featured Listings in London' />
          {/* Featured Cards */}
          <div className='flex w-full snap-x gap-5 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4'>
            {listing.map((listing) => {
              return (
                <Link
                  key={listing.listing_id}
                  href={{
                    pathname: "/featured",
                    query: {
                      area: "london",
                      include_featured_properties: "1",
                      category: "residential",
                      property_type: "sale",
                    },
                  }}
                  passHref>
                  <Card listing={listing} />
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
