const Container = ({ children }) => {
  return (
    <>
      <div className='mx-auto max-w-[1700px] px-3 sm:px-5 md:px-7 lg:px-10 '>
        {children}
      </div>
    </>
  )
}

export default Container
