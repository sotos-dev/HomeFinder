import AboutHeroSection from "../components/4-aboutPageComps/1-heroSection"
import WhoWeAreSection from "../components/4-aboutPageComps/2-whoWeAreSection"
import WhyHomeFinder from "../components/4-aboutPageComps/3-whyHomeFinder"
import FeaturedListings from "../components/4-aboutPageComps/4-featuredListings"
import { fetchApi, baseURL } from "../utils/fetchApi"

const About = ({ featuredListings }) => {
  return (
    <>
      {/* About Hero Section */}
      <AboutHeroSection />
      {/* Who We Are Section */}
      <WhoWeAreSection />
      {/* Why Home Finder section */}
      <WhyHomeFinder />
      {/* Featured Listings Section */}
      <FeaturedListings listings={featuredListings} />
    </>
  )
}

export default About

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
