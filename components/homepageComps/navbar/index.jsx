import { FcHome, FcSearch, FcKey, FcAbout, FcContacts } from "react-icons/fc"
import { FcMenu } from "react-icons/fc"
import Divider from "../../../ui/divider"
import Navlinks from "./NavLinks"
import { useState } from "react"
import Logo from "./NavLogo"

const NavBar = () => {
  const [menuState, setMenuState] = useState(false)
  const toggleMenu = () => {
    setMenuState((prevMenuState) => (prevMenuState = !prevMenuState))
  }

  return (
    <>
      <header className='relative flex justify-between items-center w-full py-4 md:px-5 md:py-5 lg:px-7 lg:py-7 z-10'>
        {/* Logo */}
        <div className='w-24 ml-5 mt-1 md:w-36 lg:w-44'>
          <Logo />
        </div>
        {/* Sandwich Button */}
        <button className='mr-5 md:hidden' onClick={toggleMenu}>
          <FcMenu size={35} />
        </button>
        {/* Tablet&Up-NavMenu */}
        <nav className={`hidden md:block`}>
          <ul className='flex items-center justify-end'>
            <Navlinks
              name='My Home'
              destination='/'
              icon={<FcHome size={35} />}
            />
            <Navlinks
              name='Search'
              destination='/search'
              icon={<FcSearch size={35} />}
            />
            <Navlinks
              name='Featured'
              destination='/featured'
              icon={<FcKey size={35} />}
            />
            <Navlinks
              name='About'
              destination='/about'
              icon={<FcAbout size={35} />}
            />
            <Navlinks
              name='Contact'
              destination='/contact'
              icon={<FcContacts size={35} />}
            />
          </ul>
        </nav>
        {/* Mobile-NavMenu */}
        <nav
          className={`${
            menuState ? "translate-x-0" : "-translate-x-full"
          } absolute top-20  bg-slate-100 w-3/4  rounded-tr-lg rounded-br-lg transition-transform duration-500 md:hidden`}>
          <ul className='flex flex-col'>
            <Navlinks
              name='My Home'
              destination='/'
              icon={<FcHome size={30} />}
            />
            <Divider />
            <Navlinks
              name='Search'
              destination='/search'
              icon={<FcSearch size={30} />}
            />
            <Divider />
            <Navlinks
              name='Featured'
              destination='/featured'
              icon={<FcKey size={30} />}
            />
            <Divider />
            <Navlinks
              name='About'
              destination='/about'
              icon={<FcAbout size={30} />}
            />
            <Divider />
            <Navlinks
              name='Contact'
              destination='/contact'
              icon={<FcContacts size={30} />}
            />
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar
