const Container = ({ children }) => {
  return (
    <>
      <div className='mx-auto mt-10 max-w-[1500px] p-7 md:px-7 lg:px-10'>
        {children}
      </div>
    </>
  )
}

export default Container
