import Link from "next/link"
import { BiCopyright } from "react-icons/bi"
import Container from "../../ui/container"

const Footer = () => {
  return (
    <>
      <div className='bg-stone-100'>
        <Container>
          <div className='flex items-center justify-start gap-2'>
            <BiCopyright />
            <span>{new Date().getFullYear()}</span>
            <Link href='/'>
              <span>Created by Sotos</span>
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
