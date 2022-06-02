import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import {
  checkboxesInfo,
  theAllCheckboxInfo,
} from "../../../utils/homepageLaptopData"
import {
  bedrooms,
  totalMaxPrice,
  pricePerMonth,
  pricePerWeek,
  propertyType,
} from "../../../utils/homepageMobileData"
import Option from "./Option"
import Checkbox from "./Checkbox"
import TheAllCheckbox from "./TheAllCheckbox"

const HeroFormLaptop = () => {
  const [forSaleButton, setForSaleButton] = useState(true)
  const [toRentButton, setToRentButton] = useState(false)
  const [selectValue, setSelectValue] = useState("month")
  const [monthly, setMonthly] = useState(true)
  const [weekly, setWeekly] = useState(false)
  const [displayBedrooms, setDisplayBedrooms] = useState(false)
  const [displayPriceRange, setDisplayPriceRange] = useState(false)

  // PROPERTY TYPES
  const [propertyNameTypes, setPropertyNameTypes] = useState(["Show all"])
  const [checkboxesState, setCheckboxesState] = useState(checkboxesInfo)
  const [allCheckboxState, setAllCheckboxState] = useState(theAllCheckboxInfo)
  const [displayPropertyTypes, setDisplayPropertyTypes] = useState(false)

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
  const closeRest = () => {
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

  const handleAllCheckbox = () => {
    if (allCheckboxState.selected === true) {
      return
    } else {
      const removeSelected = checkboxesState.map((item) =>
        item.selected === true ? { ...item, selected: false } : item
      )
      const makeValid = removeSelected.map((item) =>
        item ? { ...item, valid: true } : item
      )

      setPropertyNameTypes(makeValid)

      const allCheckox = {
        ...allCheckboxState,
        selected: !allCheckboxState.selected,
      }

      setPropertyNameTypes(["Show all"])
      setAllCheckboxState(allCheckox)
    }
  }

  const handleCheckboxes = (id) => {
    if (allCheckboxState.selected === true) {
      setAllCheckboxState({ ...allCheckboxState, selected: false })
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
      const validNames = updatedCheckboxes.filter(
        (item) => item.selected === true
      )
      const displayNames = validNames.map((item) => item.name)
      setPropertyNameTypes(displayNames)
    } else {
      // setAllCheckboxState({ ...allCheckboxState, selected: false })
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
      const validNames = updatedCheckboxes.filter(
        (item) => item.selected === true
      )
      const displayNames = validNames.map((item) => item.name)
      setPropertyNameTypes(displayNames)
    }
  }

  console.log(checkboxesState)

  const submitSearch = (e) => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <>
      <div className='z-20 mx-auto hidden max-w-7xl lg:block'>
        <div className='sm:px-5'>
          <p className='my-3 ml-8 text-left text-lg font-medium text-myBlue '>
            Search properties for sale or rent in the{" "}
            <span className='font-medium'>UK</span>
          </p>
          {/* FORM */}
          <form onSubmit={submitSearch}>
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
            {/* FORM AREA */}
            <div className='relative mx-8 -mb-24 mt-4 flex h-[98px] items-center justify-start rounded  border border-black border-opacity-30 bg-white'>
              {/* SEARCH ADDRESS */}
              {/* --------------------------- */}
              <fieldset
                onClick={closeRest}
                className='relative border-r border-black border-opacity-30'>
                <label htmlFor='search-area'>
                  <p className='absolute top-4 left-4 text-sm font-medium tracking-wide text-myBlue'>
                    Search area
                  </p>
                  <input
                    type='text'
                    placeholder='eg. Oxford or NW3'
                    autoComplete='off'
                    id='search-area'
                    className='h-24 max-w-[250px] border-none bg-slate-300 pl-4 pt-7 text-xl'
                  />
                </label>
              </fieldset>
              {/* BEDROOMS */}
              {/* --------------------------- */}
              <div
                onClick={toggleBedrooms}
                className='relative h-24 grow border-r border-cyan-600 bg-slate-200 pl-4 pt-7 text-xl'>
                <p className='absolute top-4 left-4 text-sm tracking-wide text-myBlue'>
                  Bedrooms
                </p>
                <div className='mt-3 flex items-center justify-between'>
                  <p>Any beds</p>
                  <MdKeyboardArrowDown className='pointer-events-none text-3xl' />
                </div>
              </div>
              {/* BEDROOMS DROPDOWN DIV */}
              <div className='absolute left-[251px] top-[105px] rounded bg-white'>
                {displayBedrooms && (
                  <div className='m-5 flex items-center gap-5'>
                    {/* MINIMUM BEDROOMS */}
                    <div className='relative w-56'>
                      <p className='pointer-events-none absolute top-3 left-3 text-sm tracking-wide text-myBlue'>
                        Minimum beds
                      </p>
                      <select
                        id='bedrooms'
                        className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                        {bedrooms.map((room) => (
                          <Option key={room + 1} optionName={room} />
                        ))}
                      </select>
                    </div>
                    {/* MAXIMUM BEDROOMS */}
                    <div className='relative w-56'>
                      <p className='pointer-events-none absolute left-3 top-3 text-sm tracking-wide text-myBlue'>
                        Maximum beds
                      </p>
                      <select
                        id='bedrooms'
                        className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                        {bedrooms.map((room) => (
                          <Option key={room + 1} optionName={room} />
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>
              {/* PRICE RANGE */}
              {/* --------------------------- */}
              <div
                onClick={togglePriceRange}
                className='relative h-24 grow border-r border-cyan-600 bg-slate-200 pl-4 pt-7 text-xl'>
                <p className='absolute top-4 left-4 text-sm tracking-wide text-myBlue'>
                  Price range
                </p>
                <div className='mt-3 flex items-center justify-between'>
                  <p>Any price</p>
                  <MdKeyboardArrowDown className='pointer-events-none text-3xl' />
                </div>
              </div>
              {/* PRICE RANGE DROPDOWN DIV */}
              <div className='absolute right-[446px] top-[105px] rounded bg-white'>
                {displayPriceRange && (
                  <div className='m-5 flex items-center gap-5'>
                    {/* MINIMUM PRICE */}
                    <div className='relative w-56'>
                      <p className='pointer-events-none absolute top-3 left-3 text-sm tracking-wide text-myBlue'>
                        Minimum price
                      </p>
                      <select
                        id='bedrooms'
                        className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                        {bedrooms.map((room) => (
                          <Option key={room + 1} optionName={room} />
                        ))}
                      </select>
                    </div>
                    {/* MAXIMUM PRICE */}
                    <div className='relative w-56'>
                      <p className='pointer-events-none absolute left-3 top-3 text-sm tracking-wide text-myBlue'>
                        Maximum price
                      </p>
                      <select
                        id='bedrooms'
                        className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-3 pt-7 text-lg font-medium text-myBlue'>
                        {bedrooms.map((room) => (
                          <Option key={room + 1} optionName={room} />
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>
              {/* PROPERTY TYPES */}
              {/* --------------------------- */}
              <div
                onClick={togglePropertyTypes}
                className='relative h-24 grow border-r border-cyan-600 bg-slate-200 pl-4 pt-7 text-xl'>
                <p className='absolute top-4 left-4 text-sm tracking-wide text-myBlue'>
                  Property type
                </p>
                <div className='mt-3 flex items-center justify-between'>
                  <p>{propertyNameTypes}</p>
                  <MdKeyboardArrowDown className='pointer-events-none text-3xl' />
                </div>
              </div>
              {/* PROPERTY TYPES DROPDOWN DIV */}
              <div className='absolute right-[117px] top-[105px] rounded bg-white'>
                {displayPropertyTypes && (
                  <>
                    <div className='m-5 grid grid-cols-2 gap-5'>
                      <TheAllCheckbox
                        allCheckbox={allCheckboxState}
                        handleAllCheckbox={handleAllCheckbox}
                      />
                      {checkboxesState.map((checkbox, index) => {
                        return (
                          <Checkbox
                            key={index + checkbox.name}
                            handleCheckboxes={handleCheckboxes}
                            name={checkbox.name}
                            id={checkbox.id}
                            selected={checkbox.selected}
                          />
                        )
                      })}
                    </div>
                  </>
                )}
              </div>
              {/* BUTTON */}
              {/* ---------------------------- */}
              <div className='mx-auto px-4'>
                <button className='rounded bg-myOrange px-16 py-4 text-lg font-medium text-white'>
                  Search
                </button>
              </div>
            </div>
          </form>

          <div className='relative -z-10'>
            <h1 className='absolute top-20 left-10 ml-2 text-left text-4xl font-semibold tracking-wide text-white'>
              We know what a home is really worth
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroFormLaptop
