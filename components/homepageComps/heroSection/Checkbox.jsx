const Checkbox = ({ name, id, selected, handleCheckboxes }) => {
  const capitalizeFirstLetter = name.charAt(0).toUpperCase()
  const removedDashes = name.replace(/-/g, " ")
  const remainingLetters = removedDashes.slice(1)
  const newName = capitalizeFirstLetter + remainingLetters

  return (
    <>
      <div className='flex items-center justify-start gap-3'>
        <input
          className='p-2'
          onChange={() => handleCheckboxes(id)}
          type='checkbox'
          name={name}
          checked={selected}
          value={name}
          id={id}
        />
        <label htmlFor={id}>{newName}</label>
      </div>
    </>
  )
}

export default Checkbox
