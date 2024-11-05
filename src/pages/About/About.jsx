import React from 'react'
import AboutMain from './_Components/AboutMain'
import AboutNav from './_Components/AboutNav'
import WebNavbar from '../../Components/Header/WebNavbar'
import AboutHero from './_Components/AboutHero'
import SuccessStories from '../../Components/SuccessStories/SuccessStories'
import About from '../../Components/About/About'
import CommunityFooter from '../../Components/Footer/CommunityFooter'
import AboutDown from './_Components/AboutDown'
import AboutFooter from './_Components/AboutFooter'
import MobNavbar from '../../Components/Header/MobNavbar'
import CopyRight from '../../Components/Footer/CopyRight'

const AboutPage = () => {
  return (
    <div>
        <AboutNav/>
        <WebNavbar/>
        <AboutMain/>
        <AboutHero/>
        <SuccessStories/>
        <About/>
        <AboutDown/>
        <CommunityFooter/>
        <AboutFooter/>
        <CopyRight/>
    </div>
  )
}

export default AboutPage