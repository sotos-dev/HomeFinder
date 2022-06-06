import { fetchApi, baseURL } from "../../utils/fetchApi"

const ListingPage = ({ listing }) => {
  console.log(listing)

  return (
    <>
      <div></div>
    </>
  )
}

export default ListingPage

export async function getServerSideProps({ params: { id } }) {
  const { data } = fetchApi(`${baseURL}/details/${id}`)

  //   const data = params

  return {
    props: {
      listing: data,
    },
  }
}
