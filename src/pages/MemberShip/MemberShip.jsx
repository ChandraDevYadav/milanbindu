import React from 'react'
import SocialNavbar from '../../Components/Header/SocialNavbar'
import WebNavbar from '../../Components/Header/WebNavbar'
import MemMain from '../MemberShip/_Components/MemMain'
import MemberPlan from './_Components/MemberPlan'
import CommunityFooter from '../../Components/Footer/CommunityFooter'
import CopyRight from '../../Components/Footer/CopyRight'
import AboutFooter from '../About/_Components/AboutFooter'

const MemberShip = () => {
  return (
    <div>
      <SocialNavbar />
      <WebNavbar />
      <MemMain />
      <MemberPlan />
      <CommunityFooter />
      <AboutFooter />
      <CopyRight/>
    </div>
  )
}

export default MemberShip