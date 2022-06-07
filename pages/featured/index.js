import FeaturedHeroSection from "../../components/featuredPageComps/heroSection"
import FeaturedResultsSection from "../../components/featuredPageComps/featuredResultsSection"
import { fetchApi, baseURL } from "../../utils/fetchApi"

const FeaturedPage = ({ searchResults }) => {
  console.log(searchResults)
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
