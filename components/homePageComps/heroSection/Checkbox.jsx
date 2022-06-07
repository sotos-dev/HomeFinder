const Checkbox = ({ name, id, value, selected, checked, handleCheckboxes }) => {
  return (
    <>
      <div className='flex items-center justify-start gap-3'>
        <input
          className='rounded p-4 text-myBlue focus:ring-myBlue'
          onChange={(e) => handleCheckboxes(e, id)}
          type='checkbox'
          name={name}
          checked={selected}
          value={value}
          id={id}
        />
        <label className='text-lg' htmlFor={id}>
          {name}
        </label>
      </div>
    </>
  )
}

export default Checkbox
