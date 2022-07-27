import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const FeaturedCard = ({
  image: { src, alt, layout, objectFit, className, name },
}) => {
  const router = useRouter()
  const { query } = router

  // const sendToListings = (area) => {
  //   query["area"] = area

  //   router.push({ pathname: "/listings", query })
  // }

  return (
    <>
      <Link
        href={{
          pathname: "/listings",
          query: { area: alt },
        }}>
        <div
          // onClick={() => sendToListings(image.alt)}
          className='relative h-[250px] w-3/4 flex-shrink-0 cursor-pointer snap-center overflow-hidden transition-opacity hover:opacity-90 sm:h-[300px] sm:w-full lg:h-[350px] xl:h-[425px] 2xl:h-[500px]'>
          <Image
            src={src}
            alt={alt}
            layout={layout}
            objectFit={objectFit}
            className={className}
            placeholder='blur'
          />
          <h3 className='absolute bottom-3 left-3 z-10 text-xl text-white sm:text-3xl md:text-2xl lg:bottom-5 lg:left-5 xl:text-3xl 2xl:text-4xl'>
            {name}
          </h3>
          <div className='absolute bottom-0 top-0 left-0 right-0 rounded-2xl bg-gradient-to-t from-black/30 sm:rounded-3xl'></div>
        </div>
      </Link>
    </>
  )
}

export default FeaturedCard
