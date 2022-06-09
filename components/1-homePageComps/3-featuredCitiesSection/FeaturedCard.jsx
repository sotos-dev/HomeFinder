import Image from "next/image"

const FeaturedCard = ({ image }) => {
  return (
    <>
      <div className='relative h-[250px] w-3/4 flex-shrink-0 cursor-pointer snap-center overflow-hidden hover:opacity-90 sm:h-[300px] sm:w-full lg:h-[350px] xl:h-[425px] 2xl:h-[500px]'>
        <Image
          src={image.src}
          alt={image.alt}
          layout={image.layout}
          objectFit={image.objectFit}
          className={image.className}
        />
        <h3 className='absolute bottom-3 left-3 z-10 text-xl text-white sm:text-3xl md:text-2xl lg:bottom-5 lg:left-5 xl:text-3xl 2xl:text-4xl'>
          {image.name}
        </h3>
        <div className='absolute bottom-0 top-0 left-0 right-0 rounded-2xl bg-gradient-to-t from-black/30 sm:rounded-3xl'></div>
      </div>
    </>
  )
}

export default FeaturedCard
