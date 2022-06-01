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
      <div className='bg-white rounded-3xl w-full -mt-7 h-96 p-5'>
        <h1 className='text-left text-myBlue ml-2 text-3xl'>
          Find your dream home
        </h1>
        <p className='mt-2 ml-2 opacity-70 text-left'>
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
              } text-lg py-5 rounded-md`}>
              For sale
            </button>
            <button
              onClick={rentButton}
              type='button'
              className={`${
                toRentButton
                  ? "bg-myBlue text-white"
                  : "bg-slate-100 text-black"
              } text-lg py-5 rounded-md`}>
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
                className='border border-opacity-30 border-myBlue bg-white w-full h-16 rounded-md pl-4 pt-6 text-lg'
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
              <MdKeyboardArrowDown className='pointer-events-none absolute text-3xl bottom-1 right-4' />
              <select
                id='bedrooms'
                className='border border-opacity-30 border-myBlue bg-white w-full h-16 rounded-md pl-4 pt-6 text-lg appearance-none'>
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
                <MdKeyboardArrowDown className='pointer-events-none absolute text-3xl bottom-1 right-4' />
                <select
                  selected
                  className='border border-opacity-30 border-myBlue bg-white w-full h-16 rounded-md pl-4 pt-6 text-lg appearance-none'>
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
                <MdKeyboardArrowDown className='pointer-events-none absolute text-3xl bottom-1 right-4' />
                <select
                  selected
                  className='border border-opacity-30 border-myBlue bg-white w-full h-16 rounded-md pl-4 pt-6 text-lg appearance-none'>
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
                <MdKeyboardArrowDown className='pointer-events-none absolute text-3xl bottom-1 right-4' />
                <select
                  value={selectValue}
                  onChange={changeMonthlyWeekly}
                  className='border border-opacity-30 border-myBlue bg-white w-full h-16 rounded-md pl-4 pt-6 text-lg appearance-none'>
                  <option value='month'>Month</option>
                  <option value='week'>Week</option>
                </select>
              </fieldset>
            )}
            {/* Property Types */}
            <fieldset className='col-span-2 relative p-1 '>
              <p>Property type</p>
              <div className='grid grid-cols-2 mt-2'>
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
