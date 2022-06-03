import Featured from "../components/homepageComps/featuredSection"
import HeroSection from "../components/homepageComps/heroSection"
import Footer from "../layout/footer"
import NavBar from "../layout/navbar"
import { baseURL, fetchApi } from "../utils/fetchApi"

const HomePage = (featuredProperties) => {
  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* Hero section */}
      <HeroSection />
      {/* Featured */}
      <Featured featuredProperties={featuredProperties} />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default HomePage

// Fetch Data
export async function getStaticProps() {
  const featuredProperties = await fetchApi(
    `${baseURL}/properties/list?area=London&page_size=3&include_featured_properties=3`
  )

  return {
    props: {
      featuredProperties: featuredProperties,
    },
  }
}
