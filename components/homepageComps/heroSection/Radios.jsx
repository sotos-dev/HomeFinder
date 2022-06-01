const Radios = ({ radioName, radioId }) => {
  return (
    <>
      <div className='flex items-center justify-start gap-2'>
        <input
          type='radio'
          name='property-types'
          id={radioId}
          className='text-myBlue focus:ring-myBlue'
        />
        <label htmlFor={radioId}>{radioName}</label>
      </div>
    </>
  )
}

export default Radios
