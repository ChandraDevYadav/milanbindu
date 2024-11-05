import React from 'react'
import BlogHero from './_Components/BlogDetailHero'
import CommunitySoc from '../Community/_Components/CommunitySoc'
import SocialNavbar from '../../Components/Header/SocialNavbar'
import WebNavbar from '../../Components/Header/WebNavbar'
import CopyRight from '../../Components/Footer/CopyRight'
import MainFooter from '../../Components/Footer/MainFooter'
import BlogDetailMain from './_Components/BlogDetailMain'

const BlogDetail = () => {
  return (
    <div>
      <SocialNavbar/>
      <WebNavbar/>
      <BlogHero/>
      <BlogDetailMain/>
      <CommunitySoc/>
      <MainFooter/>
      <CopyRight/>
    </div>
  )
}

export default BlogDetail