import Link from "next/link"

const Navlinks = ({ name, destination, icon }) => {
  return (
    <>
      <li className='md:ml-6 lg:ml-9 xl:ml-12'>
        <Link href={destination} passHref>
          <a className='flex w-full items-center justify-start gap-3 px-5 py-7 text-lg text-myBlue md:flex-col md:justify-center md:gap-1 md:px-2 md:py-2 lg:text-lg'>
            <p>{icon}</p>
            <p>{name}</p>
          </a>
        </Link>
      </li>
    </>
  )
}

export default Navlinks
