const IconArea = ({ title, paragraph, icon }) => {
  return (
    <>
      <div>
        <div className='flex items-center justify-start gap-3'>
          <div className='rounded-md bg-myBlue p-2'>{icon}</div>
          <h3 className='text-lg font-medium text-myBlue lg:text-xl'>
            {title}
          </h3>
        </div>
        <p className='mt-3 lg:text-lg'>{paragraph}</p>
      </div>
    </>
  )
}

export default IconArea
