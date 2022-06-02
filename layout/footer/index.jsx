import Link from "next/link"
import Container from "../../ui/container"
import { BiCopyright } from "react-icons/bi"

const Footer = () => {
  return (
    <>
      <Container>
        <div className='flex items-center justify-start gap-2'>
          <BiCopyright />
          <span>{new Date().getFullYear()}</span>
          <Link href='/'>
            <span>Created by Sotos</span>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Footer
