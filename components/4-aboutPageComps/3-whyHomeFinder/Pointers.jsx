import { MdPlayArrow } from "react-icons/md"
import Paragraph from "../../../ui/paragraph"

const Pointers = ({ text }) => {
  return (
    <>
      <div className='mt-5 flex items-start justify-start gap-2'>
        <MdPlayArrow size={30} className='text-myOrange' />
        <p className='max-w-sm sm:max-w-lg lg:max-w-xl lg:text-lg xl:text-xl'>
          {text}
        </p>
      </div>
    </>
  )
}

export default Pointers
