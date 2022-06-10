const Paragraph = ({ text }) => {
  return (
    <>
      <p className='mb-3 max-w-md sm:max-w-lg lg:max-w-xl lg:text-lg xl:mt-5 xl:text-xl'>
        {text}
      </p>
    </>
  )
}

export default Paragraph
