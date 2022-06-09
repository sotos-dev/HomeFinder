const Container = ({ children }) => {
  return (
    <>
      <div className='mx-auto mt-10 max-w-[1700px] px-3 sm:mt-14 sm:px-5 md:mt-16 md:px-7 lg:mt-20 lg:px-10 xl:mt-28 2xl:mt-32'>
        {children}
      </div>
    </>
  )
}

export default Container
