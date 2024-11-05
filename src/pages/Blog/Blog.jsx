import React from 'react'
import BlogHero from './_Components/BlogHero'
import BlogGrid from './_Components/BlogGrid'
import CommunitySoc from '../Community/_Components/CommunitySoc'
import SocialNavbar from '../../Components/Header/SocialNavbar'
import WebNavbar from '../../Components/Header/WebNavbar'
import CopyRight from '../../Components/Footer/CopyRight'
import MainFooter from '../../Components/Footer/MainFooter'

const Blog = () => {
  return (
    <div>
      <SocialNavbar/>
      <WebNavbar/>
      <BlogHero/>
      <BlogGrid/>
      <CommunitySoc/>
      <MainFooter/>
      <CopyRight/>
    </div>
  )
}

export default Blog