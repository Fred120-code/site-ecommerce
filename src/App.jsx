import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import casque_2 from '../src/assets/casuqe_2.png'
import Product from './components/Product/Product'

const BannerData = {
  discount:"30% OFF", 
  title:"Fine Smile",
  date:"10 Jan to 28 jan",
  image: casque_2,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem Ipsun Sit amet consectetur adipisicing alit. eaque reiciendis",
  bgColor:"#f42c37",
}

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data = {BannerData}/>
      <Product/>
    </div>
  )
}

export default App