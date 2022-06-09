import Link from "next/link"
import { BiCopyright } from "react-icons/bi"
import LogoComp from "../../ui/logo"
import Zoopla from "../../assets/images/zoopla.png"
import Logo from "../../assets/images/Logo/logo-white.svg"
import Image from "next/image"
import Navlinks from "../../ui/navlinks"

const Footer = () => {
  return (
    <>
      <footer className='w-full bg-myBlue'>
        {/* Wrapper */}
        <div className='mx-auto max-w-[1700px] px-3 sm:px-5 md:px-7 lg:px-10'>
          {/* Flex wrapper */}
          <div className='relative z-10 grid grid-cols-1  gap-5 py-5 lg:grid-cols-6 lg:py-7 xl:flex-row'>
            {/* Logo */}
            <div className='place-self-center lg:col-start-1 lg:col-end-2 lg:place-self-start'>
              <LogoComp logo={Logo} />
            </div>
            {/* Navlinks */}
            <nav className='place-self-center lg:col-start-2 lg:col-end-6  lg:self-center	'>
              <ul className='flex flex-col items-start gap-5 xs:flex-row xs:gap-2'>
                <Navlinks
                  name='My Home'
                  destination='/'
                  icon=''
                  textColor='text-white'
                />
                <Navlinks
                  name='Listings'
                  destination='/listings'
                  icon=''
                  textColor='text-white'
                />
                <Navlinks
                  name='Featured'
                  destination='/featured'
                  icon=''
                  textColor='text-white'
                />
                <Navlinks
                  name='About'
                  destination='/about'
                  icon=''
                  textColor='text-white'
                />
                <Navlinks
                  name='Contact'
                  destination='/contact'
                  icon=''
                  textColor='text-white'
                />
              </ul>
            </nav>
            {/* Zoopla Logo */}
            <div className='w-32 place-self-center lg:col-start-6 lg:col-end-7 lg:place-self-end'>
              <Image src={Zoopla} alt='zoopla logo' />
            </div>
            {/*  Copyright  */}
            <div className='place-self-center lg:col-span-6 lg:row-start-2 lg:row-end-3'>
              <Link href='/' passHref>
                <small className='flex items-center justify-start gap-2 text-white'>
                  <BiCopyright />
                  {new Date().getFullYear() + " "}
                  Created by Sotos . All rights reserved
                </small>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

{
  /* <Image src={Zoopla} alt='zoopla logo' width={100} height={40} /> */
}
