import BrandsSection from "../components/homePageComps/brandsSection"
import FeaturedCitiesSection from "../components/homePageComps/featuredCitiesSection"
import HeroSection from "../components/homePageComps/heroSection"

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Brands Section */}
      <BrandsSection />
      {/* Featured Cities Section */}
      <FeaturedCitiesSection />
    </>
  )
}

export default HomePage
