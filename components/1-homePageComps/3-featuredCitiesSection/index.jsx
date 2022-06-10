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
          <div className='flex w-full snap-x gap-3 overflow-x-auto sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-6'>
            {/* Gets image data from UTILS folder */}
            {featuredImagesData.map((image) => {
              return <FeaturedCard key={image.alt} image={image} />
            })}
          </div>
        </div>
      </Container>
    </>
  )
}

export default FeaturedCitiesSection
