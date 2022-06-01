import Image from "next/image"
import HeroImage from "../../../assets/images/hero-image.jpg"
import { MdKeyboardArrowDown } from "react-icons/md"
import {
  bedrooms,
  totalMaxPrice,
  pricePerMonth,
  pricePerWeek,
  propertyType,
} from "../../../utils/homepageMobileData"
import Option from "./Option"
import { useState } from "react"
import Radios from "./Radios"

const HeroFormMobile = () => {
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

  return (
    <>
      <div>
        <Image className='-z-10' src={HeroImage} />
      </div>
      <div className='-mt-7 h-96 w-full rounded-3xl bg-white p-5'>
        <h1 className='ml-2 text-left text-3xl text-myBlue'>
          Find your dream home
        </h1>
        <p className='mt-2 ml-2 text-left opacity-70'>
          Search properties for sale or rent in the{" "}
          <span className='font-medium'>UK</span>
        </p>
        <form className='mt-5'>
          <div className='grid grid-cols-2 gap-4'>
            {/* For Sale/Rent Buttons */}
            <button
              onClick={saleButton}
              type='button'
              className={`${
                forSaleButton
                  ? "bg-myBlue text-white"
                  : "bg-slate-100 text-black"
              } rounded-md py-5 text-lg`}>
              For sale
            </button>
            <button
              onClick={rentButton}
              type='button'
              className={`${
                toRentButton
                  ? "bg-myBlue text-white"
                  : "bg-slate-100 text-black"
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
                className='h-16 w-full appearance-none rounded-md border border-myBlue border-opacity-30 bg-white pl-4 pt-6 text-lg'>
                {bedrooms.map((room) => (
                  <Option key={room + 1} optionName={room} />
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
                  {totalMaxPrice.map((price) => {
                    return <Option key={price + 1} optionName={price} />
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
                    pricePerMonth.map((price) => {
                      return <Option key={price + 1} optionName={price} />
                    })}
                  {weekly &&
                    pricePerWeek.map((price) => {
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
              <div className='mt-2 grid grid-cols-2'>
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
          </div>
        </form>
      </div>
    </>
  )
}

export default HeroFormMobile
