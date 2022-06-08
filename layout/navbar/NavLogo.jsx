import Logo from "../../assets/images/Logo/home-finder-logo.svg"
import Image from "next/image"
import Link from "next/link"

const NavLogo = () => {
  return (
    <>
      <Link href='/' passHref>
        <a>
          <Image src={Logo} alt='logo' />
        </a>
      </Link>
    </>
  )
}

export default NavLogo
