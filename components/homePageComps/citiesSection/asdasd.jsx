<div className='my-20 mx-auto flex flex-col-reverse items-start justify-around gap-5 px-5 sm:max-w-xl lg:max-w-full lg:flex-row lg:items-center lg:justify-evenly lg:gap-20'>
{/* Content */}
<div className=''>
  <h2 className='mb-3 max-w-md text-xl font-medium text-myBlue lg:text-3xl'>
    Use our one of a kind search engine above to get the best deals
    available
  </h2>
  <p className='max-w-lg opacity-80 lg:text-lg'>
    We tools that let you filter properties in all kinds of clever
    ways. But we know you're looking for more than that. Because that
    first flat won't just be a 'great investment opportunity'. What
    really matters is how it makes you feel. We know what a home is
    really worth. So let us help you find yours.
  </p>
  <Link href='/listings' passHref>
    <a className='mx-auto mt-10 block rounded-md bg-myOrange py-4 px-10 text-center text-lg text-white lg:mx-0 lg:max-w-xs'>
      Search homes
    </a>
  </Link>
</div>
{/* Image */}
<div className='mb-5 lg:mb-0 lg:w-1/2'>
  <Image src={HeroImage} alt='Houses graphic' />