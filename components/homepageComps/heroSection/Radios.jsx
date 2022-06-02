const Radios = ({ radioName, radioId }) => {
  return (
    <>
      <div className='flex items-center justify-start gap-2'>
        <input
          type='radio'
          name='property-types'
          id={radioId}
          className='p-2 text-myBlue focus:ring-myBlue'
        />
        <label className='tracking-wide' htmlFor={radioId}>
          {radioName}
        </label>
      </div>
    </>
  )
}

export default Radios
