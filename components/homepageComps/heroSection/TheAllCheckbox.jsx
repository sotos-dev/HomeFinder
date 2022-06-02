const TheAllCheckbox = ({
  handleAllCheckbox,
  allCheckbox: { id, name, selected },
}) => {
  const capitalizeFirstLetter = name.charAt(0).toUpperCase()
  const removedDashes = name.replace(/-/g, " ")
  const remainingLetters = removedDashes.slice(1)
  const newName = capitalizeFirstLetter + remainingLetters

  return (
    <>
      <div className='flex items-center gap-3'>
        <input
          onChange={() => handleAllCheckbox()}
          type='checkbox'
          name={name}
          checked={selected}
          value={name}
          id={id}
          className='p-2'
        />
        <label className='' htmlFor={id}>
          {newName}
        </label>
      </div>
    </>
  )
}

export default TheAllCheckbox
