import { useRouter } from "next/router"
const router = useRouter()
const { query } = router

console.log("This is the query here" + query)
const Listings = () => {
  return (
    <>
      <div>Listings</div>
    </>
  )
}

export default Listings

// export async function getServerSideProps() {
//     const featuredProperties = await fetchApi()
//   // `${baseURL}/properties/list?area=London&page_size=3&include_featured_properties=3`

//   return {
//     props: {
//       featuredProperties: featuredProperties,
//     },
//   }
// }
