import BrandsSection from "../components/1-homePageComps/2-brandsSection"
import FeaturedCitiesSection from "../components/1-homePageComps/3-featuredCitiesSection"
import FindSuitableHomeSection from "../components/1-homePageComps/4-findSuitableHomeSection"
import HeroSection from "../components/1-homePageComps/1-heroSection"
import HomeWorthSection from "../components/1-homePageComps/5-homeWorthSection"
import FeaturedListings from "../components/1-homePageComps/6-featuredListings"
import { fetchApi, baseURL } from "../utils/fetchApi"

const HomePage = ({ featuredListings }) => {
  console.log(featuredListings)
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Brands Section */}
      <BrandsSection />
      {/* Featured Cities Section */}
      <FeaturedCitiesSection />
      {/* Find Suitable Home section */}
      <FindSuitableHomeSection />
      {/* Home Worth Section */}
      <HomeWorthSection />
      {/* Featured Properties Section */}
      <FeaturedListings listings={featuredListings} />
    </>
  )
}

export default HomePage

export async function getServerSideProps() {
  const data = await fetchApi(
    `${baseURL}/properties/list?area=london&include_featured_properties=1&listing_status=sale&page_size=4`
  )

  return {
    props: {
      featuredListings: data,
    },
  }
}
