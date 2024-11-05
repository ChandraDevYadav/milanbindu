import React from 'react'
import SoConNavbar from './_Components/SoConNavbar'
import ComMainNavbar from './_Components/ComMainNavbar'
import CommMain from './_Components/CommMain'
import CommunityPage from './_Components/CommunityPage'
import CommunitySoc from './_Components/CommunitySoc'
import CommunityFooter from './_Components/CommunityFooter'
import CopyRight from '../../Components/Footer/CopyRight'

const Community = () => {
  return (
    <div>
      <SoConNavbar/>
      <ComMainNavbar/>
      <CommMain/>
      <CommunityPage/>
      <CommunitySoc/>
      <CommunityFooter/>
      <CopyRight/>
    </div>
  )
}

export default Community