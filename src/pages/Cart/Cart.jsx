import React from 'react'
import CommunityFooter from '../../Components/Footer/CommunityFooter'
import MainFooter from '../../Components/Footer/MainFooter'
import WebNavbar from '../../Components/Header/WebNavbar'
import CopyRight from '../../Components/Footer/CopyRight'
import CartPage from './_Components/CartPage'
import CartHero from './_Components/CartHero'

const Cart = () => {
  return (
    <div>
      <WebNavbar/>
      <CartHero/>
      <CartPage/>
      <CommunityFooter/>
      <MainFooter/>
      <CopyRight/>
    </div>
  )
}

export default Cart