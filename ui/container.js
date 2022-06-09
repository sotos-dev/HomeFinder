const Container = ({ children }) => {
  return (
    <>
      <div className='mx-auto max-w-[1700px] px-5 py-8 sm:px-5 sm:py-10 md:px-7 md:py-12 lg:px-10 lg:py-16 2xl:py-20 '>
        {children}
      </div>
    </>
  )
}

export default Container
