import React from 'react'
import CommunitySoc from '../Community/_Components/CommunitySoc'
import CommunityFooter from '../Community/_Components/CommunityFooter'
import CopyRight from '../../Components/Footer/CopyRight'
import SocialNavbar from '../../Components/Header/SocialNavbar'
import WebNavbar from '../../Components/Header/WebNavbar'
import ProductHero from './_Components/ProHero'
import ProductMain from './_Components/ProductMain'

const Product = () => {
  return (
    <div>
      <SocialNavbar/>
      <WebNavbar/>
      <ProductHero/>
      <ProductMain/>
      <CommunitySoc/>
      <CommunityFooter/>
      <CopyRight/>
    </div>
  )
}

export default Product