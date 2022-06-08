import BrandsSection from "../components/1-homePageComps/2-brandsSection"
import FeaturedCitiesSection from "../components/1-homePageComps/3-featuredCitiesSection"
import FindSuitableHomeSection from "../components/1-homePageComps/4-findSuitableHomeSection"
import HeroSection from "../components/1-homePageComps/1-heroSection"

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Brands Section */}
      <BrandsSection />
      {/* Featured Cities Section */}
      <FeaturedCitiesSection />
      {/* Find Suitable Home */}
      <FindSuitableHomeSection />
    </>
  )
}

export default HomePage
