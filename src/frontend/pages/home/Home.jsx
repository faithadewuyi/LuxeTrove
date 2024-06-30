import React from 'react'
import Banner from '../../components/banner/Banner'
import MenSection from './homePageComponents/MenViewSection'
import WomenSection from './homePageComponents/WomenViewSection'
import BlogSection from './homePageComponents/BlogSection'
import AssuranceSection from './homePageComponents/AssuranceSection'
import AboutSection from './homePageComponents/AboutSection'
import TestySection from './homePageComponents/TestySection'
import BrandsSection from './homePageComponents/BrandsSection'
const Home = () => {
  return (
    <>
        <Banner />
        <MenSection />
        <WomenSection />
        <BlogSection />
        <AssuranceSection />
        <AboutSection />
        <TestySection />
        <BrandsSection />

    </>
  )
}

export default Home