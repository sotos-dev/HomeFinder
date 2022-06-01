import Link from "next/link"

const Navlinks = ({ name, destination, icon }) => {
  return (
    <>
      <li className='md:mx-3 lg:mx-5 xl:mx-7'>
        <Link href={destination} passHref>
          <a className='flex justify-start items-center text-myBlue gap-4 px-5 py-7 text-lg w-full md:flex-col md:justify-center md:gap-1 md:px-2 md:py-2 lg:text-xl'>
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
