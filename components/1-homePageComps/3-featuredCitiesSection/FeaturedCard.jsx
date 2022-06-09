import Image from "next/image"

const FeaturedCard = ({ image }) => {
  return (
    <>
      <div className='relative h-[520px] w-full lg:h-[530px] xl:h-[600px] 2xl:h-[650px]'>
        <Image
          src={image.src}
          alt={image.alt}
          layout={image.layout}
          objectFit={image.objectFit}
          className={image.className}
        />
        <h3 className='absolute bottom-4 left-5 text-4xl text-white'>
          {image.name}
        </h3>
      </div>
    </>
  )
}

export default FeaturedCard
