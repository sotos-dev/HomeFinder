import { useState, useRef } from "react"
import { useRouter } from "next/router"
import { MdKeyboardArrowDown } from "react-icons/md"
import { BsFilter } from "react-icons/bs"
import { sorter } from "../../utils/listingsPageData"
import {
  maxBedrooms,
  totalMaxPrice,
  maxPricePerMonth,
  maxPricePerWeek,
  propertyType,
} from "../../utils/homePageData"
import Option from "../1-homePageComps/1-heroSection/Option"

const ListingsMobileForm = ({ numOfProperties }) => {
  const router = useRouter()
  const sorterRef = useRef()

  // Toggle Mobile Filters
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // These Handle the Sales/Rent buttons as well as the Monthly/Weekly pricing on rentals
  const [forSaleButton, setForSaleButton] = useState(true)
  const [toRentButton, setToRentButton] = useState(false)
  const [selectValue, setSelectValue] = useState("month")
  const [monthly, setMonthly] = useState(true)
  const [weekly, setWeekly] = useState(false)

  // User Input Values
  const [searchAreaSelected, setSearchAreaSelected] = useState("")
  const [bedroomsSelected, setBedroomsSelected] = useState("")
  const [salesMaxPriceSelected, setSalesMaxPriceSelected] = useState("")
  const [rentMonthlyPriceSelected, setRentMonthlyPriceSelected] = useState("")
  const [rentWeeklyPriceSelected, setRentWeeklyPriceSelected] = useState("")
  const [propertyTypeSelected, setPropertyTypeSelected] = useState(
    "flats,farmsland,terraced,semidetached,detached,bungalow,park_home,land"
  )
  const isRadioSelected = (value) => propertyTypeSelected === value
  const handleRadioClick = (e) => setPropertyTypeSelected(e.target.value)

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

  const submitSearch = (e) => {
    e.preventDefault()

    const { query } = router

    const userInput = {}

    const sortOption =
      sorterRef.current.options[sorterRef.current.selectedIndex].text

    let ordering = ""
    let sortBy = ""

    if (sortOption === "Highest price") {
      sortBy = "price"
      ordering = "descending"
    } else if (sortOption === "Lowest price") {
      sortBy = "price"
      ordering = "ascending"
    } else if (sortOption === "Most recent") {
      sortBy = "age"
      ordering = "descending"
    } else if (sortOption === "Oldest first") {
      sortBy = "age"
      ordering = "ascending"
    }

    if (forSaleButton) {
      userInput = {
        listing_status: "sale",
        area: searchAreaSelected,
        maximum_beds: bedroomsSelected,
        maximum_price: salesMaxPriceSelected,
        property_type: propertyTypeSelected,
        order_by: sortBy,
        ordering: ordering,
      }
    } else if (toRentButton) {
      if (monthly) {
        userInput = {
          listing_status: "rent",
          area: searchAreaSelected,
          maximum_beds: bedroomsSelected,
          maximum_price: rentMonthlyPriceSelected,
          property_type: propertyTypeSelected,
          order_by: sortBy,
          ordering: ordering,
        }
      } else if (weekly) {
        userInput = {
          listing_status: "rent",
          area: searchAreaSelected,
          maximum_beds: bedroomsSelected,
          maximum_price: rentWeeklyPriceSelected,
          property_type: propertyTypeSelected,
          order_by: sortBy,
          ordering: ordering,
        }
      }
    } // console.log(userInput)

    for (const [key, value] of Object.entries(userInput)) {
      query[key] = value
    }

    setShowMobileFilters(false)
    router.push({ pathname: "/listings", query })
  }

  return (
    <>
      {/* Toggle button - Mobile Filters */}
      <div className='relative '>
        <div
          onClick={() => setShowMobileFilters((prev) => (prev = !prev))}
          className='fixed bottom-7 right-7 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-myBlue lg:hidden'>
          <BsFilter size={40} className='mt-2 text-white' />
        </div>
      </div>
      <div
        className={`${
          showMobileFilters ? "translate-y-0" : " translate-y-full"
        } fixed top-0 left-0 right-0 bottom-0 z-10  transition-all duration-500 lg:hidden`}>
        <div className='mx-auto flex h-screen w-full items-start justify-center overflow-y-scroll bg-neutral-50 py-6 px-7 shadow-lg sm:items-center'>
          {/* Mobile Form */}
          <form onSubmit={submitSearch} className='mt-5'>
            <div className='grid grid-cols-2 gap-4'>
              {/* For Sale/Rent Buttons */}
              <button
                onClick={saleButton}
                type='button'
                className={`${
                  forSaleButton
                    ? "bg-myBlue text-white"
                    : "bg-gray-200 text-black"
                } rounded-md py-5 text-lg sm:py-7 sm:px-20 sm:text-2xl`}>
                For sale
              </button>
              <button
                onClick={rentButton}
                type='button'
                className={`${
                  toRentButton
                    ? "bg-myBlue text-white"
                    : "bg-gray-200 text-black"
                } rounded-md py-5 text-lg sm:py-7 sm:px-20 sm:text-2xl`}>
                To rent
              </button>
              {/* Search Area Input */}
              <fieldset className='relative col-span-2 mt-3 sm:mt-7'>
                <p className='absolute top-3 left-4 text-sm text-myBlue sm:text-base'>
                  Search area
                </p>
                <input
                  type='text'
                  value={searchAreaSelected}
                  onChange={(e) => setSearchAreaSelected(e.target.value)}
                  placeholder='eg. Oxford or NW3'
                  autoComplete='off'
                  id='search-area'
                  className='h-20 w-full rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-8 text-lg sm:h-24'
                />
              </fieldset>
              {/* Bedrooms */}
              <fieldset
                className={`${
                  toRentButton
                    ? "col-span-2 row-start-4"
                    : "col-span-1 row-start-3"
                } relative mt-3 sm:mt-7`}>
                <p className='pointer-events-none absolute top-3 left-4 text-sm text-myBlue sm:text-base'>
                  Bedrooms
                </p>
                <MdKeyboardArrowDown className='pointer-events-none absolute bottom-3 right-4 text-3xl sm:bottom-5' />
                <select
                  id='bedrooms'
                  value={bedroomsSelected}
                  onChange={(e) => setBedroomsSelected(e.target.value)}
                  className='h-20 w-full appearance-none rounded border border-myBlue border-opacity-30 bg-white pl-4 pt-8 text-lg sm:h-24'>
                  {maxBedrooms.map((room) => (
                    <Option
                      key={room.name + 1}
                      optionName={room.name}
                      optionValue={room.value}
                    />
                  ))}
                </select>
              </fieldset>
              {/* Max Price - Sales */}
              {forSaleButton && (
                <fieldset className='relative col-start-2 mt-3 sm:mt-7'>
                  <p className='pointer-events-none absolute top-3 left-4 text-sm text-myBlue sm:text-base'>
                    Max price
                  </p>
                  <MdKeyboardArrowDown className='pointer-events-none absolute bottom-3 right-4 text-3xl sm:bottom-5' />
                  <select
                    value={salesMaxPriceSelected}
                    onChange={(e) => setSalesMaxPriceSelected(e.target.value)}
                    className='h-20 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-8 text-lg sm:h-24'>
                    {totalMaxPrice.map((price) => {
                      return (
                        <Option
                          key={price.name + 1}
                          optionName={price.name}
                          optionValue={price.value}
                        />
                      )
                    })}
                  </select>
                </fieldset>
              )}
              {/* Max Price - Rentals | Monthly or Weekly */}
              {toRentButton && (
                <fieldset className='relative col-start-2 mt-3 sm:mt-7'>
                  <p className='pointer-events-none absolute top-3 left-4 text-sm text-myBlue sm:text-base'>
                    Max price
                  </p>
                  <MdKeyboardArrowDown className='pointer-events-none absolute bottom-3 right-4 text-3xl sm:bottom-5' />
                  {monthly && (
                    <select
                      value={rentMonthlyPriceSelected}
                      onChange={(e) =>
                        setRentMonthlyPriceSelected(e.target.value)
                      }
                      className='h-20 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-8 text-lg sm:h-24'>
                      {maxPricePerMonth.map((price) => {
                        return (
                          <Option
                            key={price.name + 1}
                            optionName={price.name}
                            optionValue={price.value}
                          />
                        )
                      })}
                    </select>
                  )}
                  {weekly && (
                    <select
                      value={rentWeeklyPriceSelected}
                      onChange={(e) =>
                        setRentWeeklyPriceSelected(e.target.value)
                      }
                      className='h-20 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-6 text-lg sm:h-24'>
                      {maxPricePerWeek.map((price) => {
                        return (
                          <Option
                            key={price.name + 1}
                            optionName={price.name}
                            optionValue={price.value}
                          />
                        )
                      })}
                    </select>
                  )}
                </fieldset>
              )}
              {/* Price Range - Rentals Only*/}
              {toRentButton && (
                <fieldset className='relative col-start-1 row-start-3 mt-3 sm:mt-7'>
                  <p className='pointer-events-none absolute top-3 left-4 text-sm text-myBlue sm:text-base'>
                    Price per
                  </p>
                  <MdKeyboardArrowDown className='pointer-events-none absolute bottom-3 right-4 text-3xl sm:bottom-5' />
                  <select
                    value={selectValue}
                    onChange={changeMonthlyWeekly}
                    className='h-20 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-8 text-lg sm:h-24'>
                    <option value='month'>Month</option>
                    <option value='week'>Week</option>
                  </select>
                </fieldset>
              )}
              {/* Property Types */}
              <fieldset className='relative col-span-2 mt-3 p-1 sm:mt-7'>
                <p className='text-lg sm:text-xl'>Property type</p>
                <div className='mt-4 grid grid-cols-2 gap-y-6 sm:mt-6'>
                  {propertyType.map((property, index) => {
                    return (
                      <div
                        key={index + 1}
                        className='flex items-center justify-start gap-2'>
                        <input
                          value={property.value}
                          type='radio'
                          name='property-types'
                          id={property.name}
                          checked={isRadioSelected(property.value)}
                          onChange={handleRadioClick}
                          className='p-3 text-myOrange focus:ring-myOrange'
                        />
                        <label
                          className='text-lg tracking-wide sm:ml-2'
                          htmlFor={property.name}>
                          {property.name}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </fieldset>
              {/* Sort dropdown */}
              <div className='relative col-span-2 mt-3 flex items-center justify-between sm:mt-7 lg:hidden'>
                <div className='mb-3'>
                  <h2 className='text-xl'>{numOfProperties.length} results</h2>
                </div>
                <select
                  ref={sorterRef}
                  onChange={submitSearch}
                  className='mb-5 h-16 w-1/2 pl-3 text-lg sm:w-64'>
                  {sorter.map((item) => {
                    return (
                      <option key={item.name} value={item.value}>
                        {item.name}
                      </option>
                    )
                  })}
                </select>
                <MdKeyboardArrowDown className='pointer-events-none absolute bottom-9 right-4 text-3xl' />
              </div>
              {/* Search Button */}
              <button
                type='submit'
                className='col-span-2 mt-5 rounded-md bg-myOrange py-4 text-xl font-medium text-white sm:py-5'>
                Filter results
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ListingsMobileForm
