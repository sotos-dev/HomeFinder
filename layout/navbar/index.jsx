import { HiHome, HiSearch } from "react-icons/hi"
import { BsFillKeyFill } from "react-icons/bs"
import { IoMdInformationCircle } from "react-icons/io"
import { MdPermContactCalendar } from "react-icons/md"
import { FcMenu } from "react-icons/fc"
import Divider from "../../ui/divider"
import Navlinks from "./NavLinks"
import Logo from "./NavLogo"
import { useEffect, useState, useRef } from "react"
import Container from "../../ui/container"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileButtonRef = useRef()
  const mobileNavAreaRef = useRef()

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        e.target !== mobileButtonRef.current &&
        e.target !== mobileNavAreaRef.current
      ) {
        setIsMenuOpen(false)
      }
    }

    document.body.addEventListener("click", closeMenu)

    return () => document.body.removeEventListener("click", closeMenu)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prevMenuState) => (prevMenuState = !prevMenuState))
  }

  return (
    <>
      <header className=' w-full  shadow'>
        <Container>
          <div className='relative z-10 flex items-center justify-between py-4 md:py-5 lg:py-7'>
            {/* Logo */}
            <div className='mt-2 w-32 sm:w-44 md:w-56 lg:w-60'>
              <Logo />
            </div>
            {/* Sandwich Button */}
            <button
              ref={mobileButtonRef}
              className='mr-5 md:hidden'
              onClick={toggleMenu}
              value='asd'>
              <FcMenu size={35} className='pointer-events-none' />
            </button>
            {/* Tablet&Up-NavMenu */}
            <nav className='hidden md:block'>
              <ul className='flex items-center justify-end'>
                <Navlinks
                  name='My Home'
                  destination='/'
                  icon={<HiHome size={25} />}
                />
                <Navlinks
                  name='Listings'
                  destination='/listings'
                  icon={<HiSearch size={25} />}
                />
                <Navlinks
                  name='Featured'
                  destination='/featured'
                  icon={<BsFillKeyFill size={25} />}
                />
                <Navlinks
                  name='About'
                  destination='/about'
                  icon={<IoMdInformationCircle size={25} />}
                />
                <Navlinks
                  name='Contact'
                  destination='/contact'
                  icon={<MdPermContactCalendar size={25} />}
                />
              </ul>
            </nav>
            {/* Mobile-NavMenu */}
            <nav
              ref={mobileNavAreaRef}
              className={`${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } fixed top-0 z-20 -ml-5 h-screen w-3/4 rounded-tr-lg rounded-br-lg bg-gray-50 shadow-xl transition-transform duration-500 md:hidden`}>
              <ul className='flex flex-col'>
                <div className='ml-5 mt-7 mb-3 w-32 sm:w-44'>
                  <Logo />
                </div>
                <Divider />
                <Navlinks
                  name='My Home'
                  destination='/'
                  icon={<HiHome size={25} />}
                />
                <Divider />
                <Navlinks
                  name='Listings'
                  destination='/listings'
                  icon={<HiSearch size={25} />}
                />
                <Divider />
                <Navlinks
                  name='Featured'
                  destination='/featured'
                  icon={<BsFillKeyFill size={25} />}
                />
                <Divider />
                <Navlinks
                  name='About'
                  destination='/about'
                  icon={<IoMdInformationCircle size={25} />}
                />
                <Divider />
                <Navlinks
                  name='Contact'
                  destination='/contact'
                  icon={<MdPermContactCalendar size={25} />}
                />
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  )
}

export default NavBar
