import React from 'react'
import {
    FaCarSide, FaHeadphoneAlt, FaWallet, FaCheckCircle
} from 'react-icons/fa'

const ServiceData = [
    {
        id:1,
        icon:<FaCarSide className='text-4xl md:text-5xl text-primary'/>,
        title:"Free Shopping",
        description:"Free Shipping On All Order",
    },
    {
        id:2,
        icon:<FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
        title:"Safe Money",
        description:"30 Days Money Back",
    },
    {
        id:3,
        icon:<FaWallet className='text-4xl md:text-5xl text-primary'/>,
        title:"Secure payment",
        description:"All payment Secure",
    },
    {
        id:1,
        icon:<FaHeadphoneAlt className='text-4xl md:text-5xl text-primary'/>,
        title:"Online Support 24/7",
        description:"Technical Support 24/7",
    },
]

const Services = () => {
  return (
    <div>
        <div className='container'>
            <div className='grid'>
                <div></div>
            </div>
        </div>
    </div>
  )
}
 
export default Services