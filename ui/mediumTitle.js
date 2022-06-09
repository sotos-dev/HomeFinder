const SectionTitle = ({ title, textAlign }) => {
  return (
    <>
      <h2
        className={`${textAlign} mb-2 max-w-[250px] text-lg font-medium sm:max-w-xs sm:text-xl md:max-w-sm lg:mb-3 lg:max-w-md lg:text-2xl xl:mb-4 xl:max-w-lg xl:text-3xl`}>
        {title}
      </h2>
    </>
  )
}

export default SectionTitle
