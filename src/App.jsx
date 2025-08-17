import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import casque_2 from '../src/assets/casuqe_2.png'
import watch1 from '../src/assets/watch1.png'
import Product from './components/Product/Product'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BannerData1 = {
  discount:"30% OFF", 
  title:"Fine Smile",
  date:"10 Jan to 28 jan",
  image: casque_2,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem Ipsun Sit amet consectetur adipisicing alit. eaque reiciendis",
  bgColor:"#f42c37",
}

const BannerData2 = {
  discount:"30% OFF", 
  title:"Fine Smile",
  date:"10 Jan to 28 jan",
  image: watch1,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem Ipsun Sit amet consectetur adipisicing alit. eaque reiciendis",
  bgColor:"#2dcc6f",
}
const App = () => {

  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup)
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing:"ease-in-sine",
      delay: 100,
      offset: 100,
    })
    AOS.refresh()
  }, [])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data = {BannerData1}/>
      <Product/>
      <Banner data = {BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup}
              handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}
export default App