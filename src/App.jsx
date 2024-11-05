import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import MemberShip from './pages/MemberShip/MemberShip'
import ComingSoon from './pages/ComingSoon/ComingSoon'
import AllGroup from './pages/AllGroup/AllGroup'
import AllMember from './pages/AllMember/AllMember'
import Blog from './pages/Blog/Blog'
import BlogDetail from './pages/BlogDetail/BlogDetail'
import BlogStyleTwo from './pages/BlogStyleTwo/BlogStyleTwo'
import Cart from './pages/Cart/Cart'
import Community from './pages/Community/Community'
import Contact from './pages/Contact/Contact'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Product from './pages/Product/Product'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Profile from './pages/Profile/Profile'
import Setting from './pages/Setting/Setting'
import Activity from './pages/Activity/Activity'

function App() {

  return (
    <>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/activity'  element={<Activity/>}/>
      <Route path='/membership'  element={<MemberShip/>}/>
      <Route path='/comingsoon'  element={<ComingSoon/>}/>
      <Route path='/allgroup'  element={<AllGroup/>}/>
      <Route path='/allmember'  element={<AllMember/>}/>
      <Route path='/blog'  element={<Blog/>}/>
      <Route path='/blogdetail'  element={<BlogDetail/>}/>
      <Route path='/blogstyletwo'  element={<BlogStyleTwo/>}/>
      <Route path='/cart'  element={<Cart/>}/>
      <Route path='/community'  element={<Community/>}/>
      <Route path='/contact'  element={<Contact/>}/>
      <Route path='/errorpage'  element={<ErrorPage/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/register'  element={<Register/>}/>
      <Route path='/product'  element={<Product/>}/>
      <Route path='/productdetail'  element={<ProductDetail/>}/>
      <Route path='/profile'  element={<Profile/>}/>
      <Route path='/setting'  element={<Setting/>}/>
    </Routes>
    </>
  )
}

export default App
