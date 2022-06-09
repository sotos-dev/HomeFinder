import Container from "../../../ui/container"
import LargeTitle from "../../../ui/largeTitle"
import { featuredImagesData } from "../../../utils/homePageUtils/3-featuredImagesData"
import FeaturedCard from "./FeaturedCard"

const FeaturedCitiesSection = () => {
  return (
    <>
      <Container>
        <div className='mx-auto w-full'>
          {/* Content */}
          <LargeTitle
            title='Featured Properties on the most visited cities'
            textAlign='text-center'
          />
          {/* Images */}
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 2xl:gap-16'>
            {/* Gets image data from UTILS folder */}
            {featuredImagesData.map((image) => {
              return <FeaturedCard image={image} />
            })}
          </div>
        </div>
      </Container>
    </>
  )
}

export default FeaturedCitiesSection
