import { useState } from "react"
import { useRouter } from "next/router"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import {
  minBedrooms,
  maxBedrooms,
  totalMinPrice,
  totalMaxPrice,
  minPricePerMonth,
  maxPricePerMonth,
  minPricePerWeek,
  maxPricePerWeek,
  checkboxesInfo,
  theAllCheckboxInfo,
} from "../../../utils/homePageData"
import Option from "./Option"
import Checkbox from "./Checkbox"
import TheAllCheckbox from "./TheAllCheckbox"

const HeroFormLaptop = () => {
  const router = useRouter()
  // These Handle the Sales/Rent buttons as well as the Monthly/Weekly pricing on rentals
  const [forSaleButton, setForSaleButton] = useState(true)
  const [toRentButton, setToRentButton] = useState(false)
  const [selectValue, setSelectValue] = useState("month")
  const [monthly, setMonthly] = useState(true)
  const [weekly, setWeekly] = useState(false)

  // USER  INPUT VALUES
  const [searchAreaSelected, setSearchAreaSelected] = useState("")
  const [minBedroomsSelected, setMinBedroomsSelected] = useState("")
  const [maxBedroomsSelected, setMaxBedroomsSelected] = useState("")
  const [salesMinPriceSelected, setSalesMinPriceSelected] = useState("")
  const [salesMaxPriceSelected, setSalesMaxPriceSelected] = useState("")
  const [minRentMonthlyPriceSelected, setMinRentMonthlyPriceSelected] =
    useState("")
  const [maxRentMonthlyPriceSelected, setMaxRentMonthlyPriceSelected] =
    useState("")
  const [minRentWeeklyPriceSelected, setMinRentWeeklyPriceSelected] =
    useState("")
  const [maxRentWeeklyPriceSelected, setMaxRentWeeklyPriceSelected] =
    useState("")
  const [propertyTypeSelected, setPropertyTypeSelected] = useState(
    "flats,farmsland,terraced,semidetached,detached,bungalow,park_home,land"
  )

  // FILTER DROPDOWNS ON/OFF
  const [displayBedrooms, setDisplayBedrooms] = useState(false)
  const [displayPriceRange, setDisplayPriceRange] = useState(false)
  const [displayPropertyTypes, setDisplayPropertyTypes] = useState(false)

  // PROPERTY CHECKBOXES LOGIC
  const [propertyNameTypes, setPropertyNameTypes] = useState(["Show all"])
  const [checkboxesState, setCheckboxesState] = useState(checkboxesInfo)
  const [allCheckboxState, setAllCheckboxState] = useState(theAllCheckboxInfo)

  const toggleBedrooms = () => {
    setDisplayBedrooms((prev) => (prev = !prev))
    setDisplayPropertyTypes(false)
    setDisplayPriceRange(false)
  }
  const togglePriceRange = () => {
    setDisplayPriceRange((prev) => (prev = !prev))
    setDisplayPropertyTypes(false)
    setDisplayBedrooms(false)
  }
  const togglePropertyTypes = () => {
    setDisplayPropertyTypes((prev) => (prev = !prev))
    setDisplayPriceRange(false)
    setDisplayBedrooms(false)
  }
  const closeDropdowns = () => {
    setDisplayPropertyTypes(false)
    setDisplayPriceRange(false)
    setDisplayBedrooms(false)
  }

  const saleButton = () => {
    setForSaleButton(true)
    setToRentButton(false)
  }
  const rentButton = () => {
    setToRentButton(true)
    setForSaleButton(false)
  }
  const changeMonthlyWeekly = () => {
    if (selectValue === "month") {
      setMonthly(false)
      setWeekly(true)
      setSelectValue("week")
    } else if (selectValue === "week") {
      setMonthly(true)
      setWeekly(false)
      setSelectValue("month")
    }
  }

  // RUNS WHEN CLICKING ON THE 'SHOW ALL' CHECKBOX ONLY
  const handleAllCheckbox = () => {
    if (allCheckboxState.selected === true) {
      return
    } else {
      //------------------------------------------------------------
      // Uncheck/unselect all checkboxes but make them all valid
      const removeSelected = checkboxesState.map((item) =>
        item.selected === true ? { ...item, selected: false } : item
      )
      const unselectButMakeValid = removeSelected.map((item) =>
        item ? { ...item, valid: true } : item
      )
      setCheckboxesState(unselectButMakeValid)
      //------------------------------------------------------------
      // Select/check 'Show all' checkbox
      setAllCheckboxState({
        ...allCheckboxState,
        selected: !allCheckboxState.selected,
      })
      //------------------------------------------------------------
      // Reset the array of property types' names
      setPropertyNameTypes(["Show all"])
    }
  }
  // RUNS WHEN CLICKING ON A REGULAR CHECKBOX ONLY
  const handleCheckboxes = (e, id) => {
    // IF 'SHOW-ALL' CHECKBOX IS SELECTED
    if (allCheckboxState.selected === true) {
      setPropertyTypeSelected([e.target.value])
      //------------------------------------------------------------
      // Uncheck the 'Show all' checkbox - Unselect it
      setAllCheckboxState({ ...allCheckboxState, selected: false })
      //------------------------------------------------------------
      // Handle Checkboxes State (which one is on/off - valid/invalid)
      const updatedCheckboxes = checkboxesState.map((checkbox) =>
        checkbox.id === id
          ? {
              ...checkbox,
              selected: !checkbox.selected,
              valid: !checkbox.selected,
            }
          : { ...checkbox, valid: false }
      )
      setCheckboxesState(updatedCheckboxes)
      //------------------------------------------------------------
      // Update the array that shows the names of which boxes are checked
      const validNames = updatedCheckboxes.filter(
        (item) => item.selected === true
      )
      const displayNames = validNames.map((item) => item.value)
      setPropertyNameTypes(displayNames)
      //------------------------------------------------------------
      // Get values for filtering
      const activeValues = validNames.map((item) => item.value)
      setPropertyTypeSelected(activeValues.join())
      //------------------------------------------------------------
    }
    // IF 'SHOW-ALL' CHECKBOX IS NOT SELECTED
    else {
      //------------------------------------------------------------
      // Handle Checkboxes State (which one is on/off - valid/invalid)
      const updatedCheckboxes = checkboxesState.map((checkbox) =>
        checkbox.id === id
          ? {
              ...checkbox,
              selected: !checkbox.selected,
              valid: !checkbox.selected,
            }
          : { ...checkbox }
      )
      setCheckboxesState(updatedCheckboxes)
      //------------------------------------------------------------
      // Update the array that shows the names of which boxes are checked
      const validNames = updatedCheckboxes.filter(
        (item) => item.selected === true
      )
      const displayNames = validNames.map((item) => item.value)
      setPropertyNameTypes(displayNames)
      //------------------------------------------------------------
      // Get values for filtering
      const activeValues = validNames.map((item) => item.value)
      setPropertyTypeSelected(activeValues.join())
      //------------------------------------------------------------
      // Check if all checkboxes/options are off
      const selectTheAllCkeckbox = updatedCheckboxes.every(
        (item) => item.selected === false
      )
      // IF ALL CHECKBOXES ARE NOT SELECTED
      if (selectTheAllCkeckbox) {
        //------------------------------------------------------------
        // Make all checkboxes valid
        const makeValid = updatedCheckboxes.map((item) =>
          item ? { ...item, valid: true } : item
        )
        setCheckboxesState(makeValid)
        setAllCheckboxState({ ...allCheckboxState, selected: true })
        //------------------------------------------------------------
        // Reset the array of property types' names
        setPropertyNameTypes(["Show all"])
      }
    }
  }

  const submitSearch = (e) => {
    e.preventDefault()

    const { query } = router

    const userInput = {}

    if (forSaleButton) {
      userInput = {
        listing_status: "sale",
        area: searchAreaSelected,
        minimum_beds: minBedroomsSelected,
        maximum_beds: maxBedroomsSelected,
        minimum_price: salesMinPriceSelected,
        maximum_price: salesMaxPriceSelected,
        property_type: propertyTypeSelected,
      }
    } else if (toRentButton) {
      if (monthly) {
        userInput = {
          listing_status: "rent",
          area: searchAreaSelected,
          minimum_beds: minBedroomsSelected,
          maximum_beds: maxBedroomsSelected,
          minimum_price: minRentMonthlyPriceSelected,
          maximum_price: maxRentMonthlyPriceSelected,
          property_type: propertyTypeSelected,
        }
      } else if (weekly) {
        userInput = {
          listing_status: "rent",
          area: searchAreaSelected,
          minimum_beds: minBedroomsSelected,
          maximum_beds: maxBedroomsSelected,
          minimum_price: minRentWeeklyPriceSelected,
          maximum_price: maxRentWeeklyPriceSelected,
          property_type: propertyTypeSelected,
        }
      }
    }

    for (const [key, value] of Object.entries(userInput)) {
      query[key] = value
    }

    // console.log(query)
    router.push({ pathname: "/listings", query })
  }

  return (
    <>
      <div className='mx-left z-20 hidden max-w-[1700px] lg:block'>
        <div className='sm:mx-5'>
          {/* --------------------------- */}
          {/* MESSAGE */}
          <p className='my-3 ml-8 text-left text-lg font-medium text-myBlue lg:text-xl'>
            Search properties for sale or rent in the{" "}
            <span className='font-medium'>UK</span>
          </p>
          {/* --------------------------- */}
          {/* FORM */}
          <form onSubmit={submitSearch}>
            {/* --------------------------- */}
            {/* BUTTONS */}
            <div className='ml-8 flex items-center justify-start gap-2'>
              <button
                onClick={saleButton}
                type='button'
                className={`${
                  forSaleButton
                    ? "bg-myBlue text-white"
                    : "bg-gray-200 text-black"
                } rounded-md py-4 px-7 text-lg`}>
                For sale
              </button>
              <button
                onClick={rentButton}
                type='button'
                className={`${
                  toRentButton
                    ? "bg-myBlue text-white"
                    : "bg-gray-200 text-black"
                } rounded-md py-4 px-7 text-lg`}>
                To rent
              </button>
            </div>
            {/* --------------------------- */}
            {/* FORM AREA - GRID */}
            <div className='relative mx-8 -mb-16 mt-4 grid h-[98px] grid-cols-5 items-center justify-start rounded border border-black/30 bg-white'>
              {/* --------------------------- */}
              {/* SEARCH ADDRESS */}
              <div
                onClick={closeDropdowns}
                className='relative border-r border-black/30'>
                <label htmlFor='search-area'>
                  <p className='absolute top-4 left-4 text-sm font-medium tracking-wide text-myBlue'>
                    Search area
                  </p>
                  <input
                    value={searchAreaSelected}
                    onChange={(e) => setSearchAreaSelected(e.target.value)}
                    type='text'
                    placeholder='eg. Oxford or NW3'
                    autoComplete='off'
                    id='search-area'
                    className='h-24 w-full border-none bg-white pl-4 pt-7 text-xl outline-none'
                  />
                </label>
              </div>
              {/* --------------------------- */}
              {/* BEDROOMS FILTER */}
              <div className='relative'>
                {/* BEDROOMS DIV */}
                <div
                  onClick={toggleBedrooms}
                  className='relative h-24 border-r border-black/30 bg-white pl-4 pt-7 text-xl'>
                  <p className='absolute top-4 left-4 text-sm tracking-wide text-myBlue'>
                    Bedrooms
                  </p>
                  <div className='mt-3 flex items-center justify-between'>
                    <p>Any beds</p>
                    {displayBedrooms ? (
                      <MdKeyboardArrowUp className='pointer-events-none mr-5 text-4xl' />
                    ) : (
                      <MdKeyboardArrowDown className='pointer-events-none mr-5 text-4xl' />
                    )}
                  </div>
                </div>
                {/* BEDROOMS DROPDOWN DIV */}
                <div className='absolute left-0 top-[105px] z-20 rounded bg-white'>
                  {displayBedrooms && (
                    <div className='m-5 flex items-center gap-5'>
                      {/* MINIMUM BEDROOMS */}
                      <div className='relative w-56'>
                        <p className='pointer-events-none absolute top-3 left-3 text-sm tracking-wide text-myBlue'>
                          Minimum beds
                        </p>
                        <MdKeyboardArrowDown className='pointer-events-none absolute top-7 right-3 text-3xl' />
                        <select
                          value={minBedroomsSelected}
                          onChange={(e) =>
                            setMinBedroomsSelected(e.target.value)
                          }
                          id='bedrooms'
                          className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                          {minBedrooms.map((room) => (
                            <Option
                              key={room.name + 1}
                              optionName={room.name}
                            />
                          ))}
                        </select>
                      </div>
                      {/* MAXIMUM BEDROOMS */}
                      <div className='relative w-56'>
                        <p className='pointer-events-none absolute left-3 top-3 text-sm tracking-wide text-myBlue'>
                          Maximum beds
                        </p>
                        <MdKeyboardArrowDown className='pointer-events-none absolute top-7 right-3 text-3xl' />
                        <select
                          value={maxBedroomsSelected}
                          onChange={(e) =>
                            setMaxBedroomsSelected(e.target.value)
                          }
                          id='bedrooms'
                          className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                          {maxBedrooms.map((room) => (
                            <Option
                              key={room.name + 1}
                              optionName={room.name}
                            />
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* --------------------------- */}
              {/* PRICE FILTER */}
              <div className='relative'>
                {/* PRICE RANGE DIV */}
                <div
                  onClick={togglePriceRange}
                  className='relative h-24 grow border-r border-black/30 bg-white pl-4 pt-7 text-xl'>
                  <p className='absolute top-4 left-4 text-sm tracking-wide text-myBlue'>
                    Price range
                  </p>
                  <div className='mt-3 flex items-center justify-between'>
                    <p>Any price</p>
                    {displayPriceRange ? (
                      <MdKeyboardArrowUp className='pointer-events-none mr-5 text-4xl' />
                    ) : (
                      <MdKeyboardArrowDown className='pointer-events-none mr-5 text-4xl' />
                    )}
                  </div>
                </div>
                {/* PRICE RANGE DROPDOWN DIV */}
                {/* SALES PRICE RANGE */}
                {forSaleButton && (
                  <div className='absolute right-0 top-[105px] z-20 rounded bg-white'>
                    {displayPriceRange && (
                      <div className='m-5 flex items-center gap-5'>
                        {/* SALES MINIMUM PRICE */}
                        <div className='relative w-56'>
                          <p className='pointer-events-none absolute top-3 left-3 text-sm tracking-wide text-myBlue'>
                            Minimum price
                          </p>
                          <MdKeyboardArrowDown className='pointer-events-none absolute top-7 right-3 text-3xl' />
                          <select
                            value={salesMinPriceSelected}
                            onChange={(e) =>
                              setSalesMinPriceSelected(e.target.value)
                            }
                            id='bedrooms'
                            className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                            {totalMinPrice.map((room) => (
                              <Option
                                key={room.name + 1}
                                optionName={room.name}
                                optionValue={room.value}
                              />
                            ))}
                          </select>
                        </div>
                        {/* SALES MAXIMUM PRICE */}
                        <div className='relative w-56'>
                          <p className='pointer-events-none absolute left-3 top-3 text-sm tracking-wide text-myBlue'>
                            Maximum price
                          </p>
                          <MdKeyboardArrowDown className='pointer-events-none absolute top-7 right-3 text-3xl' />
                          <select
                            value={salesMaxPriceSelected}
                            onChange={(e) =>
                              setSalesMaxPriceSelected(e.target.value)
                            }
                            id='bedrooms'
                            className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                            {totalMaxPrice.map((room) => (
                              <Option
                                key={room.name + 1}
                                optionName={room.name}
                                optionValue={room.value}
                              />
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {/* RENTALS PRICE RANGE */}
                {toRentButton && (
                  <div className='absolute right-0 top-[105px] z-20 rounded bg-white'>
                    {displayPriceRange && (
                      <div className='grid w-[450px] grid-cols-2 gap-5 p-5'>
                        {/* PER MONTH/WEEK */}
                        <div className='relative col-span-2 mx-auto w-full'>
                          <p className='pointer-events-none absolute top-3 left-3 text-sm tracking-wide text-myBlue'>
                            Price per
                          </p>
                          <MdKeyboardArrowDown className='pointer-events-none absolute top-7 right-3 text-3xl' />
                          <select
                            value={selectValue}
                            onChange={changeMonthlyWeekly}
                            className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                            <option value='month'>Month</option>
                            <option value='week'>Week</option>
                          </select>
                        </div>
                        {/* INNER FIELDS */}
                        {monthly && (
                          <div className='col-span-2 mx-auto flex w-full items-center gap-5'>
                            {/* MONTHLY MINIMUM PRICE */}
                            <div className='relative w-56'>
                              <p className='pointer-events-none absolute top-3 left-3 text-sm tracking-wide text-myBlue'>
                                Minimum price
                              </p>
                              <MdKeyboardArrowDown className='pointer-events-none absolute top-7 right-3 text-3xl' />
                              <select
                                value={minRentMonthlyPriceSelected}
                                onChange={(e) =>
                                  setMinRentMonthlyPriceSelected(e.target.value)
                                }
                                id='bedrooms'
                                className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                                {minPricePerMonth.map((room) => (
                                  <Option
                                    key={room.name + 1}
                                    optionName={room.name}
                                    optionValue={room.value}
                                  />
                                ))}
                              </select>
                            </div>
                            {/* MONTHLY MAXIMUM PRICE */}
                            <div className='relative w-56'>
                              <p className='pointer-events-none absolute left-3 top-3 text-sm tracking-wide text-myBlue'>
                                Maximum price
                              </p>
                              <MdKeyboardArrowDown className='pointer-events-none absolute top-7 right-3 text-3xl' />
                              <select
                                value={maxRentMonthlyPriceSelected}
                                onChange={(e) =>
                                  setMaxRentMonthlyPriceSelected(e.target.value)
                                }
                                id='bedrooms'
                                className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                                {maxPricePerMonth.map((room) => (
                                  <Option
                                    key={room.name + 1}
                                    optionName={room.name}
                                    optionValue={room.value}
                                  />
                                ))}
                              </select>
                            </div>
                          </div>
                        )}
                        {weekly && (
                          <div className='col-span-2 mx-auto flex w-full items-center gap-5'>
                            {/* WEEKLY MINIMUM PRICE */}
                            <div className='relative w-56'>
                              <p className='pointer-events-none absolute top-3 left-3 text-sm tracking-wide text-myBlue'>
                                Minimum price
                              </p>
                              <MdKeyboardArrowDown className='pointer-events-none absolute top-7 right-3 text-3xl' />
                              <select
                                value={minRentWeeklyPriceSelected}
                                onChange={(e) =>
                                  setMinRentWeeklyPriceSelected(e.target.value)
                                }
                                id='bedrooms'
                                className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                                {minPricePerWeek.map((room) => (
                                  <Option
                                    key={room.name + 1}
                                    optionName={room.name}
                                    optionValue={room.value}
                                  />
                                ))}
                              </select>
                            </div>
                            {/* WEEKLY MAXIMUM PRICE */}
                            <div className='relative w-56'>
                              <p className='pointer-events-none absolute left-3 top-3 text-sm tracking-wide text-myBlue'>
                                Maximum price
                              </p>
                              <MdKeyboardArrowDown className='pointer-events-none absolute top-7 right-3 text-3xl' />
                              <select
                                value={maxRentWeeklyPriceSelected}
                                onChange={(e) =>
                                  setMaxRentWeeklyPriceSelected(e.target.value)
                                }
                                id='bedrooms'
                                className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                                {maxPricePerWeek.map((room) => (
                                  <Option
                                    key={room.name + 1}
                                    optionName={room.name}
                                    optionValue={room.value}
                                  />
                                ))}
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* --------------------------- */}
              {/* PROPERTY FILTER */}
              <div className='relative '>
                {/* PROPERTY TYPES */}
                <div
                  onClick={togglePropertyTypes}
                  className='relative h-24 overflow-hidden truncate border-r border-black/30 bg-white pl-4 pt-7 text-xl'>
                  <p className='absolute top-4 left-4 text-sm tracking-wide text-myBlue'>
                    Property type
                  </p>
                  <div className='mt-3 flex items-center justify-between'>
                    <p>
                      {propertyNameTypes.map((typeName) => {
                        return (
                          <span key={typeName} className='mr-2'>
                            {typeName}
                          </span>
                        )
                      })}
                    </p>
                    {displayPropertyTypes ? (
                      <MdKeyboardArrowUp className='pointer-events-none mr-5 text-4xl' />
                    ) : (
                      <MdKeyboardArrowDown className='pointer-events-none mr-5 text-4xl' />
                    )}
                  </div>
                </div>
                {/* PROPERTY TYPES DROPDOWN DIV */}
                <div className='absolute left-0 top-[105px] z-20 rounded bg-white '>
                  {displayPropertyTypes && (
                    <>
                      <div className='mr-10 grid w-[350px] grid-cols-2 gap-4 truncate p-4'>
                        <TheAllCheckbox
                          allCheckbox={allCheckboxState}
                          handleAllCheckbox={handleAllCheckbox}
                        />
                        {checkboxesState.map((checkbox, index) => {
                          return (
                            <div
                              key={checkbox.id}
                              className='flex items-center justify-start gap-3'>
                              <input
                                className='rounded p-4 text-myBlue focus:ring-myBlue'
                                onChange={(e) =>
                                  handleCheckboxes(e, checkbox.id)
                                }
                                type='checkbox'
                                name={checkbox.name}
                                checked={checkbox.selected}
                                value={checkbox.value}
                                id={checkbox.id}
                              />
                              <label className='text-lg' htmlFor={checkbox.id}>
                                {checkbox.name}
                              </label>
                            </div>
                            // <Checkbox
                            //   key={index + checkbox.name}
                            //   handleCheckboxes={(e) => handleCheckboxes(e, id)}
                            //   name={checkbox.name}
                            //   id={checkbox.id}
                            //   value={checkbox.value}
                            //   selected={checkbox.selected}
                            //   checked={isCheckboxSelected}
                            // />
                          )
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* BUTTON */}
              {/* ---------------------------- */}
              <div className='mx-auto '>
                <button className='rounded bg-myOrange px-12 py-4 text-lg font-medium text-white xl:px-16'>
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Message Over Hero Photo */}
          <div className='relative z-10'>
            <h1 className='absolute top-32 left-10 ml-2 text-left text-4xl font-semibold tracking-wide text-white'>
              We know what a home is really worth
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroFormLaptop
