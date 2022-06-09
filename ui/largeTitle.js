const LargeTitle = ({ title, textAlign }) => {
  return (
    <>
      <h2
        className={`lg:${textAlign}  mb-2 max-w-xs text-2xl 
        font-medium sm:max-w-sm sm:text-3xl md:max-w-md lg:mb-4 xl:max-w-xl xl:text-4xl`}>
        {title}
      </h2>
    </>
  )
}

export default LargeTitle
