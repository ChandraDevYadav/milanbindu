import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import About from '../../Components/About/About'
import HowItWork from '../../Components/HowItWork/HowItWork'
import PopMember from '../../Components/PopMembers/PopMembers'
import SuccessStories from '../../Components/SuccessStories/SuccessStories'
import SearchSect from '../../Components/SearchSect/SearchSect'
import WhyUs from '../../Components/WhyUs/WhyUs'
import AvailableOn from '../../Components/AvailableOn/AvailableOn'
import CommunityFooter from '../../Components/Footer/CommunityFooter'
import MainFooter from '../../Components/Footer/MainFooter'
import WebNavbar from '../../Components/Header/WebNavbar'
import CopyRight from '../../Components/Footer/CopyRight'

const Home = () => {
  return (
    <div>
      <WebNavbar/>
      <HeroSection/>
      <About/>
      <HowItWork/>
      <PopMember/>
      <SuccessStories/>
      <SearchSect/>
      <WhyUs/>
      <AvailableOn/>
      <CommunityFooter/>
      <MainFooter/>
      <CopyRight/>
    </div>
  )
}

export default Home