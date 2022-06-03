const Checkbox = ({ name, id, selected, handleCheckboxes }) => {
  const capitalizeFirstLetter = name.charAt(0).toUpperCase()
  const removedDashes = name.replace(/-/g, " ")
  const remainingLetters = removedDashes.slice(1)
  const newName = capitalizeFirstLetter + remainingLetters

  return (
    <>
      <div className='flex items-center justify-start gap-3'>
        <input
          className='rounded p-4 text-myBlue focus:ring-myBlue'
          onChange={() => handleCheckboxes(id)}
          type='checkbox'
          name={name}
          checked={selected}
          value={name}
          id={id}
        />
        <label className='text-lg' htmlFor={id}>
          {newName}
        </label>
      </div>
    </>
  )
}

export default Checkbox
