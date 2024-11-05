import React from 'react'
import CommunityFooter from '../../Components/Footer/CommunityFooter'
import MainFooter from '../../Components/Footer/MainFooter'
import WebNavbar from '../../Components/Header/WebNavbar'
import CopyRight from '../../Components/Footer/CopyRight'
import ContactHero from './_Components/ContactHero'
import ContactInfo from './_Components/ContactInfo'
import FeedbackForm from './_Components/FeedbackForm'
import EmbeddedMap from './_Components/EmbeddedMap'

const Contact = () => {
  return (
    <div>
      <WebNavbar/>
      <ContactHero/>
      <ContactInfo/>
      <FeedbackForm/>
      <EmbeddedMap/>
      <CommunityFooter/>
      <MainFooter/>
      <CopyRight/>
    </div>
  )
}

export default Contact