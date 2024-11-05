import React from 'react'
import SocialNavbar from '../../Components/Header/SocialNavbar'
import WebNavbar from '../../Components/Header/WebNavbar'
import GroupMain from './_Components/GroupMain'
import GroupPage from './_Components/GroupPage'
import CommunitySoc from '../Community/_Components/CommunitySoc'
import CommunityFooter from '../Community/_Components/CommunityFooter'
import CopyRight from '../../Components/Footer/CopyRight'

const AllGroup = () => {
  return (
    <div>
      <SocialNavbar/>
      <WebNavbar/>
      <GroupMain/>
      <GroupPage/>
      <CommunitySoc/>
      <CommunityFooter/>
      <CopyRight/>
    </div>
  )
}

export default AllGroup