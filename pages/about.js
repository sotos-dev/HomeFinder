import Image from "next/image"
import Container from "../ui/container"
import HeroGraphic from "../assets/images/hero-graphic.jpg"

const About = () => {
  return (
    <>
      <Container>
        <div className='mt-10 flex h-screen flex-col items-start justify-center sm:h-[calc(100vh-284px)] sm:items-center'>
          <div className='mb-5 max-w-[300px] sm:mx-auto md:max-w-[400px]'>
            <Image src={HeroGraphic} alt='logo' />
          </div>
          <div className='mx-auto max-w-3xl'>
            <h2 className='mb-10 text-lg font-medium opacity-80 sm:text-center md:text-xl md:font-normal'>
              This is a portfolio website made with React and NextJS to showcase
              skills such as data fetching and filtering using the ZOOPLA API
              (through RapidAPI) a UK based property marketplace. Unfortunately
              Zoopla does not expose the individual listings endpoint through
              RapidAPI, this is the reason why you cannot click on a property
              card to find out more about a particular property.
            </h2>
          </div>
          <div className='flex w-full flex-col justify-center gap-5 sm:flex-row'>
            <button className='rounded-md bg-myBlue py-4 px-10 text-lg font-medium text-white'>
              Go to Home
            </button>
            <button className='rounded-md bg-myBlue py-4 px-10 text-lg font-medium text-white'>
              Go to my Portfolio
            </button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default About
