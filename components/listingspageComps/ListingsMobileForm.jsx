import { useState } from "react"
import { useRouter } from "next/router"
import { MdKeyboardArrowDown } from "react-icons/md"
import { BsFilter } from "react-icons/bs"
import {
  maxBedrooms,
  totalMaxPrice,
  maxPricePerMonth,
  maxPricePerWeek,
  propertyType,
} from "../../utils/homepageFormData"
import Option from "../homepageComps/heroSection/Option"
import { fetchApi } from "../../utils/fetchApi"

const ListingsMobileForm = () => {
  const router = useRouter()

  const [showMobileFilters, setShowMobileFilters] = useState(true)

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

    if (forSaleButton) {
      userInput = {
        listing_status: "sale",
        area: searchAreaSelected,
        maximum_beds: bedroomsSelected,
        maximum_price: salesMaxPriceSelected,
        property_type: propertyTypeSelected,
      }
    } else if (toRentButton) {
      if (monthly) {
        userInput = {
          listing_status: "rent",
          area: searchAreaSelected,
          maximum_beds: bedroomsSelected,
          maximum_price: rentMonthlyPriceSelected,
          property_type: propertyTypeSelected,
        }
      } else if (weekly) {
        userInput = {
          listing_status: "rent",
          area: searchAreaSelected,
          maximum_beds: bedroomsSelected,
          maximum_price: rentWeeklyPriceSelected,
          property_type: propertyTypeSelected,
        }
      }
    }

    // console.log(userInput)

    for (const [key, value] of Object.entries(userInput)) {
      query[key] = value
    }
    router.push({ pathname: "/listings", query })
  }

  return (
    <>
      <div className='relative '>
        <div
          onClick={() => setShowMobileFilters((prev) => (prev = !prev))}
          className='fixed bottom-7 right-7 z-20 flex h-20 w-20 items-center justify-center rounded-full bg-stone-200'>
          <BsFilter size={50} className='mt-2' />
        </div>
      </div>
      <div
        className={`${
          showMobileFilters ? " z-10 translate-y-0" : " translate-y-full"
        } fixed top-0 left-0 right-0 bottom-0  transition-all duration-500 md:px-14 lg:hidden`}>
        <div className='mx-auto flex h-screen w-full items-start justify-center overflow-y-scroll bg-neutral-50 py-6 px-7 shadow-lg'>
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
                } rounded-md py-5 text-lg`}>
                For sale
              </button>
              <button
                onClick={rentButton}
                type='button'
                className={`${
                  toRentButton
                    ? "bg-myBlue text-white"
                    : "bg-gray-200 text-black"
                } rounded-md py-5 text-lg`}>
                To rent
              </button>
              {/* Search Area Input */}
              <fieldset className='relative col-span-2 mt-3'>
                <p className='absolute top-3 left-4 text-sm text-myBlue'>
                  Search area
                </p>
                <input
                  type='text'
                  value={searchAreaSelected}
                  onChange={(e) => setSearchAreaSelected(e.target.value)}
                  placeholder='eg. Oxford or NW3'
                  autoComplete='off'
                  id='search-area'
                  className='h-20 w-full rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-8 text-lg'
                />
              </fieldset>
              {/* Bedrooms */}
              <fieldset
                className={`${
                  toRentButton
                    ? "col-span-2 row-start-4"
                    : "col-span-1 row-start-3"
                } relative mt-3`}>
                <p className='pointer-events-none absolute top-3 left-4 text-sm text-myBlue'>
                  Bedrooms
                </p>
                <MdKeyboardArrowDown className='pointer-events-none absolute bottom-3 right-4 text-3xl' />
                <select
                  id='bedrooms'
                  value={bedroomsSelected}
                  onChange={(e) => setBedroomsSelected(e.target.value)}
                  className='h-20 w-full appearance-none rounded border border-myBlue border-opacity-30 bg-white pl-4 pt-8 text-lg'>
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
                <fieldset className='relative col-start-2 mt-3'>
                  <p className='pointer-events-none absolute top-3 left-4 text-sm text-myBlue'>
                    Max price
                  </p>
                  <MdKeyboardArrowDown className='pointer-events-none absolute bottom-3 right-4 text-3xl' />
                  <select
                    value={salesMaxPriceSelected}
                    onChange={(e) => setSalesMaxPriceSelected(e.target.value)}
                    className='h-20 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-8 text-lg'>
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
                <fieldset className='relative col-start-2 mt-3'>
                  <p className='pointer-events-none absolute top-3 left-4 text-sm text-myBlue'>
                    Max price
                  </p>
                  <MdKeyboardArrowDown className='pointer-events-none absolute bottom-3 right-4 text-3xl' />
                  {monthly && (
                    <select
                      value={rentMonthlyPriceSelected}
                      onChange={(e) =>
                        setRentMonthlyPriceSelected(e.target.value)
                      }
                      className='h-20 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-8 text-lg'>
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
                      className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-6 text-lg'>
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
                <fieldset className='relative col-start-1 row-start-3 mt-3'>
                  <p className='pointer-events-none absolute top-3 left-4 text-sm text-myBlue'>
                    Price per
                  </p>
                  <MdKeyboardArrowDown className='pointer-events-none absolute bottom-3 right-4 text-3xl' />
                  <select
                    value={selectValue}
                    onChange={changeMonthlyWeekly}
                    className='h-20 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-8 text-lg'>
                    <option value='month'>Month</option>
                    <option value='week'>Week</option>
                  </select>
                </fieldset>
              )}
              {/* Property Types */}
              <fieldset className='relative col-span-2 mt-3 p-1'>
                <p className='text-lg'>Property type</p>
                <div className='mt-4 grid grid-cols-2 gap-y-6'>
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
                          className='text-lg tracking-wide'
                          htmlFor={property.name}>
                          {property.name}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </fieldset>
              {/* Search Button */}
              <button
                type='submit'
                className='col-span-2 mt-3 rounded-md bg-myOrange py-3 px-6 text-lg font-medium text-white'>
                Find your home
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ListingsMobileForm