import { useState } from "react"
import { useRouter } from "next/router"
import { MdKeyboardArrowDown } from "react-icons/md"
import {
  maxBedrooms,
  totalMaxPrice,
  maxPricePerMonth,
  maxPricePerWeek,
  propertyType,
} from "../../../utils/homepageFormData"
import Option from "./Option"
import Radios from "./Radios"

const HeroFormMobile = () => {
  const router = useRouter()

  const [forSaleButton, setForSaleButton] = useState(true)
  const [toRentButton, setToRentButton] = useState(false)
  const [selectValue, setSelectValue] = useState("month")
  const [monthly, setMonthly] = useState(true)
  const [weekly, setWeekly] = useState(false)

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

    console.log("submitted")
    router.push(`/listings?`)
  }

  return (
    <>
      <div className='md:px-14 lg:hidden'>
        <div className='mx-auto -mt-12 w-full rounded-2xl bg-neutral-50 px-7 py-4 shadow-lg'>
          {/* Header */}
          <h1 className='text-left text-3xl font-semibold text-myBlue'>
            We know what a home is really worth
          </h1>
          <p className='mt-2 text-left tracking-wide opacity-70'>
            Search properties for sale or to rent in the
            <span className='font-medium'> UK</span>
          </p>
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
              <fieldset className='relative col-span-2'>
                <p className='absolute top-2 left-4 text-sm text-myBlue'>
                  Search area
                </p>
                <input
                  type='text'
                  placeholder='eg. Oxford or NW3'
                  autoComplete='off'
                  id='search-area'
                  className='h-16 w-full rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-6 text-lg'
                />
              </fieldset>
              {/* Bedrooms */}
              <fieldset
                className={`${
                  toRentButton
                    ? "col-span-2 row-start-4"
                    : "col-span-1 row-start-3"
                } relative`}>
                <p className='pointer-events-none absolute top-2 left-4 text-sm text-myBlue'>
                  Bedrooms
                </p>
                <MdKeyboardArrowDown className='pointer-events-none absolute bottom-1 right-4 text-3xl' />
                <select
                  id='bedrooms'
                  className='h-16 w-full appearance-none rounded border border-myBlue border-opacity-30 bg-white pl-4 pt-6 text-lg'>
                  {maxBedrooms.maxBeds.map((room) => (
                    <Option key={room.name + 1} optionName={room.name} />
                  ))}
                </select>
              </fieldset>
              {/* Max Price - Sales */}
              {forSaleButton && (
                <fieldset className='relative col-start-2'>
                  <p className='pointer-events-none absolute top-2 left-4 text-sm text-myBlue'>
                    Max price
                  </p>
                  <MdKeyboardArrowDown className='pointer-events-none absolute bottom-1 right-4 text-3xl' />
                  <select
                    selected
                    className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-6 text-lg'>
                    {totalMaxPrice.totalMaximumPrice.map((price) => {
                      return (
                        <Option key={price.name + 1} optionName={price.name} />
                      )
                    })}
                  </select>
                </fieldset>
              )}
              {/* Max Price - Rentals | Monthly or Weekly */}
              {toRentButton && (
                <fieldset className='relative col-start-2'>
                  <p className='pointer-events-none absolute top-2 left-4 text-sm text-myBlue'>
                    Max price
                  </p>
                  <MdKeyboardArrowDown className='pointer-events-none absolute bottom-1 right-4 text-3xl' />
                  <select
                    selected
                    className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-6 text-lg'>
                    {monthly &&
                      maxPricePerMonth.map((price) => {
                        return <Option key={price + 1} optionName={price} />
                      })}
                    {weekly &&
                      maxPricePerWeek.map((price) => {
                        return <Option key={price + 1} optionName={price} />
                      })}
                  </select>
                </fieldset>
              )}
              {/* Price Range - Rentals Only*/}
              {toRentButton && (
                <fieldset className='relative col-start-1 row-start-3'>
                  <p className='pointer-events-none absolute top-2 left-4 text-sm text-myBlue'>
                    Price per
                  </p>
                  <MdKeyboardArrowDown className='pointer-events-none absolute bottom-1 right-4 text-3xl' />
                  <select
                    value={selectValue}
                    onChange={changeMonthlyWeekly}
                    className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-6 text-lg'>
                    <option value='month'>Month</option>
                    <option value='week'>Week</option>
                  </select>
                </fieldset>
              )}
              {/* Property Types */}
              <fieldset className='relative col-span-2 p-1 '>
                <p>Property type</p>
                <div className='mt-4 grid grid-cols-2 gap-y-6'>
                  {propertyType.map((property, index) => {
                    return (
                      <Radios
                        key={index + 1}
                        radioName={property}
                        radioId={property}
                      />
                    )
                  })}
                </div>
              </fieldset>
              {/* Search Button */}
              <button
                type='submit'
                className='col-span-2 rounded-md bg-myOrange py-3 px-6 text-lg font-medium text-white'>
                Find your home
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default HeroFormMobile
