const Radios = ({ radioName, radioId, optionValue, isRadioSelected }) => {
  return (
    <>
      <div className='flex items-center justify-start gap-2'>
        <input
          value={optionValue}
          type='radio'
          name='property-types'
          id={radioId}
          checked={isRadioSelected(optionValue)}
          className='p-2 text-myOrange focus:ring-myOrange'
        />
        <label className='tracking-wide' htmlFor={radioId}>
          {radioName}
        </label>
      </div>
    </>
  )
}

export default Radios
