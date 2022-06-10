import FeaturedHeroSection from "../../components/3-featuredPageComps/1-heroSection"
import FeaturedResultsSection from "../../components/3-featuredPageComps/2-featuredResultsSection"
import { fetchApi, baseURL } from "../../utils/fetchApi"

const FeaturedPage = ({ searchResults }) => {
  return (
    <>
      {/* Hero Section */}
      <FeaturedHeroSection />
      {/* Featured Section */}
      <FeaturedResultsSection searchResults={searchResults} />
    </>
  )
}

export default FeaturedPage

export async function getServerSideProps() {
  const data = await fetchApi(
    `${baseURL}/properties/list?area=london&include_featured_properties=1?page_size=20`
  )

  return {
    props: {
      searchResults: data,
    },
  }
}
