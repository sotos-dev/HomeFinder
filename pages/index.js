import Featured from "../components/homepageComps/featuredSection"
import HeroSection from "../components/homepageComps/heroSection"
import { baseURL, fetchApi } from "../utils/fetchApi"
import { featuredProperties } from "../utils/dummyData"

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Featured Section */}
      <Featured featuredProperties={featuredProperties} />
    </>
  )
}

export default HomePage

// Fetch data to featured section - 3 featured properties
// export async function getStaticProps() {
//   const featuredProperties = await fetchApi(
//     `${baseURL}/properties/list?area=London&page_size=3&include_featured_properties=3&listing_status=sale`
//   )

//   return {
//     props: {
//       featuredProperties: featuredProperties,
//     },
//   }
// }
