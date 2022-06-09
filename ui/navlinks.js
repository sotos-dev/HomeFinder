import Link from "next/link"

const Navlinks = ({ name, destination, icon, textColor, padY, padX }) => {
  return (
    <>
      <li className=''>
        <Link href={destination} passHref>
          <a
            className={`${textColor} ${padY} ${padX} flex w-full items-center justify-start gap-3 text-lg md:flex-col md:justify-center md:gap-1 md:px-2 md:py-2 lg:text-lg`}>
            <p>{icon}</p>
            <p>{name}</p>
          </a>
        </Link>
      </li>
    </>
  )
}

export default Navlinks
