import Link from "next/link"

const Navlinks = ({ name, destination, icon }) => {
  return (
    <>
      <li className='md:mx-3 lg:mx-5 xl:mx-7'>
        <Link href={destination} passHref>
          <a className='flex w-full items-center justify-start gap-2 px-5 py-7 text-lg text-myBlue md:flex-col md:justify-center md:gap-1 md:px-2 md:py-2 lg:text-xl'>
            <p>{icon}</p>
            <p></p>
            {name}
          </a>
        </Link>
      </li>
    </>
  )
}

export default Navlinks
