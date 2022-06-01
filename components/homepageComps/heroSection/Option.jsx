const Option = ({ optionName }) => {
  return (
    <>
      <option type='text' placeholder='eg. Oxford or NW3' id='search-area'>
        {optionName}
      </option>
    </>
  )
}

export default Option
