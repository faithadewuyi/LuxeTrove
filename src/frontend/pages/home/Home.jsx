
import Banner from '../../components/banner/Banner'
import MenSection from './homePageComponents/MenViewSection'
import WomenSection from './homePageComponents/WomenViewSection'
import BlogSection from './homePageComponents/BlogSection'
import AssuranceSection from './homePageComponents/AssuranceSection'
import AboutSection from './homePageComponents/AboutSection'
import TestySection from './homePageComponents/TestySection'
import BrandsSection from './homePageComponents/BrandsSection'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
const Home = () => {
  return (
    <>  <Navbar/>
        <Banner />
        <MenSection />
        <WomenSection />
        <BlogSection />
        <AssuranceSection />
        <AboutSection />
        <TestySection />
        <BrandsSection />
        <Footer/>

    </>
  )
}

export default Home