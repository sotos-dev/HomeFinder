import Link from "next/link"
import { BiCopyright } from "react-icons/bi"
import Container from "../../ui/container"
import Zoopla from "../../assets/images/zoopla.png"
import Image from "next/image"

const Footer = () => {
  return (
    <>
      <div className='mt-20 bg-stone-100'>
        <Container>
          <div className='flex items-center justify-center gap-10 py-3'>
            <div className='flex items-center justify-start gap-2'>
              <BiCopyright />
              <span>{new Date().getFullYear()}</span>
              <Link href='/'>
                <>
                  <span>Created by Sotos</span>
                </>
              </Link>
            </div>
            <Image src={Zoopla} alt='zoopla logo' width={100} height={40} />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
