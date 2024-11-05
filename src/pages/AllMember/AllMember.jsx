import React from 'react'
import MemberMain from './_Components/MemberMain'
import SocialNavbar from '../../Components/Header/SocialNavbar'
import WebNavbar from '../../Components/Header/WebNavbar'
import CommunitySoc from '../Community/_Components/CommunitySoc'
import CommunityFooter from '../Community/_Components/CommunityFooter'
import CopyRight from '../../Components/Footer/CopyRight'
import AllMemberPage from './_Components/AllMemberPage'

const AllMember = () => {
  return (
    <div>
      <SocialNavbar/>
      <WebNavbar/>
      <MemberMain/>
      <AllMemberPage/>
      <CommunitySoc/>
      <CommunityFooter/>
      <CopyRight/>
    </div>
  )
}

export default AllMember