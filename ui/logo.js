import Image from "next/image"
import Link from "next/link"

const LogoComp = ({ logo }) => {
  return (
    <>
      <div className='mt-2 w-32 sm:w-44 md:w-52 lg:w-60'>
        <Link href='/' passHref>
          <a>
            <Image src={logo} alt='logo' />
          </a>
        </Link>
      </div>
    </>
  )
}

export default LogoComp
