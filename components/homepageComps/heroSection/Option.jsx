const Option = ({ optionName, optionValue }) => {
  return (
    <>
      <option
        type='text'
        value={optionValue}
        placeholder='eg. Oxford or NW3'
        id='search-area'>
        {optionName}
      </option>
    </>
  )
}

export default Option
