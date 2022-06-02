import Contact from "../components/homepageComps/featuredSection"
import HeroSection from "../components/homepageComps/heroSection"
import Footer from "../layout/footer"
import NavBar from "../layout/navbar"

const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* Hero section */}
      <HeroSection />
      {/* Contact me */}
      <Contact />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default HomePage
