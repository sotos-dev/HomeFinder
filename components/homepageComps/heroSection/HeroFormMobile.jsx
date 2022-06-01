import Image from "next/image"
import HeroImage from "../../../assets/images/hero-image.jpg"
import { MdKeyboardArrowDown } from "react-icons/md"
import { bedrooms, totalMaxPrice } from "../../../utils/homepageMobileData"
import Option from "./Option"
import { useState } from "react"

const HeroFormMobile = () => {
  const [forSaleButton, setForSaleButton] = useState(true)
  const [toRentButton, setToRentButton] = useState(false)

  const saleButton = () => {
    setForSaleButton((prev) => (prev = !prev))
    setToRentButton((prev) => (prev = !prev))
  }
  const rentButton = () => {
    setToRentButton((prev) => (prev = !prev))
    setForSaleButton((prev) => (prev = !prev))
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
          {/* For Sale/Rent */}
          <div className='flex justify-between mb-4'>
            <button
              onClick={saleButton}
              type='button'
              className={`${
                forSaleButton
                  ? "bg-myBlue text-white"
                  : "bg-slate-100 text-black"
              } text-white py-5 px-10  w-1/2 rounded-md`}>
              For sale
            </button>
            <button
              onClick={rentButton}
              type='button'
              className={`${
                toRentButton
                  ? "bg-myBlue text-white"
                  : "bg-slate-100 text-black"
              } py-5 px-10 w-1/2 rounded-md`}>
              To rent
            </button>
          </div>
          {/* Search area */}
          <fieldset className='relative'>
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
          {/* Bedrooms and Max price */}
          <div className='flex justify-between items-center gap-4 mt-5'>
            {/* Bedrooms */}
            <fieldset className='relative flex-grow'>
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
            {/* Max price */}
            <fieldset className='relative flex-grow'>
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
          </div>
        </form>
      </div>
    </>
  )
}

export default HeroFormMobile
