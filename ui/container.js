const Container = ({ children }) => {
  return (
    <>
      <div className='mx-auto max-w-[1700px] px-7 md:px-7 lg:px-10'>
        {children}
      </div>
    </>
  )
}

export default Container
