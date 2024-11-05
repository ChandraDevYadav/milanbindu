import React from 'react'
import CommunitySoc from '../Community/_Components/CommunitySoc'
import CommunityFooter from '../Community/_Components/CommunityFooter'
import CopyRight from '../../Components/Footer/CopyRight'
import SocialNavbar from '../../Components/Header/SocialNavbar'
import WebNavbar from '../../Components/Header/WebNavbar'
import ProDetHero from './_Components/ProDetHero'
import ProDetMain from './_Components/ProDetMain'

const ProductDetail = () => {
  return (
    <div>
      <SocialNavbar/>
      <WebNavbar/>
      <ProDetHero/>
      <ProDetMain/>
      <CommunitySoc/>
      <CommunityFooter/>
      <CopyRight/>
    </div>
  )
}

export default ProductDetail