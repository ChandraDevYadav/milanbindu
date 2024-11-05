import React from 'react'
import CommunitySoc from '../Community/_Components/CommunitySoc'
import CommunityFooter from '../Community/_Components/CommunityFooter'
import CopyRight from '../../Components/Footer/CopyRight'
import SocialNavbar from '../../Components/Header/SocialNavbar'
import WebNavbar from '../../Components/Header/WebNavbar'
import ActivityHero from './_Components/ActivityHero'
import ActivityMain from './_Components/ActivityMain'

const Activity = () => {
  return (
    <div>
      <SocialNavbar/>
      <WebNavbar/>
      <ActivityHero/>
      <ActivityMain/>
      <CommunitySoc/>
      <CommunityFooter/>
      <CopyRight/>
    </div>
  )
}

export default Activity